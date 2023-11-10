import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function App(){
  return(
    <View style={styles.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo}
      />

      <Text style={styles.title}>20 Caracteres</Text>

      <View style={styles.area}>
        <Slider
        style={{ height: 50}}
        minimumValue={6}
        maximumValue={20}
        minimumTrackTintColor="#03C74E"
        maximumTrackTintColor="#FF0000"
        thumbTintColor="#00FF62"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Gerar Senha</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 6,
  },
  button:{
    backgroundColor: "#00FF62",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 18,
  },
  buttonText:{
    color: "#006B12",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  }
})










































// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Ola Mundo!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
