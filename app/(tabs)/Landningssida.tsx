import React, { useRef, useEffect } from "react";
import { StyleSheet, Dimensions, View, Animated } from "react-native";
import { Image } from "expo-image";

const { width, height } = Dimensions.get("window");

export default function TabTwoScreen() {
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -100,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 10,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [bounceValue]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://gifdb.com/images/high/madagascar-penguin-dance-vam0qxyrpujk7y7o.gif",
        }}
        style={styles.backgroundGif}
        contentFit="cover"
        transition={1000}
      />

      <Animated.Text
        style={[
          styles.bounceText,
          { transform: [{ translateY: bounceValue }] },
        ]}
      >
        HEJ SAGA!
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundGif: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
  },
  bounceText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
});
