import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Animated, Image } from 'react-native';

export default function SplashScreen() {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
      tension: 80,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedView, { transform: [{ scale: scaleAnim }] }]}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046757.png' }}
          style={styles.image}
        />
        <Text style={styles.logo}>Receitas Rápidas</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7043',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
