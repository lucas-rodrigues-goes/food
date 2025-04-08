import * as React from 'react';
const { View, Text } = require('react-native');

// View component that attempts to center its content
function Center({ children, style, ...rest }) {
    const centerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
    };

    // Output
    return (
        <View style={{ ...centerStyle, ...style }} {...rest}>
            {children}
        </View>
    );
}

// View component that aims to create a visual separation of an area, that is usually given a title
function Container({ children, style, title, ...rest }) {
    // Container default styling
    const containerStyle = {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    };

    // Optional title child
    const titleStyle = {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#444',
    }
    const titleElement = title && <Text style={titleStyle}>{title}</Text> 

    // Output
    return (
        <View style={{ ...containerStyle, ...style }} {...rest}>
            {titleElement}
            {children}
        </View>
    );
}


module.exports = { Center, Container };
