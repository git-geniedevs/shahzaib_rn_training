import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const ComplexGridScreen = () => {
  
    return (
      <View style={styles.container}>
        <View style={styles.firstItem} />
        <View style={styles.secondItem}>
          <View style={styles.secondItemLeftChild}></View>
          <View style={styles.secondItemRightChild}></View>
        </View>
        <View style={styles.thirdItem}>
          <View style={styles.thirdItemLeftChild} />
          <View style={styles.thirdItemRightChild}>
            <View style={styles.thirdItemRightChildTop} />
            <View style={styles.thirdItemRightChildBottom} />
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      padding: 10,
      // height: "100%",
      backgroundColor: "green",
    },
    firstItem: {
      margin: 10,
      height: 50,
      backgroundColor: "orange",
    },
    secondItem: {
      margin: 10,
      height: 50,
      flexDirection: "row",
    },
    secondItemLeftChild: {
      flex: 2,
      marginRight: 20,
      backgroundColor: "orange",
    },
    secondItemRightChild: {
      flex: 1,
      backgroundColor: "orange",
    },
    thirdItem: {
      margin: 10,
      flex: 1,
      flexDirection: "row",
    },
    thirdItemLeftChild: {
      flex: 2,
      marginRight: 20,
      backgroundColor: "yellow",
    },
    thirdItemRightChild: {
      flex: 1,
    },
    thirdItemRightChildTop: {
      flex: 1,
      marginBottom: 20,
      backgroundColor: "orange",
    },
    thirdItemRightChildBottom: {
      flex: 2,
      backgroundColor: "red",
    },
  });
export default ComplexGridScreen;
