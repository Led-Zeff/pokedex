import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import { PokemonOverview } from '../model/pokemon';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonOverview;
}

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({ pokemon }: Props) => {
  const [gbColor, setGbColor] = useState('#9e9e9e');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {
    ImageColors.getColors(pokemon.image).then(colors => {
      if (!isMounted) {
        return;
      }

      if (colors.platform === 'ios') {
        setGbColor(colors.background);
      } else if (colors.dominant) {
        setGbColor(colors.dominant);
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [pokemon.image]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Pokemon', { pokemon, color: gbColor })
      }>
      <View
        style={[
          styles.container,
          { width: windowWidth * 0.4, backgroundColor: gbColor },
        ]}>
        <View>
          <Text style={styles.name}>
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={[StyleSheet.absoluteFillObject, styles.pokeballContainer]}>
          <Image
            style={styles.pokeball}
            source={require('../assets/pokeball-white.png')}
          />
        </View>

        <FadeInImage uri={pokemon.image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#9e9e9e',
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  name: {
    top: 10,
    left: 10,
    color: 'white',
    fontSize: 20,
  },
  pokeballContainer: {
    overflow: 'hidden',
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.4,
  },
  image: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
