import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import {useAuth} from '../context/AuthContext'

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(name, password);
    } catch (error) {
      alert(error.message); // usuário/senha inválidos
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046792.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Receitas Rápidas</Text>
      <TextInput placeholderTextColor="#888" placeholder="Nome de usuário" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholderTextColor="#888" placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 15, gap: 5 }}>
        <Text>Não tem conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={{ color: '#ff7043' }}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#ff7043',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
