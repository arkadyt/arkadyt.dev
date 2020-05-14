import StorageGateway from 'images/skills/aws/storagegateway.svg';
import DirectConnect from 'images/skills/aws/directconnect.svg';
import SWF from 'images/skills/aws/swf.svg';
import WAF from 'images/skills/aws/waf.svg';
import Shield from 'images/skills/aws/shield.svg';
import KMS from 'images/skills/aws/kms.svg';
import Batch from 'images/skills/aws/batch.svg';

import React from 'images/skills/reactbig.svg';
import React_dt from 'images/skills/reactbig.d-theme.svg';
import NodeJS from 'images/skills/node2.svg';
import NodeJS_dt from 'images/skills/node2.d-theme.svg';
import AWS from 'images/skills/aws.svg';
import AWS_dt from 'images/skills/aws.d-theme.svg';
import HTML from 'images/skills/html5.svg';
import HTML_dt from 'images/skills/html5.d-theme.svg';
import CSS from 'images/skills/css3.svg';
import CSS_dt from 'images/skills/css3.d-theme.svg';
import MongoDB from 'images/skills/mongodb.svg';
import MongoDB_dt from 'images/skills/mongodb.d-theme.svg';
import Apollo from 'images/skills/apollo.svg';
import Apollo_dt from 'images/skills/apollo.d-theme.svg';
import Git from 'images/skills/git.svg';
import Git_dt from 'images/skills/git.d-theme.svg';
import Linux from 'images/skills/linux.svg';
import Linux_dt from 'images/skills/linux.d-theme.svg';
import Bash from 'images/skills/bash.svg';
import Bash_dt from 'images/skills/bash.d-theme.svg';
import Docker from 'images/skills/docker.svg';
import Docker_dt from 'images/skills/docker.d-theme.svg';

import JS from 'images/skills/js.svg';
import GraphQL from 'images/skills/graphql.svg';
import Webpack from 'images/skills/webpack.svg';
import Redis from 'images/skills/redis.svg';
import PWA from 'images/skills/pwa.svg';

import Redux from 'images/skills/redux.svg';
import Sass from 'images/skills/sass.svg';
import Less from 'images/skills/less.svg';
import Java from 'images/skills/java.svg';
import Python from 'images/skills/python.svg';
import Kubernetes from 'images/skills/kubernetes.svg';

import GulpJS from 'images/skills/gulp.svg';
import Workbox from 'images/skills/workbox.svg';

import ApiGateway from 'images/skills/aws/apigateway.svg';
import AwsCLI from 'images/skills/aws/awscli.svg';
import Beanstalk from 'images/skills/aws/beanstalk.svg';
import CloudFront from 'images/skills/aws/cloudfront.svg';
import CloudFormation from 'images/skills/aws/cloudformation.svg';
import CloudTrail from 'images/skills/aws/cloudtrail.svg';
import CloudWatch from 'images/skills/aws/cloudwatch.svg';
import CodeBuild from 'images/skills/aws/codebuild.svg';
import CodeDeploy from 'images/skills/aws/codedeploy.svg';
import CodePipeline from 'images/skills/aws/codepipeline.svg';
import DynamoDB from 'images/skills/aws/dynamodb.svg';
import Cognito from 'images/skills/aws/cognito.svg';
import EC2 from 'images/skills/aws/ec2.svg';
import ECS from 'images/skills/aws/ecs.svg';
import ElastiCache from 'images/skills/aws/elasticache.svg';
import EFS from 'images/skills/aws/efs.svg';
import ElasticSearch from 'images/skills/aws/elasticsearch.svg';
import IAM from 'images/skills/aws/iam.svg';
import Lambda from 'images/skills/aws/lambda.svg';
import LoadBalancers from 'images/skills/aws/elb.svg';
import RDS from 'images/skills/aws/rds.svg';
import Redshift from 'images/skills/aws/redshift.svg';
import Route53 from 'images/skills/aws/route53.svg';
import S3 from 'images/skills/aws/s3.svg';
import SES from 'images/skills/aws/ses.svg';
import SNS from 'images/skills/aws/sns.svg';
import SQS from 'images/skills/aws/sqs.svg';
import StepFunctions from 'images/skills/aws/stepfunctions.svg';
import VPC from 'images/skills/aws/vpc.svg';
import XRay from 'images/skills/aws/xray.svg';
import Kinesis from 'images/skills/aws/kinesis.svg';

