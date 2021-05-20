import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SerachInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search..."
        />

        <Icon name="search-outline" color="gray" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inner: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
