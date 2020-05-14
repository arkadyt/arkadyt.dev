import React from 'react';
import Section from 'components/shared/section';
import PublCard from 'components/cards/publication';
import { publications, links } from 'content';
import './styles.scss';
import './styles.mobile.scss';

const Publications = props => {
    const buttonProps = {
        title: "View All Articles",
        href: links.blog.href
    };

    return (
        <Section id="recent-from-blog" title="Articles" {...props} button={buttonProps}>
            <div className="regular-text">
                <p>
                    Also check out the articles I list below.
                    I write on different topics surrounding cybersecurity, cloud computing,
                    computer networking and software engineering in general.
                    I publish them on Medium.
                </p>
            </div>
            <div className="publcard-view">
                {publications.map((item, index) => (
                    <PublCard {...item} key={index} number={publications.length - index} flipDirection="btu" />
                ))}
            </div>
        </Section>
    );
};

export default Publications;
