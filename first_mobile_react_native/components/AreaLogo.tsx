import { Text, View, StyleSheet, Image } from 'react-native';


export interface AreaLogoProps {

}


export function AreaLogo(props: AreaLogoProps) {
  return (
    <View style={styles.container}>
    <Image source={require('../assets/spendWise-removebg-preview.png')} style={styles.img} ></Image>
    <Text style={styles.textoDeLogin}>
      Seja bem vindo ao SpendWise
    </Text>
    <Text style={styles.textoDeLogin}>
      Porque seu dinheiro vale mais!
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    backgroundColor: '#48A7D0',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative',
    
  
  },

  img: {
    width: 228,
    height: 228,
    marginTop: 50,
  },

  textoDeLogin: {
    color: '#484646',
    fontSize: 20,
    fontFamily: 'Roboto',
    alignItems: 'center',
    
  }

});
