import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  screen:{
    flex: 1, 
    borderRadius: 10,
  },
  text:{
    color: 'white',
    fontWeight: "900",
    fontSize: 15,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 7,
    flexWrap: 'wrap',
  },
  image: {
    height: 200,
    width: '97%',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    
  },

  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    width: 80,
    borderRadius: 30,
    backgroundColor: '#023047',
  },

  btntext:{
    color: "white",
    fontSize: 17,
  },
  
  twobtns:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width: 300,
    height: 80,
    marginTop: 85,
    alignItems: 'center',
    marginLeft: 60,
  },
  ngo:{
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: '#caf0f8',
    padding:8,
    marginVertical: 8,
    marginHorizontal: 3,
    borderRadius: 15,
    fontWeight: "bold",

  },
  list:{
    borderRadius: 20,
    height: '100%',
    width: 400,
    backgroundColor: 'black',
    marginTop: 30,
    marginLeft: 10,
    padding:2,
    borderRadius: 20,
  },
    icon: {
    borderWidth:1,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 320,
    width:50,
    height:50,
    backgroundColor:'white',
    borderRadius:50,
  },
})

export default styles;