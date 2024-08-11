import React, { useState } from "react";
import { TitleComponent } from "../components/TitleComponent";
import { Alert, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { BodyComponent } from "../components/BodyComponent";
import { PRIMARY_COLOR } from "../common/constantsColor";
import { styles } from "../../theme/AppTheme";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CommonActions, useNavigation } from "@react-navigation/native";

interface FormLogin {
  email: string;
  password: string;
}

interface User {
  nombre: string;
  apellido: string;
  cedula: string;
  email: string;
  password: string;
}

export const Login = () => {
  const users: User[] = [
    {
      nombre: "Augusto",
      apellido: "Viteri",
      cedula: "0202496477",
      email: "augustoviteri98@gmail.com",
      password: "12345678",
    },
    {
      nombre: "Janella",
      apellido: "Flores",
      cedula: "0200873479",
      email: "janellaflores@gmail.com",
      password: "12345678",
    },
  ];

  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: "",
    password: "",
  });

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  const navigation = useNavigation();

  const handleSetValues = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  };

  const handleSignIn = () => {
    if (formLogin.email === "" || formLogin.password === "") {
      Alert.alert("Error", "Por favor, completar todos los campos!");
      return;
    }

    if(!verifyUser()) {
      Alert.alert(
        "Error",
        "Correo y/o contraseña incorrecta"
      );
      return
    }
    console.log(formLogin);
  };

  const verifyUser = (): User => {
    const existUser = users.filter(user=> user.email===formLogin.email && user.password === formLogin.password)[0];
    return existUser;
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Iniciar Sesión" />
      <BodyComponent>
        <View>
          <Text style={styles.title}>Bienvenido de nuevo!</Text>
          <Text style={styles.subtitle}>
            Realiza tus compras de forma segura
          </Text>
        </View>
        <View style={styles.contentInput}>
          <InputComponent
            placeholder="Correo"
            handleSetValues={handleSetValues}
            name="email"
          />
          <View>
            <InputComponent
              placeholder="Contraseña"
              handleSetValues={handleSetValues}
              name="password"
              isPassword={hiddenPassword}
            />
            <Icon
              style={styles.iconPassword}
              name="visibility"
              size={25}
              color={PRIMARY_COLOR}
              onPress={() => setHiddenPassword(!hiddenPassword)}
            />
          </View>
        </View>
        <ButtonComponent textButton="Iniciar" actionButton={handleSignIn} />
        <TouchableOpacity 
        onPress={()=> navigation.dispatch(CommonActions.navigate({name: 'Register'}))}>
          <Text style={styles.textRedirect}>No tienes cuenta? Regístrate ahora</Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  );
};
