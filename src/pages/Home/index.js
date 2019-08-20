import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import GeneralStatusBarColor from '~/components/GeneralStatusBarColor';

import Banners from '~/modules/Banners';
import Categories from '~/modules/Categories';
import MaisVendidos from '~/modules/MaisVendidos';
import { Container, Header } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import globals from '~/config/GlobalStyles';
import logo_navbar from '~/assets/Images/drawable-xxxhdpi/logo_menu.png';

console.disableYellowBox = true;

export default function Home({ navigation }) {
  return (
    <Container>
      <GeneralStatusBarColor
        barStyle="light-content"
        backgroundColor="#5e2a84"
      />
      <Header>
        <TouchableOpacity style={styles.menu} onPress={navigation.openDrawer}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={logo_navbar} style={styles.logoNav} />
        <Text style={globals.logoMenu}>a Lodjinha</Text>
      </Header>
      <ScrollView style={styles.scroll}>
        <Banners />
        <Categories navigation={navigation} />
        <MaisVendidos navigation={navigation} />
      </ScrollView>
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Home'
};

const styles = StyleSheet.create({
  container: {},
  scroll: {},
  menu: {
    height: 24,
    width: 24,
    marginLeft: 15
  },
  logoNav: {
    height: 24,
    width: 24,
    marginHorizontal: 10,
    paddingBottom: 10
  }
});
