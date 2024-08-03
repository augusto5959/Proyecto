import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props extends StackScreenProps<any, any> {}
const imagen = {uri: 'https://img.freepik.com/foto-gratis/vista-superior-delicioso-bakso-indonesio_23-2148933346.jpg?t=st=1722725974~exp=1722729574~hmac=ef5cf147b2fbf17f97c4c4ed3467a29ee15214d04f10e2b34bf06ad58769b27f&w=360'}

export const Login = ({ navigation }: Props) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={imagen} style={styles.imagen}>
        <View style={styles.content}>
          <Text style={styles.title}>Iniciar sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="white"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="white"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Acceder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <Text style={styles.or}>o</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 40,
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  or: {
    color: 'white',
    fontSize: 16,
    paddingBottom: 10,
    textAlign: 'center',
  },
});
