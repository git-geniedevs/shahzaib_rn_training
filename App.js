/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ContactsSearchScreen from './app/screens/ContactsSearchScreen/ContactsSearchScreen';
import ProfileScreen from './app/screens/ProfileScreen/ProfileScreen';
const App = () => {
  
  return (
    // <ContactsSearchScreen/>
    <ProfileScreen/>
  );
};



export default App;
