import React, { useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { PRIMARY_COLOR } from "../common/constantsColor";
import { BodyComponent } from "../components/BodyComponent";
import { styles } from "../../theme/AppTheme";
import { InputComponent } from "../components/InputComponent";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ButtonComponent } from "../components/ButtonComponent";
import { CommonActions, useNavigation } from "@react-navigation/native";

interface FormRegister {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}

export const Register = () => {
  const [formRegister, setFormRegister] = useState<FormRegister>({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  const navigation = useNavigation();

  const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleSignUp = () => {
    console.log(formRegister);
    
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Regístrate" />
      <BodyComponent>
        <View>
          <Text style={styles.title}>Estás muy cerca!</Text>
          <Text style={styles.subtitle}>
            Realiza tus compras de forma segura
          </Text>
        </View>
        <View style={styles.contentInput}>
          <InputComponent
            placeholder="Nombre"
            handleSetValues={handleSetValues}
            name="nombre"
          />
          <InputComponent
            placeholder="Apellido"
            handleSetValues={handleSetValues}
            name="apellido"
          />
          <InputComponent
            placeholder="Cédula"
            handleSetValues={handleSetValues}
            name="cedula"
          />
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
          <ButtonComponent textButton="Iniciar" actionButton={handleSignUp} />
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(CommonActions.navigate({ name: "Login" }))
            }
          >
            <Text style={styles.textRedirect}>
              Ya tienes una cuenta? Iniciar sesión ahora
            </Text>
          </TouchableOpacity>
        </View>
      </BodyComponent>
    </View>
  );
};
