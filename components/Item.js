import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import {primaryColor, secondaryColor} from '../styles/Color';

const Item = () => {
  return (
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.itemProfilePic} />
        <View style={styles.itemText}>
          <Text style={styles.itemTitle}>오늘만나</Text>
          <Text style={styles.itemPeople}>강다혜, 주현민</Text>
        </View>
      </View>
      <View>
        <View style={styles.itemDDay}>
          <Text style={styles.DDayText}>D-9</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  itemProfilePic: {
    width: 55,
    height: 55,
    backgroundColor: secondaryColor,
    borderRadius: 8,
    marginRight: 10,
  },
  itemText: {justifyContent: 'space-between'},
  itemTitle: {fontSize: 20},
  itemPeople: {fontSize: 16},
  itemDDay: {
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor: secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DDayText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Item;
