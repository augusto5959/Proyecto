import React from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { styles } from "../../theme/AppTheme";
import { TitleComponent } from "../components/TitleComponent";
import { WHITE_COLOR } from "../common/constantsColor";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const Welcome = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={WHITE_COLOR} />
      <Text style={styles.title}>Euphoria</Text>
      <Image
        source={{
          uri: "https://www.shutterstock.com/image-photo/delicious-hamburger-flying-ingredients-on-600nw-508341484.jpg",
        }}
        style={styles.imagen}
      ></Image>
      <Text style={styles.textRedirect}>Un oasis de sabores</Text>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: "Login" }))
          }
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: "Register" }))
          }
        >
          <Text style={styles.buttonText}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
