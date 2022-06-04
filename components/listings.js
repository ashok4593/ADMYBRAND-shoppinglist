import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {HeaderTwo} from './textCompnents';

const Listings = ({list}) => {
  console.log(list);
  return (
    <FlatList
      data={list}
      renderItem={listItem => (
        <HeaderTwo textStyle={styles.itemText}>{listItem.item}</HeaderTwo>
      )}
      keyExtractor={item => item.index}
    />
  );
};

export default Listings;

const styles = StyleSheet.create({
  itemText: {
    color: '#f17f0d',
    padding: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#F4F5F7',
  },
});
