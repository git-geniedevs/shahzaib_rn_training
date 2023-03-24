import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TitleBar}>
        <Entypo
          name="chevron-thin-left"
          size={25}
          color={'#A2A3A5'}
          style={{marginLeft: 10}}
        />
        <View style={styles.HeaderTextContainer}>
          <Text style={styles.titleText}>My Profile</Text>
        </View>
        <Entypo name="dots-three-vertical" size={25} color={'#A2A3A5'} />
      </View>
      <View style={styles.mainActivityCon}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images.jpeg')}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>Edward Larry</Text>
          <Text style={styles.jobText}>Senior Designer</Text>
        </View>

        <Feather
          name="edit"
          size={25}
          color={'#CCCED6'}
          style={{marginBottom: 20}}
        />
      </View>
      {/* <Text>My Status</Text> */}
      <View style={styles.taskContainer}>
        <Text style={styles.mystatus}>My Status</Text>
        <View style={styles.statusContainer}>
          <View style={styles.taskcon}>
            <Entypo name="emoji-happy" size={20} color={'#EBBD2F'} />
            <Text style={styles.awayText}>Away</Text>
          </View>
          <View style={styles.atwork}>
            <Entypo name="keyboard" size={20} color={'#D1D1D1'} />
            <Text style={styles.awayText}>At Work</Text>
          </View>
          <View style={styles.gaming}>
            <Entypo name="emoji-happy" size={20} color={'#C1C0BF'} />
            <Text style={styles.awayText}>Gaming</Text>
          </View>
        </View>
        <Text style={{...styles.mystatus, marginTop: 20}}>Dashboard</Text>
      </View>

      <View style={styles.dashboard}>
        <View style={styles.paymentsContainer}>
          <Entypo name="radio" size={25} color={'white'} />
        </View>
        <View style={{width: '50%'}}>
          <Text style={styles.payamentText}>
            Payments
          </Text>
        </View>
        <View
          style={styles.newContainer}>
          <Text style={styles.newText}>2 New</Text>
          <Entypo name="chevron-small-right" size={20} color={'#fff'} />
        </View>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mystatus: {color: '#BABEC7', marginTop: 10},
  TitleBar: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderTextContainer: {
    height: 60,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {fontSize: 18, fontWeight: '800', color: '#3A3A3A'},
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainActivityCon: {
    height: '17%',
    width: '90%',
    //   backgroundColor:"red",
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    padding: 10,
    backgroundColor: '#F4F5F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 90, height: 90, borderRadius: 45},
  infoContainer: {height: 90, width: '50%', marginLeft: 20},
  nameText: {fontSize: 17, fontWeight: 'bold'},
  jobText: {fontSize: 15, color: '#CCCED6', marginTop: 5},
  taskContainer: {
    width: '90%',
    height: '20%',
    alignSelf: 'center',
    marginTop: 20,
  },
  taskcon: {
    height: 55,
    width: 100,
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: '#23262F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  awayText: {fontSize: 17, fontWeight: '700', color: '#fff'},
  atwork: {
    height: 55,
    width: 100,
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: '#CCEBD9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  gaming: {
    height: 55,
    width: 100,
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: '#FDE1BF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dashboard: {
    width: '90%',
    height: '15%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentsContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#59BD7D',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payamentText:{fontSize: 18, fontWeight: 'bold', marginLeft: 20},
  newContainer:{
    height: 30,
    width: 80,
    borderRadius: 20,
    backgroundColor: '#3771FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  newText:{fontSize: 15, color: '#fff'}
});

export default ProfileScreen;
