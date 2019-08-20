import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { FAB } from 'react-native-paper';
import { View, FlatList, StyleSheet } from 'react-native';
import GeneralStatusBarColor from '~/components/GeneralStatusBarColor';
import Product from '~/components/Product';
import Header from '~/components/Header';
import { Container } from './styles';
import api from '~/services/api';

function FilteredProducts({ navigation }) {
  const category = useSelector(state => state.category.selectedCategory);

  //Estado local: gyms
  const [filtered, setFiltered] = useState([]);
  const [changePage, setChangePage] = useState(false);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  // TODO: resolver a listagem
  //Chama a api para carregar as lista de gyms

  // Carregar todos os items por categoria
  // 2.
  async function load() {
    const response = await api.get(`/produto?limit=${limit}&offset=${offset}`);

    const more = response.data.data
      .map(b => ({
        ...b
      }))
      .filter(f => f.categoria.descricao == category);
    if (more.constructor === Array) {
      setFiltered(more);
    }
  }

  const loadMore = useCallback(() => {
    setChangePage(true);
    if (offset >= 0 && limit < 80) {
      setLimit(limit + 20);
      setOffset(offset + 20);
    }
  }, []);

  const loadLess = useCallback(() => {
    setChangePage(true);
    if (offset > 0 && limit <= 100) {
      setLimit(limit - 20);
      setOffset(offset - 20);
    }
  }, [limit]);
  // TODO: verificar porque a showless nao funciona
  //Hook que renderiza ao mudar de página
  useEffect(() => {
    if (changePage) {
      load();
      setShowButtons(true);
      setChangePage(false);
    }

    console.log(limit);
    console.log(offset);
  }, [changePage, filtered]);

  //Hook que renderiza ao entrar na página fazendo loading da primeira página
  useEffect(() => {
    if (
      filtered &&
      filtered.constructor === Array &&
      filtered.length === 0 &&
      limit < 100
    ) {
      setLimit(limit + 20);
      setOffset(offset + 20);
      load();
      console.log(limit);
      setShowButtons(false);
    } else {
    }
    return () => {
      console.log(filtered);
    };
  }, [filtered]);

  useEffect(() => {
    setShowButtons(true);
  }, []);
  return (
    <Container>
      <GeneralStatusBarColor
        barStyle="light-content"
        backgroundColor="#5e2a84"
      />
      <Header navigation={navigation} item={category} />
      <FlatList
        style={styles.list}
        data={filtered}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} navigation={navigation} />
        )}
      />
      {showButtons ? (
        <View>
          <FAB
            style={{
              backgroundColor: '#5e2a84',
              color: '#fcfcfc',
              position: 'absolute',
              margin: 16,
              marginRight: 75,
              right: 0,
              bottom: 0
            }}
            small
            icon="remove"
            onPress={loadLess}
          />
          <FAB
            style={{
              backgroundColor: '#5e2a84',
              color: '#fcfcfc',
              position: 'absolute',
              margin: 16,
              right: 0,
              bottom: 0
            }}
            small
            icon="add"
            onPress={loadMore}
          />
        </View>
      ) : null}
    </Container>
  );
}

export default FilteredProducts;

FilteredProducts.navigationOptions = {
  title: 'FilteredPoducts',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
};

//Estilização do componente
const styles = StyleSheet.create({
  list: {
    marginTop: 2,
    marginBottom: 75
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
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  }
});
