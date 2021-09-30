import React, {
    useState,
    useEffect
} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
    dynamicSort,
    searchArray
} from '../utils/Helper';

import ItemList from './component/ItemList';
import SearchBar from './component/SearchBar';
import Sorting from './component/Sorting';
import styles from './styles';

import { getTransactionAsync } from '../redux/transactionSlicer';

function HomePage({ navigation }) {
    const dispatch = useDispatch();
    const transaction = useSelector((state) => state.transaction);

    const [dataTransaction, setDataTransaction] = useState(transaction.data)
    const [searchText, setSearchText] = useState("");
    const [selectedSorting, setSelectedSorting] = useState({});
    const dataSorting = [{
        id: 1,
        name: "URUTKAN",
        property: null
    }, {
        id: 2,
        name: "Nama A-Z",
        property: "beneficiary_name"
    }, {
        id: 3,
        name: "Nama Z-A",
        property: "-beneficiary_name"
    }, {
        id: 4,
        name: "Tanggal Terbaru",
        property: "-created_at"
    }, {
        id: 5,
        name: "Tanggal Terlama",
        property: "created_at"
    }]

    useEffect(() => {
        setSelectedSorting(dataSorting[0]);
    }, [])

    useEffect(() => {
        if (transaction.isLoading) {
            dispatch(getTransactionAsync());
        }
        if (selectedSorting.id) {
            setDataTransaction(onSearchText());
        }
    }, [selectedSorting, searchText, transaction.isLoading])

    function sorting(arrayData) {
        if (selectedSorting.id > 1) {
            return arrayData.sort(dynamicSort(selectedSorting.property));
        } else {
            return arrayData;
        }
    }

    function onSearchText() {
        return sorting(searchArray(transaction.data, searchText))
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <SearchBar onSearch={value => setSearchText(value)} />
                <Sorting
                    data={dataSorting}
                    selectedData={selectedSorting}
                    onUpdate={(value) => setSelectedSorting(value)}
                />
            </View>

            <FlatList
                data={dataTransaction}
                keyExtractor={item => item.keyName}
                renderItem={({ item }) =>
                    <ItemList
                        item={item}
                        navigation={navigation}
                    />
                }
                ListFooterComponent={transaction.isLoading ? <ActivityIndicator /> : (dataTransaction.length === 0 && searchText && <Text>Data tidak ditemukan</Text>)}
            />
        </View>
    )
}

export default HomePage;