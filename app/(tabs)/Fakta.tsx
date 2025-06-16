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
          uri: "https://dl.glitter-graphics.com/pub/3544/3544742atmg08f4bk.gif",
        }}
        style={styles.backgroundGif}
        contentFit="cover"
        transition={1000}
      />

      {}
      <View style={styles.overlay}>
        <Text style={styles.title}>Fakta</Text>
        <Text style={styles.subtitle}>
          Madagaskar är världens fjärde största ö och ligger i Indiska oceanen
          cirka 50 mil från det afrikanska fastlandet. På Madagaskar har en unik
          flora och fauna utvecklats sedan ön avskildes från de afrikanska och
          asiatiska kontinenterna för 160 miljoner år sedan. Den etniskt
          blandade befolkningen har såväl afrikanska som indonesiska inslag.
          Madagaskar har gott om mineraler och bördiga jordar, men politisk
          instabilitet har hämmat den ekonomiska utvecklingen.
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
    color: "green",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgb(0, 255, 26)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  smallGif: {
    width: 200,
    height: 200,
  },
});
