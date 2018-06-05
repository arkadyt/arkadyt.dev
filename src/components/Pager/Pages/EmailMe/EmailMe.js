import React from 'react';

import classes from './EmailMe.module.css';

import SMLinks from './SMLinks/SMLinks';

const emailMe = () => {
    return (
        <div className={classes.container}>
            <p>Aliquip est sit elit eiusmod quis consequat. Elit Lorem minim exercitation nulla ut reprehenderit ea. Ea ut aute Lorem sint dolor et nostrud qui non irure ullamco aliquip esse eiusmod. Laborum minim pariatur irure laborum ex minim consequat laboris esse proident est laboris. Laborum in minim ipsum consectetur cupidatat proident eu commodo voluptate enim. Qui aliquip ipsum excepteur sunt consectetur aliqua voluptate aliqua do officia duis anim.</p>
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
            <div style={{ gridColumn: '1/3' }}>
                <SMLinks />
            </div>
        </div>
    );
};

export default emailMe;