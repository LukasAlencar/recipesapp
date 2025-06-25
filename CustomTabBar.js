import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from './context/AuthContext';

export default function CustomTabBar({ state, descriptors, navigation, onLogout }) {
  const [showPopover, setShowPopover] = useState(false);

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabContainer, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const iconName =
          route.name === 'home'
            ? 'home'
            : route.name === 'recipes'
            ? 'restaurant'
            : route.name === 'all-recipe'
            ? 'pizza'
            : 'alert-circle';

        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}
          >
            <Ionicons name={iconName} size={24} color={isFocused ? '#ff7043' : '#999'} />
            <Text style={{ color: isFocused ? '#ff7043' : '#999', fontSize: 12 }}>
              {options.title}
            </Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => setShowPopover(!showPopover)}
      >
        <Ionicons name="ellipsis-vertical" size={24} color="#999" />
        <Text style={{ fontSize: 12, color: '#999' }}>Menu</Text>
      </TouchableOpacity>

      {showPopover && (
        <View style={styles.popover}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.popoverText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 100,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    alignItems: 'center',
  },
  popover: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  popoverText: {
    fontWeight: 'bold',
    color: '#ff6347',
  },
});
