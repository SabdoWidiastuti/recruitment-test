import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox, Icon, Overlay } from 'react-native-elements';
import AppTheme from '../../styles';
const { colors, metrics, normalize } = AppTheme;

function Sorting({ data, selectedData, onUpdate }) {
    const [isVisibleSort, setVisibleSort] = useState(false);

    return (
        <View>
            <TouchableOpacity
                style={styles.containerButton}
                onPress={() => setVisibleSort(true)}>
                <Text style={styles.textButton}>{selectedData.name}</Text>
                <Icon
                    type={"font-awesome"}
                    name={"angle-down"}
                    color={colors.primary}
                    size={normalize(20)} />
            </TouchableOpacity>

            <Overlay
                isVisible={isVisibleSort}
                onBackdropPress={() => setVisibleSort(false)}
            >
                <View style={{ width: metrics.getWidthFromDP('80%') }}>
                    {
                        data.map(item => {
                            return <CheckBox
                                key={item.id}
                                title={item.name}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checkedColor={colors.primary}
                                uncheckedColor={colors.primary}
                                containerStyle={styles.containerCheckBox}
                                checked={item.id === selectedData.id}
                                onPress={() => {
                                    onUpdate(item)
                                    setVisibleSort(false)
                                }}
                            />
                        })
                    }

                </View>
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    containerCheckBox: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    textButton: {
        color: colors.primary,
        marginRight: normalize(5),
        fontWeight: 'bold',
        fontSize: normalize(12)
    },
})

export default Sorting;