const sk = {
  HTML:         { icon: HTML,         title: 'HTML',                            iconDark: HTML_dt                                   },
  CSS:          { icon: CSS,          title: 'CSS',                             iconDark: CSS_dt                                    },
  JS:           { icon: JS,           title: 'JavaScript',                                                                          },
  React:        { icon: React,        title: 'React.js',                        iconDark: React_dt, megaWide: true                  },
  NodeJS:       { icon: NodeJS,       title: 'NodeJS',                          iconDark: NodeJS_dt, wide: true                     },
  Java:         { icon: Java,         title: 'Java',                                                                                },
  Python:       { icon: Python,       title: 'Python',                                                                              },
  Kubernetes:   { icon: Kubernetes,   title: 'Kubernetes',                                                                          },
  Docker:       { icon: Docker,       title: 'Docker',                          height: 90, iconDark: Docker_dt                     },
  AWS:          { icon: AWS,          title: `AWS Cloud Services`,              iconDark: AWS_dt, megaWide: true                    },
  AwsCLI:       { icon: AwsCLI,       title: 'AWS\nCommand Line Utils',                                                             },
  MongoDB:      { icon: MongoDB,      title: 'MongoDB',                         iconDark: MongoDB_dt, megaWide: true, height: 90    },
  Redux:        { icon: Redux,        title: 'Redux.js',                        height: 90                                          },
  Webpack:      { icon: Webpack,      title: 'Webpack',                                                                             },
  Workbox:      { icon: Workbox,      title: 'Workbox.js',                      height: 90                                          },
  PWA:          { icon: PWA,          title: `Progressive Web Apps`,            megaWide: true, height: 80                          },
  Git:          { icon: Git,          title: 'Git',                             iconDark: Git_dt, megaWide: true                    },
  GraphQL:      { icon: GraphQL,      title: 'GraphQL',                                                                             },
  Apollo:       { icon: Apollo,       title: 'Apollo',                          iconDark: Apollo_dt                                 },
  GulpJS:       { icon: GulpJS,       title: "Gulp.js",                                                                             },
  Sass:         { icon: Sass,         title: `SASS / SCSS`,                     wide: true                                          },
  Less:         { icon: Less,         title: `LESS`,                            wide: true, height: 88                              },
  Bash:         { icon: Bash,         title: "Bash",                            iconDark: Bash_dt, megaWide: true                   },
  Linux:        { icon: Linux,        title: "Linux Systems\nAdministration",   iconDark: Linux_dt                                  },
  Redis:        { icon: Redis,        title: 'Redis',                           height: 90                                          },
};

export const skills = {
  mobile: [
    [ sk.HTML, sk.CSS, sk.JS, sk.React ],
    [ sk.NodeJS, sk.Java, sk.Python, sk.Kubernetes, sk.Docker ],
    [ sk.MongoDB, sk.AWS ],
    [ sk.AwsCLI, sk.PWA, sk.Webpack, sk.Workbox ],
    [ sk.GulpJS, sk.Git, sk.GraphQL, sk.Apollo ],
    [ sk.Redux, sk.Redis, sk.Less, sk.Sass ],
    [ sk.Linux, sk.Bash, 'dummy', 'dummy', 'dummy' ]
  ],
  desktop: [
    [ sk.HTML, sk.CSS, sk.JS, sk.React, sk.NodeJS, sk.Java, sk.Python ],
    [ sk.Kubernetes, sk.Docker, sk.AWS, sk.AwsCLI, sk.MongoDB, sk.Redux ],
    [ sk.Webpack, sk.Workbox, sk.PWA, sk.Git, sk.GraphQL, sk.Apollo ],
    [ sk.GulpJS, sk.Sass, sk.Less, sk.Bash, sk.Linux, sk.Redis ]
  ]
};

