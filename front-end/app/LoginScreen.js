import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const handlePress = () => console.log({code})
  const [code, setText] = useState('');
  return (
    <View style={styles.containerLogin}>
      <Text styles={styles.containerHeader}>
        CopyPasta
      </Text>
      <Text styles={styles.containerSubHeader}>
        sharing. made easy.
      </Text>
      <TextInput
        placeholder="CopyPasta code here!"
        onChangeText={code => setText(code)}
        defaultValue={code}
      />
      <Button 
        title= "Login"
        onPress= {handlePress}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent:"center",
  },
  containerHeader: {
    fontSize:48,
  },
  containerSubHeader: {
    fontSize:24
  },
  containerAppText: {
    fontSize:16,
  },
});

export default LoginScreen;
