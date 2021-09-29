import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import AppTheme from '../../styles/index';
import { currency, dateFormat } from '../../utils/Helper';
import styles from '../styles';
import { ROUTE_NAMES } from '../../utils/Constants';

const { colors } = AppTheme;

function ItemList({ item, navigation }) {
    return (
        <TouchableOpacity
            style={[
                styles.containerCard,
                { backgroundColor: item.status === "SUCCESS" ? colors.green : colors.primary, }
            ]}
            onPress={() => navigation.navigate(ROUTE_NAMES.DETAIL_PAGE, item)}
        >
            <View style={[styles.containerRow, styles.containerCardWhite]}>
                <View style={{ flex: 1 }}>
                    <View style={styles.containerRow}>
                        <Text style={styles.fontBoldUppercase}>{item.sender_bank} </Text>
                        <Icon
                            type={"material-community"}
                            name={"arrow-right-thick"}
                        />
                        <Text style={styles.fontBoldUppercase}>{item.beneficiary_bank}</Text>
                    </View>
                    <Text>{item.beneficiary_name.toUpperCase()}</Text>
                    <View style={styles.containerRow}>
                        <Text>{currency(item.amount)}</Text>
                        <Icon
                            type={"entypo"}
                            name={"dot-single"}
                        />
                        <Text>{dateFormat(item.created_at)}</Text>
                    </View>
                </View>
                {
                    item.status === "SUCCESS" ? <View style={styles.containerStatusGreen}>
                        <Text style={styles.fontBoldWhite}>Berhasil</Text>
                    </View> :
                        <View style={styles.containerStatusOrange}>
                            <Text style={styles.fontBold}>Pengecekan</Text>
                        </View>
                }

            </View>
        </TouchableOpacity>
    )
}

export default ItemList;