import {Toast} from 'native-base';
import moment from 'moment';
import { AsyncStorage } from "react-native";

// export const fbappId = '299508480710316';
// export const googleappId = '426547881660-718un9is2l2ihf2sm3q002k6fu0cj8pf.apps.googleusercontent.com';
// export const IOSGoogleAppID = '426547881660-sobcminkh64qrp4asbp8ot6b8nll1790.apps.googleusercontent.com';
// export const webGoogleID = '426547881660-vtimv488kgcjd7uef6rionqvdtioukks.apps.googleusercontent.com';

export const errorMessage = (error) => {
    const output = JSON.parse(JSON.stringify(error));
    let message = '';
    if (output.response) {
        message = output.response.data.message ? output.response.data.message : output.response.statusText;
    } else {
        message = 'Whoops an error occured, please try again';
    }
    return message;
};

export const convertCurrency = (nominal, currency) => {
    let rupiah = '';
    const angkarev = nominal.toString().split('').reverse().join('');
    for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';

    if (currency) {
        return currency + rupiah.split('', rupiah.length - 1).reverse().join('');
    } else {
        return rupiah.split('', rupiah.length - 1).reverse().join('');
    }
};

export const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
};

export const groupBy = (array, f) => {
    let groups = {};
    array.forEach(function (o) {
        let group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
        return groups[group];
    })
};

// export const getOrderStatus = (number) => {
//     let output = '';
//     switch (number) {
//         case 0:
//             output = {'color': 'red', text: 'Pending'};
//             break;
//         case 1:
//             output = {'color': 'orange', text: 'Waiting for payment'};
//             break;
//         case 2:
//             output = {'color': 'blue', text: 'Processing'};
//             break;
//         case 3:
//             output = {'color': 'green', text: 'Completed'};
//             break;
//         case 4:
//             output = {'color': 'red', text: 'Cancelled'};
//             break;
//         case 5:
//             output = {'color': 'orange', text: 'Archived'};
//             break;
//     }
//     return output;
// };


export const showMessage = (text, type) => {
    return Toast.show({
        text: text,
        buttonText: "Ok",
        type: type,
        position: 'top'
    });
};

// export const getPaymentImage = (payment_type) => {
//     switch (payment_type) {
//         case 'bank_transfer':
//             return require('../assets/images/icon/atm_bersama.png');
//         case 'ovo':
//             return require('../assets/images/icon/ovo.png');
//         case 'indomaret':
//             return require('../assets/images/icon/indomaret.png');
//         case 'alfamart':
//             return require('../assets/images/icon/alfamart.png');
//         case 'gopay':
//             return require('../assets/images/icon/gopay.png');
//         case 'bca':
//             return require('../assets/images/icon/bca.png');
//         case 'permata':
//             return require('../assets/images/icon/permata.png');
//         case 'mandiri':
//             return require('../assets/images/icon/mandiri.png');
//         default:
//             return require('../assets/images/icon/atm_bersama.png');
//     }
// };

export const changeDatetime = (date) => {
    let today = false;
    if (moment().format('YYYY-MM-DD') === moment(date.toString()).format('YYYY-MM-DD')) {
        today = true;
    }
    let dateSplit = date.toString().split(' ');
    let output = '';
    for (let i = 0; i < dateSplit.length; i++) {
        if (i === 4) {
            if (today) {
                output += moment().format('HH:mm:ss') + ' '
            } else {
                output += '00:00:00' + ' '
            }
        } else {
            output += dateSplit[i] + ' '
        }

    }
    // output = `${output[0]} ${output[1]} ${output[2]} ${output[3]} ${ today ? moment().format('HH:mm:ss'):'00:00:00'} ${output[5]} ${output[6]} ${output[7]} ${output[8]}`;

    return output;
};

export const savePassengerHistory = async (passengers) => {
    let passengersHistory = await AsyncStorage.getItem('passengers');
        passengersHistory = passengersHistory ? JSON.parse(passengersHistory):[];
        passengersHistory.push(passengers);
    return AsyncStorage.setItem('passengers', JSON.stringify(passengersHistory));
}

export const QueryString = (params) => {
    return Object.keys(params).map((key) => {
        return key + '=' + params[key]
    }).join('&');
}
