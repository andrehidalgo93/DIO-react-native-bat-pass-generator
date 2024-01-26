import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#0E111D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#0E111D'
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default styles;