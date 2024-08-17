import React, { useState } from 'react';
import {
	Image,
	Modal,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View,
} from 'react-native';
import { styles } from '../../../../theme/AppTheme';
import { Car, Product } from '../Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../common/constantsColor';

interface Props {
	isVisible: boolean;
	setShowModal: () => void;
	product: Product;
	changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProd = ({
	isVisible,
	setShowModal,
	product,
	changeStockProduct,
}: Props) => {
	//hook useDimension: tamaño de la pantalla
	const { width } = useWindowDimensions();
	//hook useState: manipular el estado del contador
	const [quantity, setQuantity] = useState<number>(1);

	//funcion para actualizar el contador de la cantidad
	const handleChangeQuantity = (value: number) => {
		setQuantity(quantity + value);
	};
	//Agregar productos al carrito
	const handleAddProduct = () => {
		changeStockProduct(product.id, quantity);

		setQuantity(1);

		setShowModal();
	};
	return (
		<Modal visible={isVisible} transparent={true} animationType='slide'>
			<View style={styles.contentPrincipal}>
				<View style={{ ...styles.contentModal, width: width * 0.8 }}>
					<View style={styles.headerModal}>
						<Text style={styles.tittleModal}>
							{product.name} - ${product.price.toFixed(2)}
						</Text>
						<View style={styles.iconCart}>
							<Icon
								name='close'
								size={27}
								color={PRIMARY_COLOR}
								onPress={setShowModal}
							/>
						</View>
					</View>
					<View>
						<Image source={{ uri: product.pathImage }} style={styles.imageModal} />
					</View>
					{product.stock === 0 ? (
						<Text style={styles.messageStock}>Producto Agotado!</Text>
					) : (
						<View>
							<Text style={{textAlign:'center'}}>{product.description}</Text>
							<View style={styles.contentQuantity}>
								<TouchableOpacity
									style={styles.buttonQuantity}
									onPress={() => handleChangeQuantity(-1)}
									disabled={quantity === 1}
								>
									<Text style={styles.textButtonQuantity}>-</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Text style={styles.textQuantity}>{quantity}</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.buttonQuantity}
									onPress={() => handleChangeQuantity(1)}
									disabled={quantity === product.stock}
								>
									<Text style={styles.textButtonQuantity}>+</Text>
								</TouchableOpacity>
							</View>
							<View>
								<Text style={styles.textQuantity}>
									Total: ${(product.price * quantity).toFixed(2)}
								</Text>
							</View>
							<TouchableOpacity
								style={styles.buttonAddCart}
								onPress={handleAddProduct}
							>
								<Text style={styles.textButtonQuantity}>Agregar Carrito</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
			</View>
		</Modal>
	);
};
