import React from 'react';
import { StyleSheet, Platform, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import AppTheme from '../../styles';

const { colors, normalize } = AppTheme;

function SearchBar({ onSearch }) {
    return (
        <View style={styles.container}>
            <Icon
                type={"ionicon"}
                name={"search"}
                color={colors.grey} />
            <TextInput
                style={styles.inputText}
                placeholder={"Cari nama, bank atau nominal"}
                onChangeText={onSearch}
                underlineColorAndroid={"transparent"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                paddingVertical: normalize(12)
            }
        })
    },
    inputText: {
        flex: 1,
        marginHorizontal: normalize(5),
        color: colors.black
    }
})

export default SearchBar;