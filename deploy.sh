#
# https://github.com/apancutt/deploy-aws-s3-cloudfront
#

# import aws key variables from .env file
export $(xargs < ./.env)

./node_modules/deploy-aws-s3-cloudfront/bin/deploy-aws-s3-cloudfront \
  --acl private \
  --bucket apphost-7 \
  --cache-control "**:no-cache" \
  --delete \
  --source ./build \
  --destination arkadyt \
  --invalidation-path "/*" \
  --distribution E31KW26N7Q3LX8 \
  --non-interactive

# --cache-control "index.html:no-cache" "**.svg:max-age=31536000" "**:max-age=604800" \
