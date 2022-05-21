import { StyleSheet } from 'react-native';
import { globalStyles } from '../../theme/appTheme';

export const styles = StyleSheet.create({
  image: {
    ...globalStyles.background,
  },
  text: {
    ...globalStyles.title,
    ...globalStyles.margin,
  },
	list: {
		justifyContent: 'center'
	}
});
