import React, { useEffect, useState, useCallback } from 'react';

import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import GlobalStyles from '~/config/GlobalStyles';
import Category from '~/components/Category';
import api from '~/services/api';

function Categories({ navigation }) {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categoria/');
      const data = await response.data.data.map(b => ({
        ...b
      }));
      setCategories(data);
      setLoading(false);
    }
    loadCategories();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[GlobalStyles.descricaoProdutoBold, { padding: 8 }]}>
          Categorias
        </Text>
      </View>
      {loading ? (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#c4c4c4" />
        </View>
      ) : (
        <FlatList
          data={categories}
          horizontal={true}
          initialNumToRender={10}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Category data={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
}

export default Categories;

//Estilização do componente
const styles = StyleSheet.create({
  container: {
    height: 180
  },
  activity: {
    flex: 1,
    justifyContent: 'center'
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
    width: '100%'
  },
  text: {
    fontSize: 17,
    paddingLeft: 7,
    paddingTop: 10,
    paddingBottom: 10
  }
});
