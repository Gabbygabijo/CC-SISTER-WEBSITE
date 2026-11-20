# Sister website CloudFront preview

The application now submits its existing quote form through `/api/forms/sister/quote`. Hosting is defined in `infrastructure/hosting.yml`: private versioned S3 with OAC, CloudFront's generated HTTPS hostname, and uncached `/api/*` requests to the existing production PureOps API. There is no domain assignment or new Lambda.

Coordinated API migration, settings, release order, notifications, acceptance, alarms, retries and rollback are documented in `/home/ola-bassey/code/cc_pureops/cc-api/docs/sister-website-quotes-release.md`. All remote publication and AWS state changes are paused until Tunde restores manual approval. Commits remain user-run.

Build with Node 20.19+ (Node 24 tested) and the public `VITE_RECAPTCHA_SITE_KEY` allowed for the exact generated CloudFront hostname:

```bash
npm ci
VITE_RECAPTCHA_SITE_KEY=<public-key> node scripts/build-preview.mjs
```

The server verification secret belongs only in the PureOps backend. Never create a `VITE_*` secret. The build script writes the public key and Git revision to `dist/deployment.json`; the deployment script checks those against its supplied key and HEAD before any upload. Rebuild after the user-run commit. The ordinary validation build without a live key is not the working release artifact.

After the production/manual-approval checkpoint, set `PUREOPS_API_HOST` to the freshly verified production API Gateway hostname and run `scripts/deploy-preview.sh` with the public site key in the environment. Create the hosting stack first when its generated hostname is needed for Google's allowlist; read the outputs, configure reCAPTCHA, then build/publish. No custom domain, DNS or custom certificate is required.

`node --test scripts/test-quote-submission.cjs` verifies validation and truthful acceptance/failure behaviour. `npm run lint` and `npm run build` need a supported Node executable on PATH for child processes. Five client tests, changed-file lint and the production build/type check passed locally. The live map remains lazy-loaded.

Manual hosted acceptance is pending and recorded in `HUMAN_verification.md`. Test unchanged retries, edited submissions, submit locking, field preservation on errors and one correctly labelled PureOps communication before calling the preview operational. Separate SQS acceptance, database persistence, provider acceptance and actual mailbox receipt.
