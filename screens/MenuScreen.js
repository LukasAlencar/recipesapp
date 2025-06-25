import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuScreen() {
  const [showTooltip, setShowTooltip] = useState(false);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('loggedUser');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowTooltip(!showTooltip)} style={styles.menuBtn}>
        <Ionicons name="ellipsis-vertical" size={32} color="#333" />
      </TouchableOpacity>

      {showTooltip && (
        <View style={styles.tooltip}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.tooltipText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fffaf5',
  },
  menuBtn: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 12,
  },
  tooltip: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  tooltipText: {
    fontSize: 16,
    color: '#ff6347',
    fontWeight: 'bold',
  },
});
