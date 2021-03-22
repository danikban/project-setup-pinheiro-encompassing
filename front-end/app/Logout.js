import React from 'react';
<<<<<<< HEAD
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
=======
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
>>>>>>> b2b099b592abdc3a499e3aab885a601337882506

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
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
    },
    text: {
        color: '#01003b',
        fontSize: 15,
        alignSelf: 'center' ,
    },
    
});

export default LogoutButton;