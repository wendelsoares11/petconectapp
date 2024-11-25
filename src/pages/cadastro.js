import React, { useState } from 'react';
import { Text, View, TextInput, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons'; // Importando ícone de olho


export default function Cadastro({ navigation }) {
  // Declarando os estados para o cadastro do usuário
  const [name, setName] = useState(''); 
  const [cpf, setCpf] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [street, setStreet] = useState(''); 
  const [number, setNumber] = useState(''); 
  const [cep, setCep] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false); 

  // Declarando os estados para o cadastro do pet
  const [petName, setPetName] = useState(''); 
  const [petSpecies, setPetSpecies] = useState(''); 
  const [petBreed, setPetBreed] = useState(''); 
  const [petAge, setPetAge] = useState(''); 
  const [petGender, setPetGender] = useState(''); 

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    setLoading(true);

    // Criação do usuário no banco de dados
    const userData = {
      name,
      cpf,
      phone,
      email,
      street,
      number,
      cep,
      password,
      confirmPassword
    };

    // Dados do pet
    const petData = {
      petName,
      petSpecies,
      petBreed,
      petAge,
      petGender
    };

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userData, petData }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', data.error || 'Não foi possível cadastrar. Tente novamente.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Criar Conta</Text>

        {/* Informações do usuário */}
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Nome Completo" value={name} onChangeText={setName} />
          <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Telefone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
          <TextInput style={styles.input} placeholder="Rua" value={street} onChangeText={setStreet} />
          <TextInput style={styles.input} placeholder="Número" value={number} onChangeText={setNumber} keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="CEP" value={cep} onChangeText={setCep} keyboardType="numeric" />

          {/* Senha */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Octicons
              name={showPassword ? "eye-closed" : "eye"}
              size={24}
              color="#666"
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}
            />
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword}
            />
            <Octicons
              name={showPassword ? "eye-closed" : "eye"}
              size={24}
              color="#666"
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}
            />
          </View>
        </View>

        {/* Informações do pet */}
        <View style={styles.formContainer}>
          <Text style={styles.subTitle}>Informações do Pet</Text>
          <TextInput style={styles.input} placeholder="Nome do Pet" value={petName} onChangeText={setPetName} />
          <TextInput style={styles.input} placeholder="Espécie do Pet" value={petSpecies} onChangeText={setPetSpecies} />
          <TextInput style={styles.input} placeholder="Raça do Pet" value={petBreed} onChangeText={setPetBreed} />
          <TextInput style={styles.input} placeholder="Idade do Pet" value={petAge} onChangeText={setPetAge} keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Gênero do Pet" value={petGender} onChangeText={setPetGender} />
        </View>

        {/* Botão de cadastro */}
        <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Criar Conta'}</Text>
        </TouchableOpacity>

        <Text style={styles.textBottom}>
          Já tem uma conta?{' '}
          <Text style={styles.textBottomCreate} onPress={() => navigation.navigate('Login')}>
            Faça login
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 20, backgroundColor: '#fff' },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', paddingBottom: 40 },
  title: { fontSize: 30, fontWeight: 'bold', marginVertical: 20, textAlign: 'center', color: '#007BFF' },
  subTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10, textAlign: 'center', color: '#007BFF' },
  formContainer: { marginVertical: 10 },
  input: { height: 50, borderColor: '#ddd', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 },
  passwordContainer: { position: 'relative' },
  showPasswordButton: { position: 'absolute', right: 10, top: 13 },
  button: { backgroundColor: '#007BFF', paddingVertical: 15, borderRadius: 5, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
  textBottom: { textAlign: 'center', marginTop: 20 },
  textBottomCreate: { color: '#007BFF', fontWeight: 'bold' },
});
