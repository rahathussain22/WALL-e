import React from "react";
import { View, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }} >
      <SafeAreaView style={{ flex: 1 }}>

        <View>
          <Text>Hello World</Text>
        </View>



      </SafeAreaView>
    </SafeAreaProvider>

  )
}

export default App;