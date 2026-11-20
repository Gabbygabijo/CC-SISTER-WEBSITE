#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
profile=cleaning-circle-prod-admin
region=us-east-1
stack=cc-sister-website-prod
[[ "$(aws sts get-caller-identity --profile "$profile" --region "$region" --query Account --output text)" == 406463815756 ]] || exit 1
: "${PUREOPS_API_HOST:?Set PUREOPS_API_HOST to the verified production execute-api hostname}"
: "${VITE_RECAPTCHA_SITE_KEY:?Set the public reCAPTCHA site key for the preview hostname}"
[[ -s dist/index.html && -s dist/deployment.json ]] || { echo 'Run node scripts/build-preview.mjs with the public site key first.' >&2; exit 1; }
node -e 'const fs=require("fs"),cp=require("child_process");const m=JSON.parse(fs.readFileSync("dist/deployment.json"));if(m.publicSiteKey!==process.env.VITE_RECAPTCHA_SITE_KEY||m.revision!==cp.execFileSync("git",["rev-parse","HEAD"],{encoding:"utf8"}).trim())process.exit(1);'
aws cloudformation deploy --stack-name "$stack" --template-file infrastructure/hosting.yml --parameter-overrides "ApiGatewayHost=$PUREOPS_API_HOST" --profile "$profile" --region "$region" --no-fail-on-empty-changeset
bucket=$(aws cloudformation describe-stacks --stack-name "$stack" --profile "$profile" --region "$region" --query 'Stacks[0].Outputs[?OutputKey==`WebsiteBucket`].OutputValue | [0]' --output text)
distribution=$(aws cloudformation describe-stacks --stack-name "$stack" --profile "$profile" --region "$region" --query 'Stacks[0].Outputs[?OutputKey==`DistributionId`].OutputValue | [0]' --output text)
# Upload assets first; old hashed assets remain available to in-flight browser sessions.
aws s3 sync dist/ "s3://$bucket/" --exclude index.html --cache-control 'public,max-age=31536000,immutable' --profile "$profile" --region "$region"
aws s3 cp dist/index.html "s3://$bucket/index.html" --cache-control 'no-cache,no-store,must-revalidate' --content-type text/html --profile "$profile" --region "$region"
aws cloudfront create-invalidation --distribution-id "$distribution" --paths / /index.html --profile "$profile" --region "$region"
aws cloudformation describe-stacks --stack-name "$stack" --profile "$profile" --region "$region" --query 'Stacks[0].Outputs' --no-cli-pager
