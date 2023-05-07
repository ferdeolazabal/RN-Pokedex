import React from 'react';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, Platform, FlatList, Dimensions } from 'react-native';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import styles from '../theme/AppTheme';

const screenWith = Dimensions.get('window').width;

const SearchScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isFething, simplePokemonList } = usePokemonSearch();

    if (isFething) return <Loading />;

    return (
        <View
            style={{
                flex: 1,
                marginHorizontal: 20,
            }}>
            <View>
                <SearchInput
                    style={{
                        position: 'absolute',
                        zIndex: 999,
                        width: screenWith - 40,
                        top: Platform.OS === 'ios' ? top : top + 30,
                    }}
                />
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
                                paddingBottom: 10,
                                marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
                            }}>
                            Pokedex
                        </Text>
                    }
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                />
            </View>
        </View>
    );
};

export default SearchScreen;
