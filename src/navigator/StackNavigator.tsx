import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Home } from '../screens/HomeScreen/Home';
import { PRIMARY_COLOR } from '../common/constantsColor';
import { ImageBackground } from 'react-native';
import { useState } from 'react';

export interface User {
	nombre: string;
	apellido: string;
	cedula: string;
	email: string;
	password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
	const users: User[] = [
		{
			nombre: 'Augusto',
			apellido: 'Viteri',
			cedula: '0202496477',
			email: 'augustoviteri98@gmail.com',
			password: '123',
		},
		{
			nombre: 'Janella',
			apellido: 'Flores',
			cedula: '0200873479',
			email: 'janellaflores@gmail.com',
			password: '12345678',
		},
		{
			nombre: 'a',
			apellido: 'a',
			cedula: 'a',
			email: 'a',
			password: 'a',
		},
	];

	// hook useStaet: manipular el arreglo con la lista de usuarios
	const [listUsers, setListUsers] = useState(users);

	//funcion para agregar nuevo usuarios
	const handleAddUser = (user: User) => {
		setListUsers([...listUsers, user]);
	};

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: PRIMARY_COLOR },
			}}
		>
			<Stack.Screen name='Welcome' component={Welcome} />
			<Stack.Screen name='Login' children={() => <Login users={listUsers} />} />
			<Stack.Screen
				name='Register'
				children={() => (
					<Register users={listUsers} handleAddUser={handleAddUser} />
				)}
			/>
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	);
};
