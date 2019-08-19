import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import * as CategoriesActions from '~/store/actions/category';
import GlobalStyles from '~/config/GlobalStyles';
//Inicio do componente
export default function Category({ data, navigation }) {
  const dispatch = useDispatch();

  //Navegação e disparo de ação para selecionar a atividade desejada e enviar ao reducer.
  handleToggle = () => {
    dispatch(CategoriesActions.toggleCategory(data.descricao));
    navigation.navigate('FilteredProducts', {
      navigation
    });
  };

  return (
    <TouchableOpacity
      onPress={this.handleToggle}
      key={String(data.id)}
      style={styles.item}
    >
      <Image source={{ uri: data.urlImagem }} style={styles.img} />
      <Text
        style={[GlobalStyles.nomeCategoria, { marginTop: 5, marginBottom: 30 }]}
      >
        {data.descricao}
      </Text>
    </TouchableOpacity>
  );
}
//Estilização do componente
const styles = StyleSheet.create({
  img: {
    width: 95,
    height: 95,
    marginTop: 4
  },
  item: {
    width: 110,
    height: 110,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28
  },
  description: {
    marginTop: 5,
    marginBottom: 30
  }
});
