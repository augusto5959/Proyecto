import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import { Login } from '../screens/Login';
import { Register} from '../screens/Register';
import { Home } from '../screens/Home';
import { PRIMARY_COLOR } from '../common/constantsColor';
import { ImageBackground } from 'react-native';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:PRIMARY_COLOR}}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}