import palette from '../../misc/colorPalette';

export default {
    container: {
        zIndex: 2,
        pointerEvents: 'none',

        position: 'fixed',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        height: '100vh',
        width: '100vw',
    },
    nameParagraph: {
        margin: 'auto',
        color: palette.FONT_WHITE,
        fontSize: '2.4em',
    }
}