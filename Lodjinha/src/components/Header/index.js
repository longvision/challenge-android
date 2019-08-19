import React, { useEffect, useState, useCallback } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions
  // TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';
import {
  TouchableHighlight,
  TouchableOpacity
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GlobalStyles from '~/config/GlobalStyles';
// import category from 'src/store/reducers/category';

function Header({ navigation, item }) {
  // const item = useSelector(state => state.category.selectedCategory);

  // useEffect(() => {}, [item]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navigation.goBack}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text
        style={[
          GlobalStyles.descricaoProdutoBold,
          { marginLeft: 15, color: '#fff' }
        ]}
      >{`${item}`}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    // paddingTop: 50,
    backgroundColor: '#5e2a84',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btn: {
    height: 24,
    width: 24,
    marginLeft: 15
  },
  menu: {
    paddingLeft: 15
  }
});
