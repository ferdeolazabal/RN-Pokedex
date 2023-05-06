import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWith = Dimensions.get('window').width;
interface Props {
    pokemon: SimplePokemon;
}
const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.9}>
            <View style={{ ...styles.cardContainer, width: windowWith * 0.4 }}>
                <Text style={{ ...styles.name }}>
                    {pokemon.name}
                    {'\n#' + pokemon.id}
                </Text>
                <FadeInImage
                    uri={pokemon?.picture}
                    style={{
                        position: 'absolute',
                        left: 20,
                        top: 20,
                        width: 80,
                        height: 80,
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 8,
        backgroundColor: 'red',
        height: 120,
        width: 140,
        marginBottom: 25,
        borderRadius: 10,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 10,
        left: 10,
    },
});

export default PokemonCard;
