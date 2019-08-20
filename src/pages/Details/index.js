import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HTML from 'react-native-render-html';

import { FAB } from 'react-native-paper';

import GeneralStatusBarColor from '~/components/GeneralStatusBarColor';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';

import { Container } from './styles';
import api from '~/services/api';
import GlobalStyles from '~/config/GlobalStyles';

function Details({ navigation }) {
  const productId = useSelector(state => state.product.selectedProduct.id);

  const [detail, setDetail] = useState([]);
  const [reserve, setReserve] = useState(false);
  const [response, setResponse] = useState();

  async function loadDetails() {
    const response = await api.get(`/produto/${productId}`);
    setDetail(response.data);
  }

  useEffect(() => {
    if (reserve === true) {
      api
        .post(`/produto/${productId}`)
        .then(async res => {
          setResponse(res.data);
          showMessage({
            message: 'Reservado com sucesso',
            description: 'Continuar comprando?',
            type: 'default',
            autoHide: false,
            backgroundColor: '#5e2a84', // background color
            color: '#fcfcfc', // text color,
            onPress: () => navigation.goBack()
          });
        })
        .catch(err => {
          setResponse('Erro de Reserva');
          showMessage({
            message: 'Ops, algo deu errado...',
            description: 'Tente novamente',
            type: 'warning',
            autoHide: false,
            backgroundColor: '#f15025', // background color
            color: '#fcfcfc', // text color,
            onPress: () => navigation.goBack()
          });
        });
    }
  }, [reserve]);

  //Hook semelhante ao 'componentDidMount', para carregar os detalhes
  useEffect(() => {
    loadDetails();
  }, []);

  const htmlContent = `${detail.descricao}`;

  return (
    <Container>
      <GeneralStatusBarColor
        barStyle="light-content"
        backgroundColor="#fcfcfc"
      />
      <TouchableOpacity style={styles.btn} onPress={navigation.goBack}>
        <Icon name="arrow-back" size={24} color="#4a4a4a" />
      </TouchableOpacity>

      <View style={styles.container}>
        <ScrollView style={{ flex: 1, padding: 10 }}>
          <View style={styles.imageCtr}>
            <Image
              source={{ uri: `${detail.urlImagem}` }}
              style={styles.image}
            />
          </View>

          <Text style={styles.name}>{detail.nome}</Text>
          <View style={styles.title}>
            <Text style={GlobalStyles.precoDe}>De: {detail.precoDe}</Text>
            <Text style={GlobalStyles.precoPor}>Por: {detail.precoPor}</Text>
          </View>
          <View>
            <Text style={[GlobalStyles.descricaoProdutoBold, { margin: 10 }]}>
              {htmlContent
                .split(' ')
                .slice(0, 2)
                .join(' ')}
            </Text>
            <HTML
              containerStyle={{ marginLeft: 10, marginBottom: 75 }}
              baseFontStyle={GlobalStyles.descricaoProduto}
              html={htmlContent}
              imagesMaxWidth={Dimensions.get('window').width}
            />
          </View>
        </ScrollView>
      </View>

      <FAB
        style={styles.fab}
        icon={reserve ? 'check' : 'add'}
        onPress={() => {
          setReserve(true);
        }}
      />
      <FlashMessage position="center" duration={3500} />
    </Container>
  );
}

export default Details;

Details.navigationOptions = {
  title: 'Details',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
};

//Estilização do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  btn: {
    padding: 15
  },
  image: {
    height: 200,
    width: 200
  },
  imageCtr: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
  name: {
    marginLeft: 15,
    fontSize: 17,
    marginBottom: 10
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
    width: '100%',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  precoDe: {
    color: '#c4c4c4',
    fontSize: 15
  },
  precoPor: {
    color: 'red',
    fontSize: 22,
    marginRight: 20
  },
  descricao: {
    fontSize: 17,
    padding: 15
  }
});
