import React from 'react';
import Section from 'components/blocks/section';
import Link from 'components/shared/link';
import { links } from 'content';

const Contact = props => {
  return (
    <Section id="contact" title="Contact" accent>
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
