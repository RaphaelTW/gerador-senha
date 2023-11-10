import { View, Text, StyleSheet, Image } from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={style.logo}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginBottom: 60
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
