import React from 'react';
import { StyleSheet, View } from 'react-native';

import MainComponent from './components/MainComponent';
import { DataProvider } from './components/DataProvider';

export default function App() {

  
  return (
    <DataProvider>
      <View style={styles.container}>
        <MainComponent />
      </View>
    </DataProvider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


