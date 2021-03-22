import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const LogoutButton = ({ onPress }) => {
    return (
        <TouchableOpacity style = {styles.button}
            // Add navigation link here Karan
            onPress = {onPress} >
            <Text style = {styles.text}> 
                Logout
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'Center',
        alignSelf: 'center',
        overflow: 'hidden',
    },
    text: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center' ,
    },
    
});

export default LogoutButton;