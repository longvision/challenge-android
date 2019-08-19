import React, { Component } from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import GeneralStatusBarColor from '~/components/GeneralStatusBarColor';
import { Container, Header } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import home from '~/assets/Images/drawable-xxxhdpi/home_menu.png';
import GlobalStyles from '~/config/GlobalStyles';
import logo_sobre from '~/assets/Images/drawable-xxxhdpi/logo_sobre.png';
console.disableYellowBox = true;

export default function About({ navigation }) {
  return (
    <Container>
      <GeneralStatusBarColor
        barStyle="light-content"
        backgroundColor="#5e2a84"
      />
      <Header style={styles.header}>
        <TouchableOpacity style={styles.menu} onPress={navigation.openDrawer}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text
          style={[
            GlobalStyles.descricaoProdutoBold,
            { marginLeft: 15, color: '#fff' }
          ]}
        >
          sobre
        </Text>
      </Header>
      <View style={styles.container}>
        <Image source={logo_sobre} style={styles.logoNav} />
        <View>
          <Text style={GlobalStyles.logoSobre}>a Lodjinha</Text>
        </View>
        <View
          style={{
            marginTop: 125,
            alignItems: 'center'
          }}
        >
          <Text style={[GlobalStyles.nomeDesenvolvedor, { marginBottom: 5 }]}>
            Ricardo Naoki Horiguchi
          </Text>
          <Text style={GlobalStyles.dataDesenvolvimento}>
            19 de Agosto de 2019
          </Text>
        </View>
      </View>
    </Container>
  );
}

About.navigationOptions = {
  title: 'About',
  drawerLabel: 'Sobre o Aplicativo',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },

  drawerIcon: () => (
    <Image source={home} style={{ height: 24, width: 24, color: '#5e2a84' }} />
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 65,
    backgroundColor: '#5e2a84',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  menu: {
    height: 24,
    width: 24,
    marginLeft: 15
  },
  logoNav: {
    height: 175,
    width: 175,
    marginTop: 100,
    marginBottom: 10
  }
});
