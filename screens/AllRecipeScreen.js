import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { recipes } from '../utils/data'
import { Platform, StatusBar } from 'react-native';

const isWeb = Platform.OS === 'web';
const isAndroid = Platform.OS === 'android';
const statusBarHeight = isAndroid ? StatusBar.currentHeight || 0 : 0;

export default function AllRecipeScreen() {
  const route = useRoute();
  const recipeId = route.params?.recipeId || '1';

  const recipe = recipes.find(r => r.id === recipeId);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Receita não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image source={recipe.image} style={styles.image} />

        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        <Text style={styles.sectionTitle}>Ingredientes</Text>
        <View style={styles.list}>
          {recipe.ingredients.map((ing, index) => (
            <Text key={index} style={styles.item}>• {ing}</Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Modo de preparo ({recipe.time})</Text>
        <View style={styles.list}>
          {recipe.steps.map((step, index) => (
            <Text key={index} style={styles.item}>{index + 1}. {step}</Text>
          ))}
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: !isWeb ? statusBarHeight + 16 : 16,
    backgroundColor: '#fffaf5',
    justifyContent: "center"
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  list: {
    paddingLeft: 10,
  },
  item: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  preparation: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 30,
  },
  error: {
    fontSize: 18,
    color: 'red',
    marginTop: 100,
    textAlign: 'center',
  },
});
