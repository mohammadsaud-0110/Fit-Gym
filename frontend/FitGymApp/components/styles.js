// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  picker: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2D6A4F',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    marginTop: 10,
    alignItems: 'center',
  },
  buttontext: {
    color: '#fff',
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  skipButton: {
    marginTop: 20,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});