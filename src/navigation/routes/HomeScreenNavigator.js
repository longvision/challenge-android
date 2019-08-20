import { createStackNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import FilteredProducts from '~/pages/FilteredProducts';
import Details from '~/pages/Details';
import About from '~/pages/About';
import AboutScreenNavigator from '~/navigation/routes/AboutScreenNavigator';

const HomeScreenNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    FilteredProducts: {
      screen: FilteredProducts
    },
    Details: {
      screen: Details
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' },
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default HomeScreenNavigator;
