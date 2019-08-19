import React from 'react';

import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';

import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Dimensions
} from 'react-native';

import HomeScreenNavigator from '~/navigation/routes/HomeScreenNavigator';
import Home from '~/pages/Home';
import About from '~/pages/About';
import AboutScreenNavigator from '~/navigation/routes/AboutScreenNavigator';

import { ScrollView } from 'react-native-gesture-handler';
import GlobalStyles from '~/config/GlobalStyles';
import bg from '~/assets/Images/drawable-xxxhdpi/menu_pattern.png';
import logo_navbar from '~/assets/Images/drawable-xxxhdpi/logo_navbar.png';
import metrics from '~/config/metrics';
import tag_menu from '~/assets/Images/drawable-xxxhdpi/tag_menu.png';
import home_menu from '~/assets/Images/drawable-xxxhdpi/home_menu.png';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#5e2a84' }}>
    <View style={{ height: 200, flexDirection: 'column' }}>
      <Image
        style={{ height: 200, width: '100%', position: 'absolute' }}
        source={bg}
      />
      <View
        style={{
          borderRadius: 60,
          backgroundColor: '#f15025',
          height: 64,
          width: 64,
          marginLeft: 15,
          marginTop: 45,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          source={logo_navbar}
          style={{
            height: 44,
            width: 44,
            backgroundColor: '#f15025'
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{ alignItems: 'flex-end', marginTop: 45, marginRight: 10 }}>
        <Text style={GlobalStyles.logoMenu}>a Lodjinha</Text>
      </View>
    </View>
    <View style={{ height: '100%', backgroundColor: '#fcfcfc' }}>
      <DrawerItems {...props} />
    </View>
  </SafeAreaView>
);

// TODO: VERIFICAR ROTAS DA DRAWER E FINALIZAR
//3 Tabs principais da aplicação:
const MainDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreenNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: () => (
          <Image source={tag_menu} style={{ height: 24, width: 24 }} />
        )
      }
    },
    About: {
      screen: AboutScreenNavigator,
      navigationOptions: {
        drawerLabel: 'Sobre o Aplicativo',
        drawerIcon: () => (
          <Image source={home_menu} style={{ height: 24, width: 24 }} />
        )
      }
    }
  },
  {
    drawerWidth: metrics.screenWidth * 0.83,
    cardStyle: { backgroundColor: '#fcfcfc' },
    useNativeAnimations: true,
    drawerType: 'front',
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: '#5e2a84',
      labelStyle: GlobalStyles.menuItem
    }
  }
);

export default createAppContainer(MainDrawerNavigator);
