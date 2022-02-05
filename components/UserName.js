import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {primaryColor, secondaryColor} from '../styles/Color';

const UserName = () => {
  return (
    <View style={styles.user}>
      <View style={styles.profileWrapper}>
        <View style={styles.profilePic} />
        <View style={styles.textWrapper}>
          <Text style={styles.name}>김유이 (2차)</Text>
          <Text style={styles.email}>이메일</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    marginTop: 30,
    marginBottom: 40,
  },
  profileWrapper: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  profilePic: {
    marginRight: 20,
    backgroundColor: primaryColor,
    borderRadius: 15,
    width: 75,
    height: 75,
  },
  textWrapper: {
    justifyContent: 'center',
  },
  name: {fontSize: 24},
  email: {fontSize: 18},
});

export default UserName;
