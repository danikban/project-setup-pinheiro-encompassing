import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,MyAppHeaderText} from 'react-native';


const ClipboardContainer = () => {
    const [code, setText] = useState('');
    return (
        
        <View style={styles.containerLogin}>
            <Text styles={styles.containerHeader}>
            Clipboard
            </Text>

            
            
            <TextInput 
            placeholder="[Date/Time]"
            onChangeText={code => setText(code)}
            defaultValue={code}
            />

            <TextInput
            placeholder="[Date/Time]"
            onChangeText={code => setText(code)}
            defaultValue={code}
            />

            <TextInput
            placeholder="[Date/Time]"
            onChangeText={code => setText(code)}
            defaultValue={code}
            />
       </View>
    );
  }


  const styles= StyleSheet.create({
    containerLogin: {
      flex: 1,
      fontSize:20,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent:"center",
    },
    containerHeader: {
      fontSize:300,
      flex: 1,
      alignItems: "center",
      justifyContent:"center",
    },
    containerSubHeader: {
      fontSize:24
    },
    containerAppText: {
      fontSize:16,
    },
  });


  export default ClipboardContainer;
