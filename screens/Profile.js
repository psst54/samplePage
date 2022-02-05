import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import UserName from '../components/UserName';
import Setting from '../components/Setting';
import ItemList from '../components/ItemList';

const Profile = () => {
  return (
    <View>
      <UserName />

      <Setting />

      <ItemList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
