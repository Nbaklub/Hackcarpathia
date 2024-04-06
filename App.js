import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDQQ2pUz62IpU9WoV311teVarf51ZfD7ek",
  authDomain: "hackcarpathia.firebaseapp.com",
  projectId: "hackcarpathia",
  storageBucket: "hackcarpathia.appspot.com",
  messagingSenderId: "893077155196",
  appId: "1:893077155196:web:6b79f9f488cbdfda6148f9",
  measurementId: "G-BB3HJ9KPMV"
};
const app = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={} component={} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
