# Sister website CloudFront preview

Updated 2026-11-20. The existing quote form posts to `/api/forms/sister/quote`; the existing PureOps API handles validation, reCAPTCHA, best-effort ProviderEventLog ingestion and SendGrid notifications. The dedicated sister queue/worker/SNS design is superseded. There is no new Lambda or custom domain.

The private S3/OAC hosting and uncached API routing remain in `infrastructure/hosting.yml`. Existing recorded hosting: stack `cc-sister-website-prod`, bucket `cc-sister-website-406463815756-prod`, distribution `EMF8H5Q3AU5WM`, https://d3qkhhvamfnq1h.cloudfront.net. These identifiers are historical release evidence; refresh actual state before operations. The working hosted quote flow is not yet verified.

Production changes and publication remain paused. The canonical API contract, main-site notification success rules, configuration, limitations and release/rollback sequence are in `/home/ola-bassey/code/cc_pureops/cc-api/docs/sister-website-quotes-release.md`. Tunde handles reCAPTCHA allowlisting; reuse the main site's public key/server configuration. No SNS mailbox confirmation is needed.

Success requires HTTP 200 with the matching submission ID and `status: received`. This confirms form handling, not database persistence or inbox delivery. The frontend retains inputs on errors and unchanged retry identity, prevents concurrent submission and resets identity after edits or Send Another Enquiry. A retry uses a fresh token. The server deduplicates PureOps rows through existing ingestion but can resend emails; no delivery journal or background retry exists.

After deployment resumes, build with installed Node 20.19+ (Node 24 tested), the public `VITE_RECAPTCHA_SITE_KEY`, and the required process-tree memory limit:

```bash
VITE_RECAPTCHA_SITE_KEY=<public-key> node scripts/build-preview.mjs
```

The server verification secret belongs only in PureOps. Never create a VITE secret. The build script records the public key and Git revision in `dist/deployment.json`; the deploy script checks both before uploading. Rebuild the release artifact from the final committed source. A validation build without the live public key is not a working release artifact.

`scripts/deploy-preview.sh` changes AWS state: it must not run during the deployment pause. On resume, freshly verify the API origin and inspect the existing hosting stack before use. Keep `/api` stripping and `/prod` addition exactly once, API caching disabled, bucket private, and API errors separate from frontend error handling. Retain old hashed assets, publish index with no-cache and invalidate only intended paths.

Local client checks: `node --test scripts/test-quote-submission.cjs`; production validation: `npm run build` under the repository memory limits, using Node 24 on child-process PATH. No installation is needed for the existing checkout. Changed-file lint covers the form component and client.

Manual hosted acceptance remains in `HUMAN_verification.md`. Check pending locks, failure retention, edits/new enquiry, one correctly labelled PureOps communication with service/notes and unchanged retry row deduplication. Record SendGrid acceptance and actual inbox receipt separately. Exercise outages with mocks or isolated test services, never by disrupting production.
