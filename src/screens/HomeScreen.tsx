import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image style={styles.pokebolaBG} source={require('../assets/pokebola.png')} />
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(poke) => poke.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={
                        <Text
                            style={{
                                ...styles.title,
                                ...styles.globalMargin,
                                top: top + 20,
                                marginBottom: top + 20,
                                paddingBottom: 10,
                            }}>
                            Pokedex
                        </Text>
                    }
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={
                        <ActivityIndicator style={{ height: 100 }} size={30} color="grey" />
                    }
                />
            </View>
        </>
    );
};

export default HomeScreen;