const aws = {
  Lambda:          { icon: Lambda,           title: `AWS Lambda`                     },
  StepFunctions:   { icon: StepFunctions,    title: `AWS StepFunctions`              },
  ApiGateway:      { icon: ApiGateway,       title: `AWS ApiGateway`                 },
  VPC:             { icon: VPC,              title: `AWS VPC`                        },
  IAM:             { icon: IAM,              title: `AWS IAM`                        },
  Cognito:         { icon: Cognito,          title: `AWS Cognito`                    },
  EC2:             { icon: EC2,              title: `AWS EC2`                        },
  DynamoDB:        { icon: DynamoDB,         title: `AWS DynamoDB`                   },
  Route53:         { icon: Route53,          title: `AWS Route53`                    },
  CloudFront:      { icon: CloudFront,       title: `AWS CloudFront`                 },
  LoadBalancers:   { icon: LoadBalancers,    title: `AWS Elastic\nLoad Balancing`    },
  SES:             { icon: SES,              title: `AWS SES`                        },
  S3:              { icon: S3,               title: `AWS S3`                         },
  SQS:             { icon: SQS,              title: `AWS SQS`                        },
  SNS:             { icon: SNS,              title: `AWS SNS`                        },
  RDS:             { icon: RDS,              title: `AWS RDS`                        },
  Redshift:        { icon: Redshift,         title: `AWS Redshift`                   },
  Beanstalk:       { icon: Beanstalk,        title: `AWS Elastic Beanstalk`          },
  CloudFormation:  { icon: CloudFormation,   title: `AWS CloudFormation`             },
  EFS:             { icon: EFS,              title: `AWS EFS`                        },
  KMS:             { icon: KMS,              title: `AWS KMS`                        },
  Shield:          { icon: Shield,           title: `AWS Shield`                     },
  WAF:             { icon: WAF,              title: `AWS WAF`                        },
  DirectConnect:   { icon: DirectConnect,    title: `AWS Direct Connect`             },
  StorageGateway:  { icon: StorageGateway,   title: `AWS Storage Gateway`            },
  ElastiCache:     { icon: ElastiCache,      title: `AWS ElastiCache`                },
  ElasticSearch:   { icon: ElasticSearch,    title: `AWS Elasticsearch`              },
  CloudTrail:      { icon: CloudTrail,       title: `AWS CloudTrail`                 },
  CloudWatch:      { icon: CloudWatch,       title: `AWS CloudWatch`                 },
  ECS:             { icon: ECS,              title: `AWS ECS`                        },
  CodeBuild:       { icon: CodeBuild,        title: `AWS CodeBuild`                  },
  CodeDeploy:      { icon: CodeDeploy,       title: `AWS CodeDeploy`                 },
  CodePipeline:    { icon: CodePipeline,     title: `AWS CodePipeline`               },
  Batch:           { icon: Batch,            title: `AWS Batch`                      },
  SWF:             { icon: SWF,              title: `AWS SWF`                        },
  Kinesis:         { icon: Kinesis,          title: `AWS Kinesis`                    },
  XRay:            { icon: XRay,             title: `AWS X-Ray`                      },
};

/**
 * Fills the array with arrays of items from source array,
 * where each row can be at maximum as long as {cols} argument.
 * Fills the last row with dummy items to reach {cols} length.
 */
function fillArray(source, cols) {
  let currRow = 0;
  let rows = [[]];

  Object.values(source).forEach(item => {
    if (rows[currRow].length === cols) currRow += 1;
    if (!Array.isArray(rows[currRow])) rows[currRow] = [];
    rows[currRow].push(item);
  });

  /**
   * Fill last row with dummy objects to keep flexbox visual item
   * distribution similar to full rows.
   */
  const lastRow = rows[rows.length - 1];
  const dummyCount = cols - lastRow.length;
  lastRow.push(...(Array(dummyCount).fill('dummy')));

  return rows;
};

export const awsSkills = {
  mobile: fillArray(aws, 6),
  desktop: fillArray(aws, 10)
};
