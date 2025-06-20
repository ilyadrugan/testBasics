import React from 'react';
import { Provider } from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import stores from './src/store/store';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import gs from './src/styles/global';
import { MainNavigation } from './src/screens/main-navigation';

const App = () => {
  return (<>
      <Provider {...stores}>
       
        <GestureHandlerRootView style={gs.flex1}>
          <NavigationContainer>
                <MainNavigation />
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </>
  );
};

export default App;
