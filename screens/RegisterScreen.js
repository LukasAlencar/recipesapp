import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useAuth } from '../context/AuthContext'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useAuth();

  const handleRegister = async () => {
    try {
      await register(name, password);
      alert('Cadastro realizado! Faça login.');
      navigation.navigate('Login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046792.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Cadastro</Text>
      <TextInput placeholderTextColor="#888" placeholder="Nome de usuário" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholderTextColor="#888" placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 15, gap: 5 }}>
        <Text>Já tem conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={{ color: '#ff7043' }}>Entrar</Text>
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
