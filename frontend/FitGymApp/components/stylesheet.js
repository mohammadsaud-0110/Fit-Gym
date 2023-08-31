import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'FF80AB',
    },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button:{
    width: '70%',
    marginTop: 10,
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue',

  },
  buttontext:{
    color: 'white',
    fontSize:16,
  },
  text:{
    fontSize:25,
    padding:10,
    marginBottom: 20,
  }

});

export default styles;
