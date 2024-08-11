import { StyleSheet } from "react-native";
import {
  BLACK_COLOR,
  INPUT_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from "../src/common/constantsColor";

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:'white',
    width:'100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    backgroundColor:'white'
  },
  imagen: {
    flex:1,
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
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  subtitle: {
    fontSize: 16,
    color: BLACK_COLOR,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    padding:15,
    borderRadius:10,
    marginTop:30,

  },
  buttonText: {
    color: WHITE_COLOR,
    fontSize: 19,
    fontWeight:'bold',
    textAlign:'center'
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
  iconPassword:{
    position: 'absolute',
    right:20,
    marginTop:13
  },
  textRedirect:{
    color: PRIMARY_COLOR,
    marginTop:30,
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center'
  },
  containerButton:{
    flex:0,
    flexDirection:'row',
    gap:50,
    paddingBottom:30
  }
});
