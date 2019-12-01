import React from 'react';
import PropTypes from 'prop-types'
import { titleStyle, subTitleStyle, headerStyle, containerStyle } from './Styles'

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImage: ''
}

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImage: PropTypes.string,
}



const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImage }) => {
    const headerStylesCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        color: textColor,
        backgroundImage: `url(${bgImage})`,
        fontFamily: font
    }
    return (
        <header style={headerStylesCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subTitleStyle}>{subtitle}</h2>}
            </div>
        </header>
    )
}



FullHeader.propTypes = propTypes
FullHeader.defaultProps = defaultProps

export default FullHeader;
