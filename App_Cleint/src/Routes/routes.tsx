import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import RecordPlayer from '../Pages/Record';

import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function MyStack() {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: () => (
            <View>
              <Icon />
            </View>
          ),
        }}
        name="RecordPlayer"
        component={RecordPlayer}
      />
    </Navigator>
  );
}

export default MyStack;
