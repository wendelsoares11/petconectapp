import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Perfil({ navigation }) {
  const handleLogout = () => {
    // Aqui você pode implementar a lógica de logout, se necessário
    console.log("Logout realizado!");
    navigation.navigate("Login");  // Redireciona para a tela de login após o logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Nome: João Silva</Text>
        <Text style={styles.label}>Email: joao.silva@example.com</Text>
        <Text style={styles.label}>Telefone: (11) 98765-4321</Text>
      </View>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  profileInfo: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});
