import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { PRIMARY_COLOR } from "../common/constantsColor";

export const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Iniciar Sesión" />
    </View>
  );
};
