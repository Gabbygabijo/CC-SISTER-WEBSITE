import { spawnSync, execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const key = process.env.VITE_RECAPTCHA_SITE_KEY;
if (!key?.trim()) throw new Error('VITE_RECAPTCHA_SITE_KEY must be the public key allowed for the preview hostname.');
for (const [script, args] of [['node_modules/typescript/bin/tsc', ['-b']], ['node_modules/vite/bin/vite.js', ['build']]]) {
  const result = spawnSync(process.execPath, [script, ...args], { stdio: 'inherit', env: process.env });
  if (result.status !== 0) process.exit(result.status || 1);
}
writeFileSync('dist/deployment.json', JSON.stringify({ publicSiteKey: key, revision: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim() }) + '\n');
