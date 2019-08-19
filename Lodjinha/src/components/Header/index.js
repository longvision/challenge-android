import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import {
  TouchableHighlight,
  TouchableOpacity
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GlobalStyles from '~/config/GlobalStyles';

function Header({ navigation, item }) {
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
