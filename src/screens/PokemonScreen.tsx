import React from 'react';
import { FadeInImage } from '../components/FadeInImage';
import { RootsStackParams } from '../navigator/Navigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootsStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({ navigation, route }: Props) => {
    const { color, simplePokemon } = route.params;
    const { top } = useSafeAreaInsets();
    const { id, name, picture } = simplePokemon;

    const { pokemon, isLoading } = usePokemon(id);
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    ...styles.headerContainer,
                    backgroundColor: color,
                }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}
                    style={{ ...styles.backButton, top: top + 5 }}>
                    <Icon name="arrow-back-outline" color="white" size={40} />
                </TouchableOpacity>

                <Text style={{ ...styles.pokemonName, top }}>
                    {name + `\n`} #{id}
                </Text>

                <Image style={styles.pokeball} source={require('../assets/pokebola-blanca.png')} />
                <FadeInImage uri={picture} style={styles.pokemonImage} />
            </View>
            {isLoading ? (
                <View style={styles.loadingIndicator}>
                    <ActivityIndicator color={color} size={50} />
                </View>
            ) : (
                <PokemonDetails pokemon={pokemon} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 300,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 10,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 10,
    },
    pokeball: {
        width: 250,
        height: 250,
        top: -50,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -5,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default PokemonScreen;
