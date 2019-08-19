import { createSwitchNavigator } from 'react-navigation';

import HomeScreenNavigator from '~/navigation/routes/HomeScreenNavigator';
import About from '~/pages/About';
import Home from '~/pages/Home';
import FilteredProducts from '~/pages/FilteredProducts';
import Details from '~/pages/Details';
// import AboutScreenNavigator from '~/navigation/routes/AboutScreenNavigator';

const AboutScreenNavigator = createSwitchNavigator(
  {
    About: {
      screen: About
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' },
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default AboutScreenNavigator;
