import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 20,
    width: 160,
    height: 120,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardTtext: {
    top: 10,
    left: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBackground: {
    position: 'absolute',
    left: -20,
    bottom: -40,
    width: 100,
    height: 100,
    opacity: 0.6,
  },
  cardImage: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    width: 120,
    height: 120,
  },
});
