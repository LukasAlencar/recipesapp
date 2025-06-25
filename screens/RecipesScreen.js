import { View, Text, FlatList, StyleSheet } from 'react-native';
import Item from '../components/Item';
import { recipes } from "../utils/data" 
import { Platform  } from 'react-native'

const isWeb = Platform.OS === 'web';

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Receitas</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf5',
    paddingHorizontal: 16,
    paddingTop: !isWeb ? 70 : 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
});
