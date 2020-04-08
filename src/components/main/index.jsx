import React, { Component } from 'react';
import './styles.scss';

import NavBar from 'components/navbar';
import Section from 'components/blocks/section';
import Card from 'components/cards/project';
import ExpCard from 'components/cards/job';
import Front from 'components/blocks/intro';
import Link from 'components/utils/link';
import SkillCard from 'components/cards/skill';

import { 
  FaRegCopyright as IconCopyright 
} from 'react-icons/fa';

import bgImgWebp from 'images/backgrounds/bg4.webp';
import bgImgJpg from 'images/backgrounds/bg4_fallback.jpg';

import { 
  projects, 
  jobs, 
  skills,
  links,
  about 
} from '../../content';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <picture className="Layout-background">
          <source type="image/webp" srcset={bgImgWebp} />
          <img src={bgImgJpg} alt="Snowy Mountains" />
        </picture>
        <NavBar links={links} />
        <div className="Layout-content">
            <Front />
            <Section id="about-me" title="About Me">
            </Section>
            <Section id="work-experience" title="Experience">
                <div className="wexp-view">
                    {jobs.map((item, index) => {
                        const position = {
                            start: index === 0,
                            end: index === jobs.length - 1
                        }
                        return <ExpCard {...item} key={index} {...position} />
                    })}
                </div>
            </Section>
            <Section id="certs" title="Certifications">
            </Section>
            <Section id="skills" title="Skills">
                <div className="skills-view">
                    {skills.map((item, index) => (
                        <SkillCard {...item} />
                    ))}
                </div>
            </Section>
            <Section id="personal-projects" title="Projects">
                <div className="card-view">
                    {projects.map((item, index) => (
                        <Card {...item} key={index} />
                    ))}
                </div>
            </Section>
            <Section id="recent-from-blog" title="Publications">
            </Section>
            <Section id="contact" title="Contact" accent>
                <div className="contact-view">
                    {links.map((item, index) => {
                        const data = {
                          href: item.href,
                          title: item.readableLink,
                          ico: item.ico
                        }
                        return <Link {...data} key={index} />
                    })}
                </div>
            </Section>
            <div className="footer">
                <div><IconCopyright /><span>Arkady Titenko 2020</span></div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
