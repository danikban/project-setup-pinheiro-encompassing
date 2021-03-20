import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,MyAppHeaderText} from 'react-native';
import externalStyle from './style/externalStyle'

const ClipboardContainer = () => {
    const [code, setText] = useState('');
    return (
        <View>
            <Text
            style= {externalStyle.textSTYLE}
            >Clipboard</Text>

            <Text
            style= {externalStyle.textCLIP1}
            >[Date/Time]</Text>

        <Text
            style= {externalStyle.textCLIP2}
            >[Date/Time]</Text>

        <Text
            style= {externalStyle.textCLIP3}
            >[Date/Time]</Text>
       </View>
    );
  }


  export default ClipboardContainer;
