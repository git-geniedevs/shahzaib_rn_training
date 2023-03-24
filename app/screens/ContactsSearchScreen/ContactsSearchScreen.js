import React from 'react';
import {View, Text, StyleSheet, TextInput, Image,FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const profile=[
  {
    img:require('../../assets/as.jpg'),
    userName:'Jeo Belfiore',
    lastmsg:'In a world far away'
  },
  {
    img:require('../../assets/kk.jpg'),
    
    userName:'Bill Gates',
    lastmsg:'What I am doing here?'
  },
  {
    img:require('../../assets/ss.jpg'),
    
    userName:'Mark Zuckerburg',
    lastmsg:'Really busy,WhatsApp only'
  },
  {
    img:require('../../assets/kk.jpg'),
    
    userName:'Marissa Mayer',
    lastmsg:'In rush to catch a plane'
  },
  {
    img:require('../../assets/kk.jpg'),
    
    userName:'Bill Gates',
    lastmsg:'What I am doing here?'
  },{
    img:require('../../assets/ss.jpg'),
    
    userName:'Mark Zuckerburg',
    lastmsg:'Really busy,WhatsApp only'
  },
]

const ProfileView=({item})=>{
  return(
    <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.img} style={styles.image} />
          <View style={styles.online}></View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameTxt}>{item.userName}</Text>
          <Text style={styles.subtitle}>{item.lastmsg}</Text>
        </View>
      </View>
  )
}
const renderItem=({item})=>{
  return(
    <ProfileView
    item={item}
      // img={item.image}
      // userName={item.userName}
      // lastmsg={item.lastmsg}
    />
  )
}
const ContactsSearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome
          name="list-ul"
          size={25}
          color={'#C5C5C5'}
          style={{marginLeft: 10}}
        />
        <TextInput
          placeholder="Contacts"
          placeholderTextColor={'#696969'}
          style={styles.textInput}
        />
        <FontAwesome
          name="search"
          size={25}
          color={'#C5C5C5'}
          style={{marginLeft: 10}}
        />
      </View>
      <FlatList
        data={profile}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    height: 120,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  imageContainer: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#E7E9E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 80, width: 80, borderRadius: 40},
  online: {
    height: 15,
    width: 15,
    backgroundColor: '#40BB21',
    borderRadius: 8,
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  textContainer: {width: '60%', height: 70, marginLeft: 20},
  nameTxt: {fontSize: 19, fontWeight: 'bold', marginTop: 10, color: '#383838'},
  subtitle: {fontSize: 16, color: '#868686', marginTop: 5},
  textInput: {padding: 20, width: '80%', fontSize: 22},
  searchContainer: {
    height: 70,
    width: '100%',
    elevation: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});

export default ContactsSearchScreen;
