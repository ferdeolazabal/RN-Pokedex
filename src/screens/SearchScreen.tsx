import React, { useEffect, useState } from 'react';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, Platform, FlatList, Dimensions } from 'react-native';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import styles from '../theme/AppTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWith = Dimensions.get('window').width;

const SearchScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isFething, simplePokemonList } = usePokemonSearch();

    const [pokemonsFiltered, setPokemonsFitered] = useState<SimplePokemon[]>([]);
    const [term, setTerm] = useState('Pokemons');

    useEffect(() => {
        if (term.length === 0) {
            return setPokemonsFitered([]);
        }
        if (isNaN(Number(term))) {
            setPokemonsFitered(
                simplePokemonList.filter((poke) =>
                    poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
                ),
            );
        } else {
            const pokemonById = simplePokemonList.find((poke) => poke.id === term);
            setPokemonsFitered(pokemonById ? [pokemonById] : []);
        }
    }, [term]);

    if (isFething) return <Loading />;

    return (
        <View
            style={{
                flex: 1,
                marginHorizontal: 2,
            }}>
            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    marginHorizontal: 18,
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWith - 45,
                    top: Platform.OS === 'ios' ? top : top + 30,
                }}
            />
            <FlatList
                data={pokemonsFiltered}
                keyExtractor={(poke) => poke.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={
                    <Text
                        style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            padding: 10,
                            marginHorizontal: 12,
                            marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
                        }}>
                        {term}
                    </Text>
                }
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
            />
        </View>
    );
};

export default SearchScreen;
