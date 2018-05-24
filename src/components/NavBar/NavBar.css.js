import palette from '../../misc/colorPalette';

export const NAVBAR_HEIGHT = 55;

export default {
    container: {
        position: 'fixed',
        top: 0, left: 0,
        
        display: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',

        height: NAVBAR_HEIGHT,
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
    smlinks: {
        marginRight: 20,
    }
}