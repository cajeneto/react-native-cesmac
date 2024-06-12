import { View, Text, Alert, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';




export interface EsqueciSenhaProps {

}

export function EsqueciSenha(props: EsqueciSenhaProps){

  const showEsqueciSenha = () => {
        Alert.alert(
          'Esse é um exemplo do esqueci senha',
          'Essa segunda linha é a descrição do alerta.',
        [
          { text: 'Entendido', onPress: ()=> console.log('OK PRESSIONADO') }
        ],
        { cancelable: false }
        );
      };

  return (
  <TouchableOpacity style={styles.divEsqueciSenha} onPress={showEsqueciSenha}>
      <Text style={styles.textoEsqueciSenha}>ESQUECI SENHA</Text>
      </TouchableOpacity>
  
  )


}   

const styles = StyleSheet.create({
  divEsqueciSenha: {
    top: 240,
    right: '-35%',
  },

  textoEsqueciSenha: {
    color: '#fff'
  }
})
