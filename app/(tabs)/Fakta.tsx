import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { Image } from "expo-image";

const { width, height } = Dimensions.get("window");

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {}
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/69/59/3f/69593ff2771fc7792efa5080b490ea70.gif",
        }}
        style={styles.backgroundGif}
        contentFit="cover"
        transition={1000}
      />

      {}
      <View style={styles.overlay}>
        <Text style={styles.title}>Fakta</Text>
        <Text style={styles.subtitle}>
          I Like To Move It Move It I Like To Move It Move It I Like To Move It
          Move It Ya Like To... (MOVE IT!)
        </Text>

        {}
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/1e/d5/e1/1ed5e1c9810075432d681e993af8df16.gif",
          }}
          style={styles.smallGif}
          contentFit="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGif: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "green",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textShadowColor: "rgb(9, 255, 0)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  subtitle: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgba(255, 0, 204, 0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  smallGif: {
    width: 200,
    height: 200,
  },
});
