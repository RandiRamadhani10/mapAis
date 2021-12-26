import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('map');
  }, 3000);

  return (
    <View style={styles.background}>
      <Image source={require('../asset/logo-lapan.png')} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 280,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgRounded: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 200,
  },
  teksDua: {
    fontSize: 15,
    fontWeight: '200',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    color: 'white',
  },
});
