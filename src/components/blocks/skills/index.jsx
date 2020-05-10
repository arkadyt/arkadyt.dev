import React from 'react';
import { skills, links, awsSkills } from 'content';
import { useMobileDetector } from 'hooks';
import BigButton from 'components/shared/big-button';
import SkillCard from 'components/cards/skill';
import Section from 'components/shared/section';
import './styles.scss';
import './styles.mobile.scss';

const Skills = props => {
  const isMobile = useMobileDetector();
  const _skills = isMobile
    ? skills.slice().sort((a, b) => a.mobileOrder - b.mobileOrder)
    : skills;

  return (
    <Section id="skills" title="Skills" {...props}>
        <div className="regular-text">
            <p>
                My areas of expertise include frameworks, languages and operating systems surrounding the development of cloud based,
                distributed web applications powered by MERN stack and AWS.
            </p>
            <p>
                They include (in no particular order) JavaScript, Python, Java, React.js, SCSS, LESS, CSS, HTML, Redux, Node.js, MongoDB,
                mongoose.js, Redis, GraphQL, Apollo, Docker, Kubernetes, AWS, Linux OS management, BASH and others.
            </p>
        </div>
        <div className="skills-view">
            {_skills.map((item, index) => (
                <SkillCard key={index} {...item} />
            ))}
        </div>
        <div className="regular-text">
            <p>
                At my job I also actively work with a wide range of AWS services to design new or support the existing cloud solutions.
                Ones that I am most proficient at include: AWS Lambda, Step Functions,
                ApiGateway, VPC, IAM, Cognito, EC2, DynamoDB, Route53, CloudFront, Elastic Load Balancers, SES, S3, SQS and SNS.
            </p>
            <p>
                Following below is the full list of AWS services I've been intensively working with and have developed a quite deep understanding of.
                Services are sorted by my proficiency level in them (in descending order).
            </p>
        </div>
        <div className="skills-view">
            {awsSkills.map((item, index) => (
                <SkillCard key={index} {...item} />
            ))}
        </div>
        <div className="view-more-row">
            <BigButton
              title="View My LinkedIn"
              href={links.linkedin.href}
              flat
              noRipple
              showShadow
            />
        </div>
    </Section>
  );
};

export default Skills;
