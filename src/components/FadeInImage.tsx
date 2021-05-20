import React, { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ViewStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={[styles.container, style]}>
      {isLoading && (
        <ActivityIndicator style={styles.loading} color="#607d8b" size={30} />
      )}

      <Animated.Image
        source={{ uri }}
        onError={() => setIsLoading(false)}
        onLoad={() => {
          setIsLoading(false);
          fadeIn();
        }}
        style={{ ...(style as any), opacity }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
  },
});
