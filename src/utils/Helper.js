// Currency format
const currency = (value) => {
    if (value) {
        return "Rp " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
        return "Rp 0";
    }
}

// Date format
const dateFormat = (dateIn) => {
    var strSplitDate = String(dateIn).split(' ');
    var date = new Date(strSplitDate[0]);
    var day = date.getDate();
    var mm = date.getMonth();

    var year = date.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }

    var month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    date = day + " " + month[mm] + " " + year;
    return date.toString();
}

// Convert data from object to array
function objectToArray(data) {
    let dataObj = data;
    let dataArray = Object.keys(dataObj).map(key => {
        let obj = dataObj[key];
        obj.keyName = key;
        return obj;
    })
    return dataArray;
}

// Sorting by field name
function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}

// Search data by keywoard
function searchArray(data, searchText) {
    const newData = data.filter(item => {
        const name = item.beneficiary_name.toLowerCase();
        const itemData = `${name}${item.sender_bank}${item.beneficiary_bank}${item.amount}`;
        const textData = searchText.toLowerCase();
        return itemData.indexOf(textData) > -1;
    });
    return newData;
}

export {
    currency,
    dateFormat,
    dynamicSort,
    objectToArray, 
    searchArray
}