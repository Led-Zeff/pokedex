import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import { RootStackParams } from '../navigation/StackNavigation';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

export const PokemonScreen = ({ route, navigation }: Props) => {
  const { pokemon, color } = route.params;
  const { isLoading, pokemonDetail } = usePokemonDetail(pokemon.url);

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { backgroundColor: color }]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.backButton}
          onPress={navigation.goBack}>
          <Icon name="arrow-back-outline" color="white" size={30} />
        </TouchableOpacity>

        <Text style={styles.pokemonName}>
          {pokemon.name + '\n'}#{pokemon.id}
        </Text>

        <Image
          style={styles.pokeball}
          source={require('../assets/pokeball-white.png')}
        />

        <FadeInImage uri={pokemon.image} style={styles.pokemonImage} />
      </View>

      {isLoading && (
        <ActivityIndicator color={color} size={50} style={styles.loading} />
      )}

      {!!pokemonDetail && <PokemonDetails pokemon={pokemonDetail} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 10,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
    top: 40,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
