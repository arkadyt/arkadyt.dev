#
# https://github.com/apancutt/deploy-aws-s3-cloudfront
#

# import aws key variables from .env file
export $(xargs < ./.env)

deploy-aws-s3-cloudfront \
  --acl private \
  --bucket apphost-7 \
  --cache-control index.html:no-cache \
  --delete \
  --source ./build \
  --destination arkadyt \
  --distribution E31KW26N7Q3LX8 \
  --invalidation-path "/*" \
  --non-interactive

