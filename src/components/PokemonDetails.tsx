import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonDetail } from '../model/pokemon';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonDetail;
}

export const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <ScrollView
      style={StyleSheet.absoluteFillObject}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Types</Text>
          <View style={{ flexDirection: 'row' }}>
            {pokemon.types.map(({ type }) => (
              <Text style={[styles.text, { marginRight: 10 }]} key={type.name}>
                {type.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.title]}>Weight</Text>
          <Text style={styles.text}>{pokemon.weight}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.title]}>Sprites</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FadeInImage
              uri={pokemon.sprites.front_default}
              style={styles.sprite}
            />
            <FadeInImage
              uri={pokemon.sprites.back_default}
              style={styles.sprite}
            />
            <FadeInImage
              uri={pokemon.sprites.front_shiny}
              style={styles.sprite}
            />
            <FadeInImage
              uri={pokemon.sprites.back_shiny}
              style={styles.sprite}
            />
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={[styles.title]}>Abilities</Text>
          <View style={{ flexDirection: 'row' }}>
            {pokemon.abilities.map(({ ability }) => (
              <Text
                style={[styles.text, { marginRight: 10 }]}
                key={ability.name}>
                {ability.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.title]}>Moves</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {pokemon.moves.map(({ move }) => (
              <Text style={[styles.text, { marginRight: 10 }]} key={move.name}>
                {move.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Stats</Text>
          <View>
            {pokemon.stats.map((stat, index) => (
              <View
                key={stat.stat.name + index}
                style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { marginRight: 10, width: 150 }]}>
                  {stat.stat.name}
                </Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                  {stat.base_stat}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.sprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 370,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 17,
  },
  sprite: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
