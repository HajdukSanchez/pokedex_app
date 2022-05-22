import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 20,
    width: 160,
    height: 120,
    padding: 10,
    borderRadius: 10,
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
    ...globalStyles.text,
    top: 10,
    left: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  cardBackgroundContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
    zIndex: -1,
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
    right: -20,
    bottom: -20,
    width: 120,
    height: 120,
  },
});
