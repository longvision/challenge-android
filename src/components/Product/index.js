import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as ProductActions from '~/store/actions/product';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalStyles from '~/config/GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
//Inicio do componente
export default function Product({ data, navigation }) {
  //Estado proveniente da Store
  const dispatch = useDispatch();

  handleNavigate = () => {
    dispatch(ProductActions.toggleProduct(data));
    console.log(data);
    navigation.navigate('Details', { navigation });
  };

  return (
    <TouchableOpacity onPress={this.handleNavigate}>
      <View key={String(data.id)} style={styles.item}>
        <View style={styles.imgCtr}>
          <Image source={{ uri: data.urlImagem }} style={styles.img} />
        </View>

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={GlobalStyles.descricaoProduto}>{`${
            data.nome
          }: ${data.descricao.substring(0, 25)}...`}</Text>
          <View style={styles.detalhes}>
            <Text style={GlobalStyles.precoDe}>De: {data.precoDe}</Text>
            <Text style={[GlobalStyles.precoPor, { marginRight: 30 }]}>
              Por: {data.precoPor}
            </Text>
          </View>
        </View>
        <View style={styles.arrow}>
          <Icon name="navigate-next" size={35} color="#5e2a84" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
//Estilização do componente
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    paddingVertical: 25,
    marginBottom: 10
  },
  imgCtr: {
    width: 125,
    height: 100,
    paddingVertical: 25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    width: 'auto',
    // height: 103,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#aaaaaa',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  nome: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },
  arrow: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  detalhes: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
