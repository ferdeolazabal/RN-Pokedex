import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UsePokemonPaginated } from '../hooks/UsePokemonPaginated';

const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const { isLoading, simplePokemonList, loadPokemons } = UsePokemonPaginated();

    return (
        <>
            <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>Pokedex</Text>
            <Image style={styles.pokebolaBG} source={require('../assets/pokebola.png')} />

            <FlatList
                data={simplePokemonList}
                keyExtractor={(poke) => poke.id}
                // renderItem={({ item }) => <Text style={{ color: 'black' }}>{item.name}</Text>}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.picture }}
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    />
                )}
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}
                ListFooterComponent={
                    <ActivityIndicator style={{ height: 100 }} size={30} color="grey" />
                }
            />
        </>
    );
};

export default HomeScreen;
