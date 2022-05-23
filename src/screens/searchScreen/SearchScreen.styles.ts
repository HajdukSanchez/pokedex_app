import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

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
});
