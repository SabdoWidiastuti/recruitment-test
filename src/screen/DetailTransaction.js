import React from 'react';
import {
    LogBox,
    Clipboard,
    Text,
    View
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

import styles from './styles';
import AppTheme from '../styles';
import { currency, dateFormat } from '../utils/Helper';

const { colors, normalize } = AppTheme;

function DetailTransaction({ route, navigation }) {
    LogBox.ignoreAllLogs();
    const { params } = route;
    return (
        <View style={{ backgroundColor: colors.white }}>
            <View
                style={[
                    styles.containerRow,
                    styles.containerUnderline]}
            >
                <Text style={styles.fontBoldUppercase}>ID TRANSAKSI:#{params.id}</Text>
                <Icon
                    type={"material-community"}
                    name={"content-copy"}
                    color={colors.primary}
                    iconStyle={{
                        transform: [{ rotateY: '180deg' }],
                        marginHorizontal: normalize(10),
                    }}
                    onPress={() => Clipboard.setString("#" + params.id)}
                />
            </View>

            <View
                style={[
                    styles.containerRow,
                    styles.containerUnderline]}
            >
                <Text
                    style={[
                        styles.fontBoldUppercase,
                        { flex: 1 }]}
                >DETAIL TRANSAKSI</Text>
                <Button
                    title={"Tutup"}
                    titleStyle={{ color: colors.primary }}
                    buttonStyle={{ backgroundColor: 'transparent', padding: 0 }}
                    onPress={() => navigation.pop()}
                />
            </View>

            <View style={{ padding: normalize(16) }}>
                <View style={styles.containerRowBottom}>
                    <Text style={styles.fontBoldUppercase}>{params.sender_bank} </Text>
                    <Icon
                        type={"material-community"}
                        name={"arrow-right-thick"}
                    />
                    <Text style={styles.fontBoldUppercase}> {params.beneficiary_bank}</Text>
                </View>

                <View style={styles.containerRowBottom}>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.fontBoldUppercaseSmall}>-{params.beneficiary_name}</Text>
                        <Text>{params.account_number}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.fontBoldUppercaseSmall}>Nominal</Text>
                        <Text>{currency(params.amount)}</Text>
                    </View>
                </View>

                <View style={styles.containerRowBottom}>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.fontBoldUppercaseSmall}>Berita Transfer</Text>
                        <Text>{params.remark}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.fontBoldUppercaseSmall}>Kode Unik</Text>
                        <Text>{params.unique_code}</Text>
                    </View>
                </View>
                
                <Text style={styles.fontBoldUppercaseSmall}>Waktu Dibuat</Text>
                <Text>{dateFormat(params.created_at)}</Text>
            </View>
        </View>
    )
}

export default DetailTransaction;