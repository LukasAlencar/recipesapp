import {useState, useEffect} from 'react'
import SplashScreen from './components/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import AllRecipeScreen from './screens/AllRecipeScreen';
import CustomTabBar from './CustomTabBar';
import { useAuth } from './context/AuthContext'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MenuTabs() {
  const { logout } = useAuth();

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <CustomTabBar {...props} onLogout={logout} />
      )}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen options={{ title: 'Início' }} name="home" component={HomeScreen} />
      <Tab.Screen options={{ title: 'Receitas' }} name="recipes" component={RecipesScreen} />
      <Tab.Screen options={{ title: 'Receita' }} name="all-recipe" component={AllRecipeScreen} />
    </Tab.Navigator>
  );
}


export default function MainApp() {
  
  const { logged } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      setLoading(false);
    };
    checkLogin();
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!logged ? (
            <>
              <Stack.Screen name="login" component={LoginScreen} />
              <Stack.Screen name="register" component={RegisterScreen} />
            </>
          ) : (
            <Stack.Screen name="Tabs" component={MenuTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
