import React from 'react';
import { RootsStackParams } from '../navigator/Navigator';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<RootsStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({ navigation, route }: Props) => {
    const { color, simplePokemon } = route.params;
    const { top } = useSafeAreaInsets();
    const { id, name, picture } = simplePokemon;

    return (
        <View>
            <View
                style={{
                    ...styles.headerContainer,
                    backgroundColor: color,
                }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}
                    style={{ ...styles.backButton, top: top + 10 }}>
                    <Icon name="arrow-back-outline" color="white" size={40} />
                    <FadeInImage uri={picture} style={styles.pokemonImage} />
                    <Text style={{ ...styles.pokemonName, top: top + 10 }}>{name}</Text>
                </TouchableOpacity>
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
    pokemonImage: {
        position: 'absolute',
        // right: -8,
        // bottom: 5,
        width: 320,
        height: 320,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
});
export default PokemonScreen;
