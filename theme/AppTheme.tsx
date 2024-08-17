import { StyleSheet } from 'react-native';
import {
	BLACK_COLOR,
	INPUT_COLOR,
	PRIMARY_COLOR,
	WHITE_COLOR,
} from '../src/common/constantsColor';

export const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		color: PRIMARY_COLOR,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: 'white',
		width: '100%',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		backgroundColor: 'white',
	},
	imagen: {
		flex: 1,
		width: '100%',
		height: '80%',
		position: 'relative',
		zIndex: -1,
	},
	contentInput: {
		marginTop: 30,
		gap: 20,
	},
	globalTitle: {
		fontSize: 30,
		color: WHITE_COLOR,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingHorizontal: 30,
		paddingVertical: 15,
	},
	subtitle: {
		fontSize: 16,
		color: BLACK_COLOR,
		fontStyle: 'italic',
	},
	button: {
		backgroundColor: PRIMARY_COLOR,
		padding: 15,
		borderRadius: 10,
		marginTop: 30,
	},
	buttonText: {
		color: WHITE_COLOR,
		fontSize: 19,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	contenBody: {
		backgroundColor: WHITE_COLOR,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 30,
		paddingTop: 30,
	},
	inputText: {
		backgroundColor: INPUT_COLOR,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 15,
	},
	iconPassword: {
		position: 'absolute',
		right: 20,
		marginTop: 13,
	},
	textRedirect: {
		color: PRIMARY_COLOR,
		marginTop: 30,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	containerButton: {
		flex: 0,
		flexDirection: 'row',
		gap: 50,
		paddingBottom: 30,
	},
	contentCard: {
		padding: 15,
		borderStyle: 'solid',
		borderColor: WHITE_COLOR,
		shadowColor: BLACK_COLOR,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		elevation: 3,
		shadowRadius: 2,
		marginBottom: 15,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
	},
	tittlrCard: {
		fontWeight: 'bold',
		fontSize: 14,
		color: BLACK_COLOR,
		padding: 10,
	},
	imageCard: {
		width: 75,
		height: 75,
	},
	iconCart: {
		flex: 1,
		alignItems: 'flex-end',
	},
	contentModal: {
		padding: 25,
		borderRadius: 10,
		shadowColor: BLACK_COLOR,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		backgroundColor: WHITE_COLOR,
	},
	contentPrincipal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	headerModal: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: BLACK_COLOR,
		borderBottomWidth: 2,
		padding: 10,
	},
	tittleModal: {
		fontWeight: 'bold',
		color: BLACK_COLOR,
		fontSize: 16,
	},
	imageModal: {
		height: 200,
		width: 200,
		alignSelf: 'center',
	},
	contentQuantity:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	buttonQuantity:{
		width:50,
		height:50,
		backgroundColor:PRIMARY_COLOR,
		borderRadius:100,
		justifyContent:'center',
		alignItems:'center',
		margin:17
	},
	textButtonQuantity:{
		color:
		WHITE_COLOR,
		fontSize:17,
		fontWeight:'bold'
	},
	textQuantity:{
		color:BLACK_COLOR,
		fontSize:20,
		textAlign:'center',
	},
	buttonAddCart:{
		backgroundColor:PRIMARY_COLOR,
		alignItems:'center',
		marginTop:15,
		paddingVertical:10,
		borderRadius:8
	},
	messageStock:{
		fontSize:20,
		fontWeight:'bold',
		color:'#b52828',
		textAlign:'center'
	},
	contentHeaderHome:{
		flexDirection:'row',
		alignItems:'center',
	},
	textIconCar:{
		backgroundColor:WHITE_COLOR,
		borderRadius:100,
		paddingHorizontal:5,
		fontSize:14,
		fontWeight:'bold'
	},
	headerTable:{
		flexDirection:'row',
		justifyContent:'space-between'
	},
	headerTableInf:{
		flexDirection:'row',
	},
	textHeaderInf:{
		fontWeight:'bold',
		color: BLACK_COLOR
	},
	totalPay:{
		marginTop:15,
		fontSize:17,
		fontWeight:'bold',
		alignSelf:'flex-end'
	}
});
