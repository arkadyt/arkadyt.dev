#
# https://www.npmjs.com/package/s3-deploy
#

# import variables from .env file
export $(xargs < ./.env)

s3-deploy ./build/** \
  --cwd build/ \
  --bucket apphost-7 \
  --region us-west-2 \
  --private \
  --distId E31KW26N7Q3LX8 \
  --filePrefix arkadyt \
  --cache 31536000 \
  --invalidate / \
  --gzip
