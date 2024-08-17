import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../common/constantsColor';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../../theme/AppTheme';
import { InputComponent } from '../components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface Props {
	users: User[];
	handleAddUser: (user: User) => void;
}

interface FormRegister {
	nombre: string;
	apellido: string;
	cedula: string;
	email: string;
	password: string;
}

export const Register = ({ users, handleAddUser }: Props) => {
	const [formRegister, setFormRegister] = useState<FormRegister>({
		nombre: '',
		apellido: '',
		cedula: '',
		email: '',
		password: '',
	});

	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

	const navigation = useNavigation();

	const handleSetValues = (name: string, value: string) => {
		setFormRegister({ ...formRegister, [name]: value });
	};

	const handleSignUp = () => {
		//Validar que los campos se encuentren llenos
		if (!formRegister.email || !formRegister.password) {
			Alert.alert('ERROR', 'Por favor, completar todos los campos!');
			return;
		}

		//Validar que no se registre un correo ya existente
		if (verifyUser() != null) {
			Alert.alert('Error', 'El correo ya se encuentra registrado!');
			return;
		}

		//generar la informacion del nuevo usuario
		const newUser: User = {
			nombre: formRegister.nombre,
			apellido: formRegister.apellido,
			cedula: formRegister.cedula,
			email: formRegister.email,
			password: formRegister.password,
		};
		//guardar nuevo usuario
		handleAddUser(newUser);
		Alert.alert('FELICITACIONES', 'Te has registrado con éxito');
    navigation.dispatch(CommonActions.navigate({name:'Login'}))
	};

	//función para verificar que el usuario está en la lista de usuarios
	const verifyUser = () => {
		const existUser = users.filter(
			(user) => user.email === formRegister.email,
		)[0];
		return existUser;
	};

	return (
		<View>
			<StatusBar backgroundColor={PRIMARY_COLOR} />
			<TitleComponent title='Regístrate' />
			<BodyComponent>
				<View>
					<Text style={styles.title}>Estás muy cerca!</Text>
					<Text style={styles.subtitle}>Realiza tus compras de forma segura</Text>
				</View>
				<View style={styles.contentInput}>
					<InputComponent
						placeholder='Nombre'
						handleSetValues={handleSetValues}
						name='nombre'
					/>
					<InputComponent
						placeholder='Apellido'
						handleSetValues={handleSetValues}
						name='apellido'
					/>
					<InputComponent
						placeholder='Cédula'
						handleSetValues={handleSetValues}
						name='cedula'
					/>
					<InputComponent
						placeholder='Correo'
						handleSetValues={handleSetValues}
						name='email'
					/>
					<View>
						<InputComponent
							placeholder='Contraseña'
							handleSetValues={handleSetValues}
							name='password'
							isPassword={hiddenPassword}
						/>
						<Icon
							style={styles.iconPassword}
							name='visibility'
							size={25}
							color={PRIMARY_COLOR}
							onPress={() => setHiddenPassword(!hiddenPassword)}
						/>
					</View>
					<ButtonComponent textButton='Iniciar' actionButton={handleSignUp} />
					<TouchableOpacity
						onPress={() =>
							navigation.dispatch(CommonActions.navigate({ name: 'Login' }))
						}
					>
						<Text style={styles.textRedirect}>
							Ya tienes una cuenta? Iniciar sesión ahora
						</Text>
					</TouchableOpacity>
				</View>
			</BodyComponent>
		</View>
	);
};
