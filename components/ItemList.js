import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import Item from '../components/Item';

import {primaryColor, secondaryColor} from '../styles/Color';

const ItemList = () => {
  return (
    <View style={styles.itemWrapper}>
      <Text style={styles.itemSectionTitle}>나의 밥팟</Text>
      <ScrollView>
        <Item />
        <Item />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    marginHorizontal: 15,
    // backgroundColor: 'orange',
  },
  itemSectionTitle: {
    marginLeft: 40,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default ItemList;
