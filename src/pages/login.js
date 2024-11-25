import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

import Logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    // Dados fake para login
    const fakeUser = {
        email: "test@gmail.com",
        password: "senha123"
    };

    // Função para lidar com o login (usando dados fake)
    const getLogin = () => {
        setLoading(true);

        // Simulando a checagem de credenciais
        if (email === fakeUser.email && password === fakeUser.password) {
            setLoading(false);
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
            navigation.navigate('Home'); // Vai para a tela Home
        } else {
            setLoading(false);
            Alert.alert('Erro', 'Credenciais inválidas');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            
            <View style={styles.boxTop}></View>
            
            <View style={styles.boxMid}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="ENDEREÇO E-MAIL"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons name="email" size={24} color="black" />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="SENHA"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <Octicons
                        name={showPassword ? "eye-closed" : "eye"}
                        size={24}
                        color="black"
                        onPress={() => setShowPassword(!showPassword)}
                    />
                </View>
            </View>

            <View style={styles.boxBottom}>
                <Button title={loading ? "Carregando..." : "ENTRAR"} onPress={getLogin} disabled={loading} />
            </View>

            <Text style={styles.textBottom}>
                Não tem conta? 
                <Text style={styles.textBottomCreate} onPress={() => navigation.navigate('Cadastro')}>
                    Crie agora
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    boxTop: {
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boxMid: {
        marginBottom: 20,
    },
    logo: {
        width: 300,
        height: 150,
        marginTop: 40,
        alignSelf: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 5,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingLeft: 10,
    },
    boxBottom: {
        marginBottom: 20,
    },
    textBottom: {
        textAlign: 'center',
    },
    textBottomCreate: {
        fontWeight: 'bold',
        color: 'blue',
    },
});
