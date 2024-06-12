import {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export interface AmbienteReceitaProps {

}

//const img = require('./assets/spendWise-removebg-preview.png')

export function AmbienteReceita (props: AmbienteReceitaProps){

  const receita = () => {
    alert('Esse é o ambiente receita');
  }

  const despesa = () => {
    alert('Esse é o ambiente receita');
  }

  /* const [ nomeUser, setNomeUser ] = useState('Hostílio Neto');
  const [ idadeUser, setidadeUser ] = useState(27);
  const [ profissaoUser, setProfissaoUser ] = useState('Analista de Sistemas');
  const [ cidadeUser, setCidadeUser ] = useState('Maceió') */

  

  return (
    // inicio da view AmbienteReceita
    <View style={styles.controleReceitaDespesa}> 
          
        <View style={styles.controleReceita}>
        <TouchableOpacity 
        style={styles.containerConfiguracoesBotao}
        onPress={receita}>
          <Text style={styles.buttonText}>
            Receita
          </Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.controleDespesa}>
        <TouchableOpacity style={styles.containerConfiguracoesBotao} onPress={despesa}>
          <Text style={styles.buttonText}>
            Despesa
          </Text>
        </TouchableOpacity>
        </View>
    </View> //fim da view AmbienteReceita

  );
}


const styles = StyleSheet.create({
    controleReceitaDespesa: {
    flexDirection: 'row',
    width: 'auto',
    //backgroundColor: '#48A7D0',
    //alignContent: 'center',
    top: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },

  

  controleReceita: {

  },

  controleDespesa: {
    
  },

  


  //controle de estilo de botões: 'Receitas' e 'Despesas'.

  containerConfiguracoesBotao: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    color: "#fff",
    backgroundColor: '#48A7D0',
    width: 150,
    borderRadius: 20,
    
  },
  buttonText: {
      color: 'white',
      fontSize: 20,
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


