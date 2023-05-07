import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform, ViewStyle, StyleProp } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ style }: Props) => {
    return (
        <View style={{ ...styles.container, ...(style as any) }}>
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
                />
                <Icon name="search-outline" color="grey" size={25} />
            </View>
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        // marginTop: 15,
        // backgroundColor: 'green',
    },
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
    },
});
