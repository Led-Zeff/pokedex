import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginator } from '../hooks/usePokemonPaginator';
import appStyles from '../theme/appTheme';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemons, fetchNextPage } = usePokemonPaginator();

  return (
    <>
      <Image
        style={appStyles.pokeball}
        source={require('../assets/pokeball.png')}
      />

      <Text
        style={[
          appStyles.title,
          appStyles.globalMargin,
          { marginTop: top + 10 },
        ]}>
        Pokedex
      </Text>

      <View style={[styles.pokeContainer]}>
        <FlatList
          data={pokemons}
          keyExtractor={p => p.id.toString()}
          onEndReachedThreshold={0.4}
          onEndReached={fetchNextPage}
          numColumns={2}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          ListFooterComponent={
            <ActivityIndicator style={{ height: 100 }} color="#ff5722" />
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pokeContainer: {
    alignItems: 'center',
  },
});
