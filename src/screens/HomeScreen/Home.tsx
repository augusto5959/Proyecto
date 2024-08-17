import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../common/constantsColor';
import { ProductCard } from './components/ProductCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../theme/AppTheme';
import { ModalCar } from './components/ModalCar';

export interface Product {
	id: number;
	name: string;
	price: number;
	stock: number;
	pathImage: string;
	description: string;
}

export interface Car {
	id: number;
	name: string;
	price: number;
	totalQuantity: number;
}

export const Home = () => {
	//arreglo con la lista de productos
	const products: Product[] = [
		{
			id: 1,
			name: 'Hamburguesa Simple',
			price: 2.5,
			stock: 0,
			description:
				'Carne jugosa a la parrilla con lechuga, tomate y mayonesa en un pan suave.',
			pathImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCX__dwM4VRtKULs67SmA2Ng_ieg2r9Yj59Q&s',
		},
		{
			id: 2,
			name: 'Hamburguesa Doble',
			price: 3.5,
			stock: 5,
			description:
				'Dos jugosas hamburguesas de carne con queso derretido, lechuga, tomate y mayonesa en pan suave.',
			pathImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUmeBMFri0A_Pz4pIZ9buicW5tsw7cJ2alA&s',
		},
		{
			id: 3,
			name: 'Hamburguesa Euphoria',
			price: 5,
			stock: 5,
			description:
				'Hamburguesa con Tocino y Carne Mechada: Carne, tocino, carne mechada, queso, lechuga y tomate.',
			pathImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TN0Gjn1Xrb2KsZlfrvEXYrIzjxmUk6g-FA&s',
		},
		{
			id: 4,
			name: 'Papi Carne',
			price: 2,
			stock: 5,
			description: 'Carne premium, queso, cebolla caramelizada y salsa especial.',
			pathImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18spLFts3KNLRvpZzOFWYBLq5Tgr_XXVcww&s',
		},
		{
			id: 5,
			name: 'Papi Pollo',
			price: 2.75,
			stock: 5,
			description: 'Pechuga de pollo empanizada, lechuga, tomate y mayonesa.',
			pathImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRTMdt5SqrTNxPxLf4FwVVf1HQ_PHz62G1Q&s',
		},
		{
			id: 6,
			name: 'Papa Euphoria',
			price: 4,
			stock: 5,
			description:
				'Papa con Tocino y Carne Mechada: Papa asada con carne mechada, tocino y queso.',
			pathImage: 'https://i.ytimg.com/vi/_VqkAjae_pI/maxresdefault.jpg',
		},
		{
			id: 7,
			name: '5 alitas BBQ',
			price: 3.75,
			stock: 5,
			description: 'Alitas con salsa barbacoa.',
			pathImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5zjy8r3EqlugLs-q_hF24ayqhOkmS0HcuA&s',
		},
		{
			id: 8,
			name: '10 alitas BBQ',
			price: 6,
			stock: 5,
			description: 'Diez alitas bañadas en salsa barbacoa.',
			pathImage:
				'https://t1.uc.ltmcdn.com/es/posts/6/0/7/como_hacer_alitas_bbq_sin_horno_50706_orig.jpg',
		},
		{
			id: 9,
			name: 'Coca Cola ',
			price: 0.75,
			stock: 5,
			description: '750ml',
			pathImage:
				'https://www.coca-cola.com/content/dam/onexp/gt/es/brands/coca-cola/es_coca-cola_prod_orginal-bottle-600mL_750x750_v1.jpg',
		},
		{
			id: 10,
			name: 'Agua',
			price: 1,
			stock: 5,
			description: '1L',
			pathImage:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kHVl_pwwXZ5yQf6Rj-LvHpUehdd3WYE3wA&s',
		},
	];

	//hook useState: manipular el arreglo de productos
	const [productsState, setProductsState] = useState(products);
	//hook useState: manipular el arreglo de compras
	const [car, setCar] = useState<Car[]>([]);
	//manipular la visibilidad del modal
	const [showModal, setShowMOdal] = useState<boolean>(false);

	//funcion para actualizart la informacion del producto
	const changeStockProduct = (idProduct: number, quantity: number) => {
		const updateStock = productsState.map((product) =>
			product.id === idProduct
				? { ...product, stock: product.stock - quantity }
				: product,
		);
		//actualizar el product state
		setProductsState(updateStock);

		//llamar funcion agregar carrito
		addProduct(idProduct, quantity);
	};
	//funcion para agregar los productos al carrito
	const addProduct = (idProduct: number, quantity: number) => {
		const product = productsState.find((product) => product.id === idProduct);
		//Controlar si el producto no ha sido encontrado
		if (!product) {
			return;
		}

		const productInCart = car.find((item) => item.id === idProduct);

		if (productInCart) {
			// Si el producto ya está en el carrito, actualizamos la cantidad
			const updatedCar = car.map((item) =>
				item.id === idProduct
					? { ...item, totalQuantity: item.totalQuantity + quantity }
					: item,
			);
			setCar(updatedCar);
		} else {
			// Si el producto no está en el carrito, lo agregamos
			const newProductCar: Car = {
				id: product.id,
				name: product.name,
				price: product.price,
				totalQuantity: quantity,
			};
			setCar([...car, newProductCar]);
		}
	};

	return (
		<View>
			<StatusBar backgroundColor={PRIMARY_COLOR} />
			<View style={styles.contentHeaderHome}>
				<TitleComponent title='Productos' />
				{car.length > 0 ? (
					<View style={{ ...styles.iconCart, paddingHorizontal: 33 }}>
						<Text style={styles.textIconCar}>{car.length}</Text>
						<Icon
							name='shopping-cart'
							size={30}
							color={WHITE_COLOR}
							onPress={() => setShowMOdal(!showModal)}
						/>
					</View>
				) : (
					''
				)}
			</View>
			<BodyComponent>
				<FlatList
					data={productsState}
					renderItem={({ item }) => (
						<ProductCard
							product={item}
							changeStockProduct={changeStockProduct}
							car={car}
						/>
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
			</BodyComponent>
			<ModalCar
				isVisible={showModal}
				car={car}
				setShowModal={() => setShowMOdal(!showModal)}
				setCar={() => setCar([])}
			/>
		</View>
	);
};
