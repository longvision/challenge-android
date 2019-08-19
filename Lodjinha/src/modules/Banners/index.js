import React, { useEffect, useState, useCallback } from 'react';

import logo from '~/assets/Images/drawable-xxxhdpi/logo_navbar.png';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-banner-carousel';

import Banner from '~/components/Banner';
import api from '~/services/api';

function Banners() {
  //Estado local: gyms
  const [banner, setBanner] = useState();

  //Estilo dos banners
  const BannerWidth = Dimensions.get('window').width;
  const BannerHeight = 260;
  //Chama a api para carregar as lista de gyms

  //Hook semelhante ao 'componentDidMount', para carregar as gyms
  useEffect(() => {
    async function loadBanner() {
      const response = await api.get('/banner/');
      const data = response.data.data.map(b => ({
        ...b
      }));
      setBanner(data);
    }
    loadBanner();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}
          showsPageIndicator={true}
        >
          {banner &&
            banner.map(item => (
              <View key={String(item.id)}>
                <Banner data={item} />
              </View>
            ))}
        </Carousel>
      </View>
    </View>
  );
}

export default Banners;
//Estilização do componente
const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === 'ios' ? 34 : 0
  },
  list: {
    marginTop: 15
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
    marginTop: 30
  }
});
