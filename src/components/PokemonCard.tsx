import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
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
                <View style={styles.pokebolaContainer}>
                    <Image
                        style={styles.pokebola}
                        source={require('../assets/pokebola-blanca.png')}
                    />
                </View>
                <FadeInImage uri={pokemon?.picture} style={styles.pokemonImage} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 5,
        backgroundColor: 'red',
        height: 120,
        width: 200,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 10,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5,
    },
    pokemonImage: {
        position: 'absolute',
        right: -8,
        bottom: -5,
        width: 120,
        height: 120,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5,
    },
});

export default PokemonCard;
