import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 370,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  text: {
    ...globalStyles.text,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    left: 20,
  },
  background: {
    bottom: -60,
    width: 250,
    height: 250,
    opacity: 0.7,
  },
  image: {
    position: 'absolute',
    bottom: -35,
  },
});
