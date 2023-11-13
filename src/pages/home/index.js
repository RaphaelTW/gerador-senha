import { useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'

let charset = "abcdefghiklmnopqrstuvwxyzABCDEFHGIJKLMNOPQRSTUVWXYZ0123456789!@#$*"

export function Home(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){
    let password = "";
    for(let i = 0, n =charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true);
    console.log(password);
  }

  return(
    <View style={styles.container}>
      <Image
      source={require("../../assets/logo.png")}
      style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
        style={{ height: 50}}
        minimumValue={6}
        maximumValue={20}
        minimumTrackTintColor="#03C74E"
        maximumTrackTintColor="#FF0000"
        thumbTintColor="#00FF62"
        value={size}
        onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}> Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
      </Modal>

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
