import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { Image } from "expo-image";

export default function RegisterScreen() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await register(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* GIF tillagd här */}
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/39/32/e4/3932e46245051972c100069d794e5e1b.gif",
        }}
        style={{
          width: 150,
          height: 200,
          alignSelf: "center",
          marginBottom: 20,
        }}
      />
      <Text style={styles.title}>RoRegogisostotrorerora dodigog</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Pressable onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.loginText}>
          RoRedodanon momedodlolemom? LoLogoggoga inon
        </Text>
      </Pressable>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button title="Roregogisostotrorerora" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  loginText: {
    color: "pink",
    marginBottom: 15,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});
