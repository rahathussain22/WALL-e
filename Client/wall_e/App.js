import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/AppNavigation';
export default function App() {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <SafeAreaView style={{flex:1}} >
        <AppNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

