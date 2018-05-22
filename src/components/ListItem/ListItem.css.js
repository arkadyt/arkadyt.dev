import palette from '../../misc/colorPalette';

function getStyles(index) {
    let isEven = index%2 === 0;

    let styles = {
        wrapper: {
            display: 'flex',
            backgroundColor: isEven? palette.COLOR_LIGHT : palette.COLOR_DARK,
            padding: '50px',
            justifyContent: isEven? 'flex-end' : 'flex-start',
            textAlign: isEven? 'right' : 'left',
        },
        image: {
            order: isEven? 1 : 0
        },
        description: {
            color: palette.FONT_WHITE,
        },
        descriptionEven: {
            color: palette.FONT_WHITE
        }
    }

    // Adding mutually exclusive properties.
    if (isEven) {
        styles.description.marginRight = '50px';
    } else {
        styles.description.marginLeft = '50px';
    }

    return styles;
}

export default getStyles;