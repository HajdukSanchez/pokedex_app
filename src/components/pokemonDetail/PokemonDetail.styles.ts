import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

export const styles = StyleSheet.create({
  scroll: {
    ...StyleSheet.absoluteFillObject,
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  typesContainer: {
    flexDirection: 'row',
  },
  typeText: {
    fontSize: 18,
    color: 'black',
    marginRight: 10,
  },
});
