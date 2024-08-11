import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "../../theme/AppTheme";

interface Props {
  placeholder: string;
  handleSetValues: (name: string, value: string) => void;
  name: string;
  isPassword?: boolean;
}

export const InputComponent = ({
  placeholder,
  handleSetValues,
  name,
  isPassword = false,
}: Props) => {
  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        keyboardType="default"
        onChangeText={(value) => handleSetValues(name, value)}
        secureTextEntry={isPassword}
      />
    </View>
  );
};
