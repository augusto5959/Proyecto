import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Car, Product } from '../Home';
import { styles } from '../../../../theme/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../common/constantsColor';
import { ModalProd } from './ModalProd';

interface Props {
	product: Product;
	changeStockProduct: (idProduct: number, quantity: number) => void;
	car: Car[];
}

export const ProductCard = ({ product, changeStockProduct, car }: Props) => {
	//hook useState: manipular el estado del modal
	const [showModal, setShowModal] = useState<boolean>(false);
	return (
		<View>
			<View style={styles.contentCard}>
				<Image source={{ uri: product.pathImage }} style={styles.imageCard} />
				<View>
					<Text style={styles.tittlrCard}>{product.name}</Text>
					<Text style={{ paddingLeft: 10 }}>
						Precio: ${product.price.toFixed(2)}
					</Text>
				</View>
				<View style={styles.iconCart}>
					<Icon
						name='add-shopping-cart'
						size={33}
						color={PRIMARY_COLOR}
						onPress={() => setShowModal(!showModal)}
					/>
				</View>
			</View>
			<ModalProd
				isVisible={showModal}
				setShowModal={() => setShowModal(!showModal)}
				product={product}
        changeStockProduct={changeStockProduct}
			/>
		</View>
	);
};
