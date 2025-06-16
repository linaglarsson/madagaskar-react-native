import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Dimensions, View, Animated, Text } from "react-native";
import { Image } from "expo-image";
import { useAuth } from "../../context/AuthContext";
import { Button } from "react-native";

const { width, height } = Dimensions.get("window");

export default function TabTwoScreen() {
  const spinValue = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.gif-vif.com/gmedia/giphy/Madagascar.gif",
        }}
        style={styles.backgroundGif}
        contentFit="cover"
        transition={1000}
      />

      <View style={styles.overlay}>
        <Button title="Logga ut" onPress={logout} />
        <Animated.Text
          style={[styles.title, { transform: [{ rotate: spin }] }]}
        >
          MADAGASKAR
        </Animated.Text>
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
    color: "yellow",
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 10,
    textShadowColor: "rgb(255, 0, 0)",
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
