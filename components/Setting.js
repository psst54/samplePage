import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {primaryColor, secondaryColor} from '../styles/Color';

const Setting = () => {
  return (
    <View style={styles.settingBox}>
      <Text style={styles.settingText}>이메일 변경</Text>
      <Text style={styles.settingText}>비밀번호 변경</Text>
      <Text style={styles.settingText}>백신 접종 업데이트</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingBox: {
    marginHorizontal: 15,
    marginBottom: 40,
    padding: 15,

    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: primaryColor,
  },
  settingText: {
    fontSize: 20,
    margin: 10,
  },
});

export default Setting;
