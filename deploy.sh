# https://www.npmjs.com/package/s3-deploy

export ./env

s3-deploy ./build/** \
  --cwd ./dist/ \
  --filePrefix arkadyt/ \
  --bucket apphost-7 \
  --region us-west-2 \
  --distId E31KW26N7Q3LX8 \
  --invalidate \
  --cache 31536000 \
  --gzip \
  --private \
  --deleteRemoved
