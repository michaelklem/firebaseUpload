/*
import React from 'react';
import { StatusBar } from 'react-native';
import UploadScreen from './src/screens/UploadScreen';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <UploadScreen />
    </>
  );
};
export default App;
*/


import React from 'react';
import { StatusBar } from 'react-native';
import SimpleImagePicker from './src/screens/SimpleImagePicker';

export default function () {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SimpleImagePicker />
    </>
  );
}

