import { createSwitchNavigator } from 'react-navigation';

import About from '~/pages/About';

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
