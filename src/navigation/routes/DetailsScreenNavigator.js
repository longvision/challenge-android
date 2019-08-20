import { createSwitchNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import FilteredProducts from '~/pages/FilteredProducts';
import Details from '~/pages/Details';

const DetailsScreenNavigator = createSwitchNavigator(
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

export default DetailsScreenNavigator;
