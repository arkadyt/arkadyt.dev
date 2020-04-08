import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import Image from 'components/utils/image';
import clsx from 'clsx';
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import './styles.scss';

const Card = props => {
    const { theme } = useContext(ThemeContext);
    return <div className={clsx("Card-container", theme)}>
        <div className="frontface">
            <Image image={props.image} imgProps={{ alt: "Project Image" }} />
            <div className="description">
                <h3>{props.title}</h3>
                <span>{props.description}</span>
                <div className="tags">
                    {props.tags.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
            <div className="hint"><IconHref /></div>
        </div>
        <div className="backface">
            {props.links.map((item, index) => {
                return <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.title}&nbsp;&nbsp;<IconHref />
                </a>
            })}
        </div>
    </div>;
};

export default Card;
