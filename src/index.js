import React from 'react';
import '~/config/ReactotronConfig';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from '~/store';

import RootNavigation from '~/navigation/RootNavigation';

//Tema central da estilização do React-Native Paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.color,
    primary: '#fcfcfc',
    accent: '#5e2a84'
  }
};

//Ponto de entrada da aplicação
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <RootNavigation />
      </PaperProvider>
    </Provider>
  );
}
