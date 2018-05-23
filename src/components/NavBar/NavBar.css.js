import palette from '../../misc/colorPalette';

export default {
    container: {
        position: 'fixed',
        top: 0, left: 0,
        
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        height: '55px',
        width: '100%',

        backgroundColor: palette.COLOR_DARK,

        opacity: 0,
    },
    menu: {
        display: 'flex',
        margin: 0, padding: 0,
        height: '100%',

        fontWeight: 'bold',
        color: palette.FONT_WHITE,
    },
    name: {
        marginLeft: '20px',
        fontSize: '1.3em',

        fontWeight: 'bold',
        color: palette.FONT_WHITE,        
    },
    smlinks: {
        marginRight: '20px',
    }
}