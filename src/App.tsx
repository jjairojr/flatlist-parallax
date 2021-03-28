import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Parallax from './pages/Parallax';

const App = () => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#201E1F', '#3F3B3D']}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <Parallax />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;
