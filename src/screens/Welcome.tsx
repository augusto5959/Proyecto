import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props extends StackScreenProps<any, any> {}
const imagen = {uri: 'https://img.freepik.com/foto-gratis/vista-superior-comida-brasilena-espacio-copia_23-2148739178.jpg?t=st=1722721465~exp=1722725065~hmac=94c9a0f166e74cf28d708f434274a2e5e6abd90ea26f5ab96b71fba53468a837&w=360'}

export const Welcome = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imagen} style={styles.imagen}>
        <View style={styles.content}>
          <Text style={styles.title}>Bienvenidos a Euphoria</Text>
          <Text style={styles.subtitle}>Un oasis de sabores</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonText}>Acceder</Text>
          </TouchableOpacity>
          <Text style={styles.o}>o</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.buttonText}>Registrarse</Text>
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
    width:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop:60
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
  subtitle: {
    width: '80%',
    fontSize: 20,
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingBottom: 20,
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
  o: {
    width: '80%',
    color: 'white',
    fontSize: 16,
    paddingBottom: 10,
    textAlign: 'center',
  },
});
