const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
function load(status = 200, accepted = true) {
  let calls = 0;
  const form = { fullName: 'Synthetic', email: 'synthetic@example.test', phone: '', service: 'Laundry & Ironing', notes: '' };
  const source = fs.readFileSync('src/lib/quoteSubmission.ts', 'utf8').replace('import.meta.env.VITE_RECAPTCHA_SITE_KEY', '"public-test-key"');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const context = { exports: {}, Promise, Error, AbortSignal, window: { setTimeout, clearTimeout, grecaptcha: { ready: fn => fn(), execute: async (_key, options) => { assert.equal(options.action, 'sister_quote'); return 'fresh-token'; } } }, fetch: async (url, options) => { calls++; assert.equal(url, '/api/forms/sister/quote'); const request = JSON.parse(options.body); assert.equal(request.recaptchaToken, 'fresh-token'); return { status, json: async () => ({ submissionId: request.submissionId, status: accepted ? 'received' : 'unexpected' }) }; } };
  vm.runInNewContext(compiled, context);
  return { client: context.exports, form, calls: () => calls };
}
test('invalid email is rejected before a submission', () => { const { client, form } = load(); assert.ok(client.validateQuoteFields({ ...form, email: 'invalid' })); assert.equal(client.validateQuoteFields(form), null); });
test('success requires a matching received response', async () => { const { client, form, calls } = load(); await client.submitQuote(form, 'same-id'); assert.equal(calls(), 1); });
test('primary notification outage remains a visible retryable error', async () => { const { client, form } = load(503); await assert.rejects(client.submitQuote(form, 'same-id'), /could not confirm receipt/); });
test('old queued response is not confirmation', async () => { const { client, form } = load(202); await assert.rejects(client.submitQuote(form, 'same-id')); });
test('mismatched acceptance body is not confirmation', async () => { const { client, form } = load(200, false); await assert.rejects(client.submitQuote(form, 'same-id')); });
