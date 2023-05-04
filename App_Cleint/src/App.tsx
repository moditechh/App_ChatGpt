import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Routes/routes';

import RecorderContext from './Context/RecorderContext';

const App = () => {
  return (
    <RecorderContext>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </RecorderContext>
  );
};

export default App;
