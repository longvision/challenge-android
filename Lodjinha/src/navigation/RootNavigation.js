import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import MainDrawerNavigator from './MainDrawerNavigator';

//Navegador principal simplificado pois autenticação não está habilitada.
//Seria importante caso usuário precisasse fazer login para ver certas telas.
export default function RootNavigation() {
  return <MainDrawerNavigator />;
}
