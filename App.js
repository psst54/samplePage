import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Profile from './screens/Profile';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Profile />
      </View>
    </SafeAreaView>
  );
};

export default App;
