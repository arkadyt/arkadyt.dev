import palette from '../../misc/colorPalette';

let styles = {
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        position: 'absolute',
        zIndex: -2,
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    vid: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    nameParagraph: {
        margin: 'auto',
        color: palette.FONT_WHITE,
        fontSize: '2.4em',
    }
}

export default styles;