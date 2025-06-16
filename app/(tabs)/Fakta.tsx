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
          uri: "https://i.makeagif.com/media/4-25-2023/Iqg20k.gif",
        }}
        style={styles.backgroundGif}
        contentFit="cover"
        transition={1000}
      />

      {}
      <View style={styles.overlay}>
        <Text style={styles.title}>Fakta</Text>
        <Text style={styles.subtitle}>
          Fyra vänliga djur rymmer från ett zoo i New York och tar sig till ön
          Madagaskar, där de får smak för livet i det vilda.
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
    color: "pink",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    textShadowColor: "rgb(9, 255, 0)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    transform: [{ rotate: "45deg" }],
  },
  subtitle: {
    color: "pink",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgb(255, 148, 234)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    transform: [{ rotate: "10deg" }],
  },
  smallGif: {
    width: 200,
    height: 200,
    transform: [{ rotate: "-30deg" }],
  },
});
