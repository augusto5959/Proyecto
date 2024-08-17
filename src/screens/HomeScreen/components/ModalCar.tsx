import React from 'react';
import {
	Alert,
	FlatList,
	Modal,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View,
} from 'react-native';
import { Car } from '../Home';
import { styles } from '../../../../theme/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../common/constantsColor';

interface Props {
	isVisible: boolean;
	car: Car[];
	setShowModal: () => void;
	setCar: () => void;
}

export const ModalCar = ({ isVisible, car, setShowModal, setCar }: Props) => {
	const { width } = useWindowDimensions();

	const totalPay = (): number => {
		let total: number = 0;
		car.forEach((product) => {
			total += product.price * product.totalQuantity;
		});
		return total;
	};

	//funcion para enviar la compra
	const handleSetInfo = () => {
		setShowModal();
		Alert.alert('Enhorabuena!', 'Compra realizada con éxito.');
		setCar();
	};
	return (
		<Modal visible={isVisible} transparent={true} animationType='fade'>
			<View style={styles.contentPrincipal}>
				<View style={{ ...styles.contentModal, width: width * 1 }}>
					<View style={styles.headerModal}>
						<Text style={styles.tittleModal}>Carrito de compras</Text>
						<View style={styles.iconCart}>
							<Icon
								name='close'
								size={27}
								color={PRIMARY_COLOR}
								onPress={setShowModal}
							/>
						</View>
					</View>
					<View style={styles.headerTable}>
						<Text style={{ fontWeight: 'bold' }}>Producto</Text>
						<View style={styles.headerTableInf}>
							<Text style={{ ...styles.textHeaderInf, marginHorizontal: 15 }}>
								Prec.
							</Text>
							<Text style={{ ...styles.textHeaderInf, marginHorizontal: 15 }}>
								Cant.
							</Text>
							<Text style={{ ...styles.textHeaderInf, marginHorizontal: 12 }}>
								Total
							</Text>
						</View>
					</View>
					<FlatList
						data={car}
						renderItem={({ item }) => (
							<View style={styles.headerTable}>
								<Text>{item.name}</Text>
								<View style={styles.headerTable}>
									<Text style={{ marginHorizontal: 10 }}>{item.price.toFixed(2)}</Text>
									<Text style={{ paddingHorizontal: 27 }}>
										{item.totalQuantity.toFixed(2)}
									</Text>
									<Text style={{ marginHorizontal: 10 }}>
										{(item.price * item.totalQuantity).toFixed(2)}
									</Text>
								</View>
							</View>
						)}
						keyExtractor={(item) => item.id.toString()}
					/>
					<View>
						<Text style={styles.totalPay}>
							Total a pagar: ${totalPay().toFixed(2)}
						</Text>
					</View>
					<TouchableOpacity style={styles.buttonAddCart} onPress={handleSetInfo}>
						<Text style={styles.buttonText}>Comprar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};
