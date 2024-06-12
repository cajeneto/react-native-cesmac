import {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export interface NovaReceitaProps {

}



export function NovaReceita (props: NovaReceitaProps){

  const criarNovaReceita = () => {
    alert('Esse é o ambiente de criar nova receita');
  }
  /* const [ nomeUser, setNomeUser ] = useState('Hostílio Neto');
  const [ idadeUser, setidadeUser ] = useState(27);
  const [ profissaoUser, setProfissaoUser ] = useState('Analista de Sistemas');
  const [ cidadeUser, setCidadeUser ] = useState('Maceió') */

  

  return (
    // inicio da view AmbienteReceita
    <View style={styles.controleNovaReceita}> 
        <View>
        <TouchableOpacity style={styles.inserirNovaReceita} onPress={criarNovaReceita}>
          <Text style={styles.buttonText}>
           + Inserir Nova Receita...
          </Text>
        </TouchableOpacity>
        </View>
    </View> //fim da view AmbienteReceita

  );
}


const styles = StyleSheet.create({
    controleNovaReceita: {
    width: 'auto',
    height: 50,
    backgroundColor: '#48A7D0',
    alignContent: 'center',
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //controle de estilo de botões: '+ Inserir Nova Receita...'.

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


  inserirNovaReceita: {
    //marginLeft: 60,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#fff',
    flex: 1,
    marginLeft: 5,

  }, 

  





})


