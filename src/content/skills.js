import StorageGateway from 'images/skills/aws/storagegateway.svg';
import EKS from 'images/skills/aws/eks.svg';
import DirectConnect from 'images/skills/aws/directconnect.svg';
import SWF from 'images/skills/aws/swf.svg';
import WAF from 'images/skills/aws/waf.svg';
import Shield from 'images/skills/aws/shield.svg';
import KMS from 'images/skills/aws/ad.svg';
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

import TravisCI from 'images/skills/travisci.svg';
import CircleCI from 'images/skills/circleci.svg';
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
import CodeCommit from 'images/skills/aws/codecommit.svg';
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
import LoadBalancers from 'images/skills/aws/loadbalancers2.svg';
import RDS from 'images/skills/aws/rds.svg';
import Redshift from 'images/skills/aws/redshift.svg';
import Route53 from 'images/skills/aws/route53.svg';
import S3 from 'images/skills/aws/s3.svg';
import S3Glacier from 'images/skills/aws/s3glacier.svg';
import SES from 'images/skills/aws/ses.svg';
import SNS from 'images/skills/aws/sns.svg';
import SQS from 'images/skills/aws/sqs.svg';
import StepFunctions from 'images/skills/aws/stepfunctions.svg';
import VPC from 'images/skills/aws/vpc.svg';
import XRay from 'images/skills/aws/xray.svg';
import Kinesis from 'images/skills/aws/kinesis.svg';

const emDash = '—';

export const skills = [
  {
    icon: HTML,
    iconDark: HTML_dt,
    title: 'HTML'
  },
  {
    icon: CSS,
    iconDark: CSS_dt,
    title: 'CSS'
  },
  {
    icon: JS,
    title: 'JavaScript'
  },
  {
    icon: React,
    iconDark: React_dt,
    title: 'React.js',
    megaWide: true
  },
  {
    icon: NodeJS,
    iconDark: NodeJS_dt,
    title: 'NodeJS',
    wide: true,
  },
  {
    icon: Java,
    title: 'Java'
  },
  {
    icon: Python,
    title: 'Python'
  },
  {
    icon: Kubernetes,
    title: 'Kubernetes'
  },
  {
    icon: Docker,
    iconDark: Docker_dt,
    title: 'Docker'
  },
  {
    icon: AWS,
    iconDark: AWS_dt,
    title: `AWS Cloud Services`,
    megaWide: true
  },
  {
    icon: AwsCLI,
    title: 'AWS\nCommand Line Utils'
  },
  {
    icon: MongoDB,
    iconDark: MongoDB_dt,
    title: 'MongoDB',
    megaWide: true,
    height: 90
  },
  {
    icon: Redux,
    title: 'Redux.js',
    height: 90
  },
  {
    icon: Webpack,
    title: 'Webpack'
  },
  {
    icon: Workbox,
    title: 'Workbox.js'
  },
  {
    icon: PWA,
    title: `Progressive Web Apps`,
    megaWide: true,
    height: 80,
  },
  {
    icon: Git,
    iconDark: Git_dt,
    title: 'Git',
    megaWide: true
  },
  {
    icon: GraphQL,
    title: 'GraphQL'
  },
  {
    icon: Apollo,
    iconDark: Apollo_dt,
    title: 'Apollo'
  },
  {
    icon: GulpJS,
    title: "Gulp.js"
  },
  {
    icon: Sass,
    title: `SASS / SCSS`,
    wide: true
  },
  {
    icon: Less,
    title: `LESS`,
    wide: true,
    height: 88,
  },
  {
    icon: Bash,
    iconDark: Bash_dt,
    title: "Bash",
    megaWide: true
  },
  {
    icon: Linux,
    iconDark: Linux_dt,
    title: "Linux Systems\nAdministration"
  },
  {
    icon: Redis,
    title: 'Redis'
  },
];

export const awsSkills = [
  {
    icon: Lambda,
    title: `AWS Lambda`
  },
  {
    icon: StepFunctions,
    title: `AWS StepFunctions`
  },
  {
    icon: ApiGateway,
    title: `AWS ApiGateway`
  },
  {
    icon: VPC,
    title: `AWS VPC`
  },
  {
    icon: IAM,
    title: `AWS IAM`
  },
  {
    icon: Cognito,
    title: `AWS Cognito`
  },
  {
    icon: EC2,
    title: `AWS EC2`
  },
  {
    icon: DynamoDB,
    title: `AWS DynamoDB`
  },
  {
    icon: Route53,
    title: `AWS Route53`
  },
  {
    icon: CloudFront,
    title: `AWS CloudFront`
  },
  {
    icon: LoadBalancers,
    title: `AWS Elastic\nLoad Balancing`
  },
  {
    icon: SES,
    title: `AWS SES`
  },
  {
    icon: S3,
    title: `AWS S3`
  },
  {
    icon: SQS,
    title: `AWS SQS`
  },
  {
    icon: SNS,
    title: `AWS SNS`
  },
  {
    icon: RDS,
    title: `AWS RDS`
  },
  {
    icon: Redshift,
    title: `AWS Redshift`
  },
  {
    icon: Beanstalk,
    title: `AWS Elastic Beanstalk`
  },
  {
    icon: CloudFormation,
    title: `AWS CloudFormation`
  },
  {
    icon: EFS,
    title: `AWS EFS`
  },
  {
    icon: KMS,
    title: `AWS KMS`
  },
  {
    icon: Shield,
    title: `AWS Shield`
  },
  {
    icon: WAF,
    title: `AWS WAF`
  },
  {
    icon: DirectConnect,
    title: `AWS Direct Connect`
  },
  {
    icon: StorageGateway,
    title: `AWS Storage Gateway`
  },
  {
    icon: ElastiCache,
    title: `AWS ElastiCache`
  },
  {
    icon: ElasticSearch,
    title: `AWS Elasticsearch`
  },
  {
    icon: CloudTrail,
    title: `AWS CloudTrail`
  },
  {
    icon: CloudWatch,
    title: `AWS CloudWatch`
  },
  {
    icon: ECS,
    title: `AWS ECS`
  },
  {
    icon: CodeBuild,
    title: `AWS CodeBuild`
  },
  {
    icon: CodeDeploy,
    title: `AWS CodeDeploy`
  },
  {
    icon: CodePipeline,
    title: `AWS CodePipeline`
  },
  {
    icon: Batch,
    title: `AWS Batch`
  },
  {
    icon: SWF,
    title: `AWS SWF`
  },
  {
    icon: EKS,
    title: `AWS EKS`
  },
  {
    icon: Kinesis,
    title: `AWS Kinesis`
  },
  {
    icon: XRay,
    title: `AWS X-Ray`
  },
];
