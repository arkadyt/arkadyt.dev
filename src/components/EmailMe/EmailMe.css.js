import palette from '../../misc/colorPalette';
import { NAVBAR_HEIGHT } from '../NavBar/NavBar.css';

let styles = {
    container: {
        backgroundColor: palette.COLOR_LIGHT,
        height: window.innerHeight - NAVBAR_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        margin: 'auto',
        color: palette.FONT_WHITE,
        fontSize: '1.6em',
    },
    forms: {
        margin: 'auto',
    },
    fieldset: {
        border: 0,
        margin: 0,
        padding: '12px 0',
    },
    textInput: {
        height: '40px',
        width: '250px',

        borderRadius: '10px',
        border: 0,
        padding: '10px',

        fontSize: '2em',
    },
    submitButton: {
        height: '50px',
        width: '160px',
        fontSize: '1.6em',
        color: palette.FONT_WHITE,
        border: '2px solid #070',
        backgroundColor: '#0b0',
        borderRadius: '10px',
        float: 'right',
        textTransform: 'uppercase'
    },

    print() {
        console.log(this.textInput)
    }
}

styles.textInputWithMargin = {
    ...styles.textInput,
    marginLeft: '25px'
}

styles.textInputLong = {
    ...styles.textInput,
    width: '545px'
}

styles.textArea = {
    ...styles.textInput,
    width: '545px', 
    height: '200px'
}

export default styles;