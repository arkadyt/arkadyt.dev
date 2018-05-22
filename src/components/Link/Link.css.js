import palette from '../../misc/colorPalette';

let styles = {
    a: {
        display: 'block',
        color: palette.FONT_WHITE,
        // backgroundColor: '#989898', // debugging
        fontSize: '1.4em',
        fontWeight: 'bold',
        textDecoration: 'none',
        textTransform: 'uppercase'
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        marginLeft: '0.5em',
    },
    arrowImage: {
        marginLeft: 'auto',
        height: '2em',
        width: '2em'
    }
}

export default styles;