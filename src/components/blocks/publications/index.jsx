import React from 'react';
import Section from 'components/blocks/section';
import PublCard from 'components/cards/publication';
import BigButton from 'components/shared/bigbutton';
import { publications, links } from 'content';

const Publications = props => {
  return (
    <Section id="recent-from-blog" title="Publications">
        <div className="regular-text">
            <p>
                Also check out the articles I list below. I write on different topics surrounding software engineering, computers and networking.
                I publish them on Medium.
            </p>
            <p>
                I post rather rarely, when I have some spare time, so there aren't many articles yet. But more are on the way!
                I'd also appreciate a follow and a like :-)
            </p>
        </div>
        <div className="publcard-view">
            {publications.map((item, index) => (
                <PublCard {...item} />
            ))}
        </div>
        <div className="view-more-row">
            <BigButton title="View more articles" href={links.blog.href} showShadow />
        </div>
    </Section>
  );
};

export default Publications;
