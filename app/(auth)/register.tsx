import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

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
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable onPress={() => router.push("/(auth)/login")}>
        <Text style={{ color: "blue", marginTop: 10 }}>
          Redan medlem? Logga in
        </Text>
      </Pressable>
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="Register" onPress={handleRegister} />
      {/* Add navigation to login if needed */}
    </View>
  );
}
