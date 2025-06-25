import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Item({ item }) {
  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowDesc(!showDesc);
  };

  const navigation = useNavigation();


  return (
    <TouchableOpacity style={styles.card} onPress={toggleDesc}>
      <View style={styles.header}>
        <Icon name="fast-food-outline" size={24} color="#ff6347" />
        <Text style={styles.name}>{item.name}</Text>
        <Icon name={showDesc ? 'chevron-up' : 'chevron-down'} size={20} color="#aaa" />
      </View>

      {showDesc && (
        <>
          <Text style={styles.description}>{item.description || 'Sem descrição disponível.'}</Text>

          {item.ingredients && item.ingredients.length > 0 && (
            <View style={styles.ingredientList}>
              <Text style={styles.ingredientTitle}>Ingredientes:</Text>
              {item.ingredients.map((ing, index) => (
                <Text key={index} style={styles.ingredientItem}>• {ing}</Text>
              ))}
            </View>
          )}
          <View style={{width: "100%", alignItems: "center", marginTop: 20}}>
            <TouchableOpacity 
              style={styles.seeMoreBtn}
              onPress={() => navigation.navigate('all-recipe', { recipeId: item.id })}
            >
              <Text style={styles.seeMoreTxt} >Ver mais</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  description: {
    marginTop: 10,
    color: '#555',
    fontSize: 14,
    lineHeight: 20,
  },
  ingredientList: {
    marginTop: 10,
  },
  ingredientTitle: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 4,
    color: '#444',
  },
  ingredientItem: {
    fontSize: 14,
    color: '#666',
  },
  seeMoreBtn: {
    backgroundColor: "#ff7043",
    padding: 10,
    width: 100,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 15
  },
  seeMoreTxt: {
    color: "#fff",
    fontWeight: "bold"
  }
});
