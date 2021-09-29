import { StyleSheet } from 'react-native';
import AppTheme from '../styles';
const { colors, normalize } = AppTheme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: normalize(12)
    },
    containerCard: {
        marginVertical: normalize(3),
        paddingLeft: normalize(5),
        borderRadius: normalize(5)
    },
    containerCardWhite: {
        backgroundColor: colors.white,
        padding: normalize(10),
        borderTopRightRadius: normalize(5),
        borderBottomRightRadius: normalize(5)
    },
    containerHeader: {
        flexDirection: 'row',
        paddingHorizontal: normalize(10),
        backgroundColor: colors.white,
        alignItems: 'center',
        marginBottom: normalize(5)
    },
    containerRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    containerRowBottom: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: normalize(16)
    },
    containerStatusGreen: {
        borderRadius: normalize(3),
        backgroundColor: colors.green,
        paddingVertical: normalize(2),
        paddingHorizontal: normalize(6)
    },
    containerStatusOrange: {
        borderRadius: normalize(3),
        borderColor: colors.primary,
        borderWidth: 1,
        paddingVertical: normalize(2),
        paddingHorizontal: normalize(6)
    },
    containerUnderline: {
        padding: normalize(16),
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1
    },
    fontBoldWhite: {
        fontWeight: 'bold',
        color: colors.white
    },
    fontBold: {
        fontWeight: 'bold'
    },
    fontBoldUppercase: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: normalize(14)
    },
    fontBoldUppercaseSmall: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: normalize(12)
    }
})

export default styles;

