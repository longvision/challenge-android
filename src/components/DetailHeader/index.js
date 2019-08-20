import React, { useEffect, useState, useCallback } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

function DetailHeader({ navigation }) {
  handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.title} onPress={this.handleBack}>
        <Icon name="arrow-back" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default DetailHeader;

//Estilização do componente
const styles = StyleSheet.create({
  container: {
    height: 'auto',
    paddingTop: 50,
    backgroundColor: '#5e2a84'
  },
  list: {
    marginTop: 2
  },
  ban: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
    borderTopWidth: 1,
    borderTopColor: '#c4c4c4',
    width: '100%'
  },
  text: {
    fontSize: 17,
    paddingLeft: 7,
    paddingTop: 10,
    paddingBottom: 10
  }
});
