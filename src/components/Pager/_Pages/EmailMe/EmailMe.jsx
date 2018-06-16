import React from 'react';
import Card from '../../Card/Card';

import classes from './EmailMe.module.css';

const emailMe = () => {
    const text = `
        Sunt incididunt duis cillum aliquip deserunt amet adipisicing officia dolor sint laboris. Tempor culpa incididunt sint cillum laboris exercitation ullamco aliqua. Aliquip ipsum voluptate adipisicing dolore ex elit sint veniam adipisicing.
    `;
    return <Card header='Hi,' body={text}>
        <div className={classes.content}>
            <form>
                <fieldset>
                    <input type='text' placeholder='Your name' />
                </fieldset>
                <fieldset>
                    <input type='email' placeholder='Email' />
                </fieldset>
                <fieldset>
                    <textarea placeholder='Message' />
                </fieldset>
                <fieldset>
                    <input type='submit' value='Submit' />
                </fieldset>
            </form>
        </div>
    </Card>;
};

export default emailMe;