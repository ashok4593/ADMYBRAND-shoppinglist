import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchListings = ({onSearchQueryChange, onListingAddition}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInput = useRef();

  const handleValueChange = query => {
    setSearchQuery(query);
    onSearchQueryChange(query);
  };

  const handleListingAddition = () => {
    if(searchQuery){
    onListingAddition({id: new Date().getTime(), name: searchQuery});
    setSearchQuery('');
    searchInput.current.blur();
    // console.log(searchQuery);
    }
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <TextInput
          ref={searchInput}
          placeholder="Search"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleValueChange}
          // onFocus={onSearchFocused}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleListingAddition}>
        <Icon name="plus" size={24} color="#f17f0d" style={styles.icons} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchListings;

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'space-between',
  },
  searchBar: {
    width: Dimensions.get('window').width >= 400 ? '85%' : '80%',
    justifyContent: 'center',
    paddingHorizontal: Dimensions.get('window').width >= 400 ? 24 : '5%',
    marginVertical: 8,
    marginHorizontal: '2%',
    height: 56,
    borderRadius: 32,
    backgroundColor: '#F4F5F7',
  },
  addButton: {
    width: Dimensions.get('window').width >= 400 ? '12%' : '17%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
  },
});
