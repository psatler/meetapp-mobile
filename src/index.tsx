import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <Text> Hello, World! </Text>
        <Text> Hello, World! </Text>
        <Text> Hello, World! </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
