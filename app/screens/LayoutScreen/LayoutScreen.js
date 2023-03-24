import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const LayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center"
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: '#e899c7',
    margin: 5,
  },
});

export default LayoutScreen;
