import {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export interface TelaInicioProps {

}

//const img = require('./assets/spendWise-removebg-preview.png')

export function TelaInicio (props: TelaInicioProps){

  const onPresss = () => {
    alert('olá mundo');
  }

  const [ nomeUser, setNomeUser ] = useState('Hostílio Neto');
  const [ idadeUser, setidadeUser ] = useState(27);
  const [ profissaoUser, setProfissaoUser ] = useState('Analista de Sistemas');
  const [ cidadeUser, setCidadeUser ] = useState('Maceió')

  return (
    // inicio da view dos dados pessoais
  <View style={styles.divDadosPessoais}> 
          
        <View style={styles.divFotoPerfilCompleta}>
          <Image style={styles.containerBordaFotoPerfil}/>
          <Image style={styles.containerFotoPerfil}
          source={require('../tela_de_inicio/assets/foto-perfil-app-SpendWise.png')}
          />
        </View>
        <View >
        <TouchableOpacity style={styles.containerConfiguracoesBotao} onPress={onPresss}>
          <Text style={styles.buttonText}>
            Configurações
          </Text>
        </TouchableOpacity>
          <Text style={styles.containerNomeUser}>{nomeUser}</Text>
          <Text style={styles.containerDescricao}>{idadeUser}, {profissaoUser}, {cidadeUser}</Text>
        </View>
    </View> //fim da view dados pessoais
  );
}


const styles = StyleSheet.create({


  divDadosPessoais: {
    flexDirection: 'row',
    width: 'auto',
    height: 120,
    backgroundColor: '#48A7D0',
    alignContent: 'center',
    top: 40,
  },

  
  

  divFotoPerfilCompleta: {
    marginTop: 40,
    marginLeft: 15,

  },

  containerBordaFotoPerfil: {
    width: 120,
    height: 120,
    backgroundColor: '#177CA7',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 5,
    //c
    borderRadius: 100,
    //top: -20,
  },

  containerFotoPerfil: {

    width: 105,
    height: 105,
    //backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    borderRadius: 100,
    top: -112.5,
    marginLeft: 7,


  },


  //controle de estilo: 'configurações' e 'dados do usuário'.

  containerConfiguracoesBotao: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
    margin: 10,
    color: "#fff",
    backgroundColor: 'red',
    width: 110,
    marginLeft: 125,

  },
  buttonText: {
      color: 'white',
      fontSize: 14,
      
  },



  containerNomeUser: {
    //marginLeft: 60,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#fff',
    flex: 1,
    marginLeft: 5,

  }, 
  containerDescricao: {
    //marginLeft: 60,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color: '#fff',
    flex: 1,
    marginLeft: 5,
  }, 
  





})











