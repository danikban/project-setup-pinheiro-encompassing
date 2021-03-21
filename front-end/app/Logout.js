import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const LogoutButton = ({ onPress }) => {
    return (
        <TouchableOpacity style = {{
                width: 100,
                height: 40,
                borderRadius: 10,
                backgroundColor: '#01003b',
                borderColor: 'white',
                justifyContent: 'end',
                overflow: 'hidden' }}
            onPress = {navitation.navigate('LoginScreen')}>
            <Text style = {{ color: 'white', fontSize: 15, alignSelf: 'center' }}> 
                Logout
            </Text>
        </TouchableOpacity>
    );
};

export default LogoutButton;