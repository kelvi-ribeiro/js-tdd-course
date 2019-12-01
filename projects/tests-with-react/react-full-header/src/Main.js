import React from 'react';
import PropTypes from 'prop-types'

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImage:''
}

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImage }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        backgroundImage:`url(${bgImage})`,
        fontFamily: font
    }
    return (
        <header style={headerStyles}>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    )
}

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImage: PropTypes.string,
}

FullHeader.propTypes = propTypes
FullHeader.defaultProps = defaultProps

export default FullHeader;
