import React from 'react';
import { View, StyleSheet, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'



export interface ButtonProps {

}

export function AppAlert(props: ButtonProps) {
      const showAlert = () => {
        Alert.alert(
          'Esse é um exemplo do alerta',
          'Essa segunda linha é a descrição do alerta.',
        [
         // { text: 'Entendido', onPress: ()=> require('./tela_de_inicio/index') }
        ],
        { cancelable: false }
        );

};

  return (
    //<View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={showAlert}>
      <Text style={styles.botao}>Acessar</Text>
      </TouchableOpacity>
    //</View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#177CA7',
    left: '12%',
    top: 290,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
  },

  botao: {
    fontFamily: 'Roboto',
    fontSize: 28,
    alignContent: 'center',
    justifyContent: 'center',
    color: '#E3E6FF',
  }

  

});

export default AppAlert;