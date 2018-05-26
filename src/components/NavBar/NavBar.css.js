import palette from '../../misc/colorPalette';

export const NAVBAR_HEIGHT = 55;

export default {
    container: {
        zIndex: 1,

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
        flex: 1,
        flexBasis: '35%',

        display: 'flex',
        justifyContent: 'center',
        
        margin: 0, padding: 0,
        height: '100%',

        fontWeight: 'bold',
        color: palette.FONT_WHITE,
    },
    smlinks: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',

        color: palette.FONT_WHITE,
        fontSize: '1.6em',
        
        marginRight: 10
    },
    smlink: {
        marginRight: 5
    }
}