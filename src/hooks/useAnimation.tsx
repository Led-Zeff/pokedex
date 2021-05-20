import { useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimation = (duration = 300) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fade = (to: number) => {
    return Animated.timing(opacity, {
      toValue: to,
      duration,
      useNativeDriver: true,
    }).start;
  };

  return { opacity, fadeIn: fade(1), fadeOut: fade(0) };
};
