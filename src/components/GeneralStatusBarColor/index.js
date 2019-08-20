import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default GeneralStatusBarColor;

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight
  }
});
