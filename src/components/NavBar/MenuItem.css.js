import palette from '../../misc/colorPalette';

const styles = {
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        padding: '0 30px',
        height: '100%',

        fontWeight: 'lighter',
        textTransform: 'uppercase',

        boxSizing: 'border-box',
        borderBottom: `5px solid transparent`,
        borderTop: `5px solid transparent`,

        cursor: 'pointer',
    }
}

styles.menuItemHighlighted = {
    ...styles.menuItem,
    borderBottom: `5px solid ${palette._HIGHLIGHTED}`,
}

export default styles;