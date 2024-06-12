import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, KeyboardAvoidingView } from 'react-native';

// You can import supported modules from npm
//import { Card } from 'react-native-paper';

/* Mavegação entre páginas */
/* import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack'; */
import { Ionicons } from '@expo/vector-icons';
import { AreaLogo } from './components/AreaLogo'
import { RealizeLogin } from './components/loginVisu'
import { EsqueciSenha } from './components/EsqueciSenha'
import { AppAlert } from './components/ButtonExample'
import { TelaInicio } from './components/tela_de_inicio/Index'
import { AmbienteReceita } from './components/tela_de_inicio/AmbienteReceitas'
import { NovaReceita } from './components/tela_de_inicio/NovaReceita'
 



export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>

      <View>
        < AreaLogo />
        </View>
        <View>
        < RealizeLogin />
        < EsqueciSenha />
        < AppAlert />
      </View>
       



    </KeyboardAvoidingView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#074F6E',
  },
  
});


/* <View>
  < TelaInicio />
  < AmbienteReceita />
  < NovaReceita />
</View> */