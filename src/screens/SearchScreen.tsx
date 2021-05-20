import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SerachInput } from '../components/SerachInput';

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: top + 10 }]}>
      <SerachInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
