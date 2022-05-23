import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './Loading.styles';

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading = ({ color, size = 30 }: LoadingProps) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator style={styles.loading} size={size} color={color} />
    </View>
  );
};

export { Loading };
