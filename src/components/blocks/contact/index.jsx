import React from 'react';
import Section from 'components/shared/section';
import Link from 'components/shared/link';
import { links } from 'content';
import './styles.scss';
import './styles.mobile.scss';

const Contact = props => {
    return (
        <Section id="contact" title="Contact" accent {...props}>
            <div className="contact-view">
                {Object.values(links).map((item, index) => {
                    const data = {
                        href: item.href,
                        title: item.readableLink,
                        ico: item.ico
                    }
                    return <Link {...data} key={index} />
                })}
            </div>
        </Section>
    );
};

export default Contact;
