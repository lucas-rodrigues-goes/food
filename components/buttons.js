import * as React from 'react';
const { TouchableOpacity, Text, Image } = require('react-native');

// Default button (works like react button but styled and more customizable)
function Button({ title, color, textColor, style, ...rest }) {
    const buttonStyle = {
        padding: 10,
        marginVertical: 5,
        backgroundColor: color || 'blue',
        borderRadius: 8,
        width: '100%',
    };

    const textStyle = {
        color: textColor || 'white',
        textAlign: 'center',
        fontWeight: '500',
    }

    // Output
    return (
        <TouchableOpacity style={{ ...buttonStyle, ...style }} {...rest}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

// Image that behaves like a button 
function ImageButton({ onPress, style, ...rest }) {
    const imageStyle = {
        width: 300,
        height: 200,
        borderRadius: 10,
        margin: 5,
    };

    // Output
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={{...imageStyle, ...style}} {...rest}/>
        </TouchableOpacity>
    );
}

module.exports = { Button, ImageButton };