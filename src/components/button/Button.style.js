import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'navy',
    height: 40,
    paddingHorizontal: 10,
    width: 'fit-content',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#C7CEEA',
  },
  secondary: {
    backgroundColor: '#FF9AA2',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  loadingContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    borderRadius: 5,
  },
});

export default styles;
