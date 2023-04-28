import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    return (
        <View>
            <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>Pokedex</Text>
            <Image style={styles.pokebolaBG} source={require('../assets/pokebola.png')} />
        </View>
    );
};

export default HomeScreen;
