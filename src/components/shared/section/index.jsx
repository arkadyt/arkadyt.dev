import React, { useContext } from 'react';
import { useMobileDetector } from 'hooks';
import { links } from 'content';
import BigButton from 'components/shared/big-button';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

const Section = props => {
    const { rounded, button } = props;
    const btnProps = button === "default"
        ? { title: "View My LinkedIn", href: links.linkedin.href }
        : button;

    const { theme } = useContext(ThemeContext);
    const isMobile = useMobileDetector();
    const containerClasses = clsx(
        `Section-container`, theme, props.accent && 'accent',
        rounded && 'rounded'
    );

    return (
        <div id={props.id} className={containerClasses}>
            <div className="gradient-shadow" />
            <div className="content">
                <h1>{props.title}</h1>
                {props.children}
                {button && (
                    <div className="view-more-row">
                        <BigButton
                            title={btnProps.title}
                            href={btnProps.href}
                            flat={isMobile}
                            noRipple
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Section;
