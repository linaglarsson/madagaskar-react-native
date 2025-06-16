import { Pressable, Text } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(bounceAnim, {
          toValue: -1000,
          useNativeDriver: true,
          speed: 100,
          bounciness: 10,
        }),
        Animated.spring(bounceAnim, {
          toValue: 0,
          useNativeDriver: true,
          speed: 100,
          bounciness: 10,
        }),
      ])
    ).start();
  }, []);

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyY3NkazM1ajI5dXh3ZmZlNnBqZDgxbTlrcXM2bWo3bWlobjN6eGl5MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TxqdI1WbB554I/source.gif",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholderTextColor="#FF3B30"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#FF3B30"
        />

        <Pressable onPress={() => router.push("/(auth)/register")}>
          <Text>Registrera dig</Text>
        </Pressable>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Animated.View style={{ transform: [{ translateY: bounceAnim }] }}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "112%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#FF3B30",
  },
  input: {
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    color: "transparent",
  },
  error: {
    color: "#FF6B6B",
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "bold",
  },
});
