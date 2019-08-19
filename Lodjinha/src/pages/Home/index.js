import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView
} from 'react-native';

import {
  TouchableHighlight,
  TouchableOpacity
} from 'react-native-gesture-handler';
// import HomeHeader from '~/components/HomeHeader';
import GeneralStatusBarColor from '~/components/GeneralStatusBarColor';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Banners from '~/modules/Banners';
import Categories from '~/modules/Categories';
import MaisVendidos from '~/modules/MaisVendidos';
import { Container, Header } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import metrics from '~/config/metrics';

import globals from '~/config/GlobalStyles';
import logo_navbar from '~/assets/Images/drawable-xxxhdpi/logo_menu.png';
import tag_menu from '~/assets/Images/drawable-xxxhdpi/tag_menu.png';
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
  // drawerLabel: 'Home',
  // headerStyle: {
  //   backgroundColor: '#48285b',
  //   marginTop: 0
  // },
  // drawerIcon: () => (
  //   <Image
  //     source={tag_menu}
  //     style={{ height: 24, width: 24, color: '#5e2a84' }}
  //   />
  // ),
  // headerTintColor: '#fff'
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#5e2a84',
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // // padding: 10,
    // // height: 65,
    // marginTop: metrics.navBarHeight
  },
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
