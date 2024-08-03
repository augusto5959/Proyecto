import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}