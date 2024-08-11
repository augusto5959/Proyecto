import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { styles } from "../../theme/AppTheme";

export const BodyComponent = (props: any) => {
  const { height } = useWindowDimensions();
  return (
    <View
      style={{
        ...styles.contenBody,
        height: height * 0.9,
        justifyContent:'center',
        gap:40
      }}
    >
      {props.children}
    </View>
  );
};
