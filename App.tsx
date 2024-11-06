import 'react-native-gesture-handler';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AppBottomNavigation from './client/components/bottomNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AppBottomNavigation />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
