import React from 'react';
import { FadeInImage } from '../components/FadeInImage';
import { RootsStackParams } from '../navigator/Navigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootsStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({ navigation, route }: Props) => {
    const { color, simplePokemon } = route.params;
    const { top } = useSafeAreaInsets();
    const { id, name, picture } = simplePokemon;

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

                <Text style={{ ...styles.pokemonName, top: top + 40 }}>
                    {name + `\n`} #{id}
                </Text>

                <Image style={styles.pokeball} source={require('../assets/pokebola-blanca.png')} />
                <FadeInImage uri={picture} style={styles.pokemonImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 340,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 10,
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
        top: -10,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -10,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default PokemonScreen;
