import React from 'react';
import { View, Text, Alert, Button, StyleSheet, TextInput } from 'react-native';




export interface RealizeLoginProps {

}

export function RealizeLogin(props: RealizeLoginProps){
  const visualizarSenha = ()=> {
    
  }

  return (
    <View style={styles.bodyLogin}>
    <Text style={styles.login}>Login</Text>
    <TextInput 
      style={styles.loginInput}
      placeholder = 'Informe seu e-mail'
      placeholderTextColor='#F3F4F4'
    />
    <Text style={styles.login} >Senha</Text>
    <TextInput 
      style={styles.loginInput}
      placeholder= 'Informe sua senha'
      placeholderTextColor='#F3F4F4'
      secureTextEntry={true} 
      /* onPress={()=> {visualizarSenha}} */
      
    />
    </View>
  )
  }


  const styles = StyleSheet.create({
    bodyLogin: {
      flex: 1,
      fontSize: 28,
      height: 'auto',
      fontFamily: 'Roboto',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      top: 130,

    },

    login: {
      fontSize: 34,
      fontFamily: 'Roboto',
      width: 'auto',
      height: 50,
      color: '#E3E6FF',
      paddingBottom: 5,
      right: 100,
    },

    loginInput: {
      width: 300,
      height: 40,
      backgroundColor: '#177CA7',
      borderRadius: 20,
      fontSize: 15,
      paddingLeft: 15,
      marginBottom: 20,
      
    }

  });








