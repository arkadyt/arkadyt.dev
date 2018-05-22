import React from 'react';
import styles from './EmailMe.css';

class EmailMe extends React.Component {
    render() {
        return <div style={styles.container}>
            <p style={styles.paragraph}>
                <span style={{ fontWeight: 'bold', fontSize: '1.6em' }}>
                    Let's get in touch!
                </span><br />
                <span style={{textAlign: 'center'}}>Email me and I promise to reply back<br/>within the next 24 hours!</span>
            </p>

            <div style={styles.forms}>
                <form>
                    <fieldset style={styles.fieldset}>
                        <input type='text' placeholder="First name" style={styles.textInput}/>
                        <input type='text' placeholder="Last name" style={styles.textInputWithMargin}/>
                    </fieldset>
                    <fieldset style={styles.fieldset}>
                        <input type='text' placeholder="Email" style={styles.textInputLong}/>
                    </fieldset>
                    <fieldset style={styles.fieldset}>
                        <textarea style={styles.textArea} placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset style={styles.fieldset}>
                        <input style={styles.submitButton} type='submit'/>
                    </fieldset>
                </form>
            </div>
        </div>;
    }
}

export default EmailMe;