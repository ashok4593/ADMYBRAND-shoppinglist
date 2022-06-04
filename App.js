/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import SearchItems from './components/searchListings';
import {HeaderOne} from './components/textCompnents';
import {searchListings} from './services/shoppingLists';
import Listings from './components/listings';
const App = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    setFilteredListings(listings);
  }, [listings]);

  // console.log(filteredListings);

  return (
    <SafeAreaView style={styles.container}>
      <SearchItems
        onSearchQueryChange={query =>
          setFilteredListings(searchListings(listings, query))
        }
        onListingAddition={newListing =>
          setListings(items => items.concat(newListing))
        }
      />

      {listings.length <= 0 ? (
        <View style={styles.centeredItems}>
          <HeaderOne>Your shopping list is empty!!</HeaderOne>
        </View>
      ) : (
        <Listings list={filteredListings} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
    // backgroundColor: '#d7e1e9',
    // backgroundColor: '#e3e4e5',
    // paddingHorizontal: Dimensions.get('window').width >= 375 ? '10%' : '15%',
  },
  centeredItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
