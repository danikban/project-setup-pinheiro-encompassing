import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LogoutButton = ({ onPress }) => {
    return (
        <TouchableOpacity style = {{
                width: 100,
                height: 40,
                borderRadius: 10,
                padding: 10,
                backgroundColor: '#01003b',
                borderColor: 'white',
                justifyContent: 'end',
                overflow: 'hidden' }}
            // Add navigation link here Karan
            onPress = {onPress} >
            <Text style = {{ color: 'white', fontSize: 15, alignSelf: 'center' }}> 
                Logout
            </Text>
        </TouchableOpacity>
    );
};

export default LogoutButton;