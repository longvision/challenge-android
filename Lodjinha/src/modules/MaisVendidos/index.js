import React, { useEffect, useState, useCallback } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

import Product from '~/components/Product';
import api from '~/services/api';
import GlobalStyles from '~/config/GlobalStyles';
function MaisVendidos({ navigation }) {
  const [maisvendidos, setMaisVendidos] = useState();

  console.log(maisvendidos);

  useEffect(() => {
    async function loadMaisVendidos() {
      const response = await api.get('/produto/maisvendidos/');
      const data = response.data.data.map(b => ({
        ...b
      }));
      setMaisVendidos(data);
    }
    loadMaisVendidos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[GlobalStyles.descricaoProdutoBold, { padding: 8 }]}>
          Mais vendidos
        </Text>
      </View>
      <FlatList
        style={styles.list}
        data={maisvendidos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

export default MaisVendidos;

//Estilização do componente
const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginBottom: 25
  },
  list: {
    // marginTop: 0,
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
