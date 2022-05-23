import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10000,
  },
  listTitle: {
    marginTop: 120,
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: 350,
    height: 350,
    opacity: 0.3,
  },
});
