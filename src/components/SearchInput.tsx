import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Platform, ViewStyle, StyleProp } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ style, onDebounce }: Props) => {
    const [textValue, setTextValue] = useState('');

    const deboncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        onDebounce(deboncedValue);
    }, [deboncedValue]);

    return (
        <View style={{ ...(style as any) }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholderTextColor="grey"
                    placeholder="Buscar pokemon"
                    style={{
                        ...styles.textInput,
                        top: Platform.OS === 'ios' ? 0 : 2,
                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon name="search-outline" color="grey" size={25} />
            </View>
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 16,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: 'grey',
    },
});
