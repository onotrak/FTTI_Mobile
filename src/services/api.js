import { db } from './db';

const registerMahasiswa = (item) => {
    return dispatch => {
        db.ref(`/users/mahasiswa/${item.nim}`).set({
            nama: item.nama,
            nohp: item.nohp,
            password: item.password
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }
}

const loginUser = (item) => {
    // return dispatch => {
        db.ref(`/users/${item.typeUser}/${item.nim}`).once('value', function (snapshot) {
            console.log('data login', snapshot.val())
            if(item.typeUser === 'mahasiswa'){
                if(snapshot.val() !== null){
                    if (item.password === snapshot.val().password){
                        const response = snapshot.val()
                        console.log('success', response)
                        // return dispatch({ type: 'LOGIN_MAHASISWA', response });
                    } else {
                        const response = 'Password Salah !'
                        console.log(response)
                        // return dispatch({ type: 'LOGIN_MAHASISWA_ERROR', response });
                    }
                } else {
                    const response = 'Nim Tidak Ditemukan !'
                    console.log(response)
                    // return dispatch({ type: 'LOGIN_MAHASISWA_ERROR', response });
                }
            } else {
                if(snapshot.val() !== null){
                    if (item.password === snapshot.val().password){
                        const response = snapshot.val()
                        console.log('success', response)
                        // return dispatch({ type: 'LOGIN_DOSEN', response });
                    } else {
                        const response = 'Password Salah !'
                        console.log(response)
                        // return dispatch({ type: 'LOGIN_DOSEN_ERROR', response });
                    }
                } else {
                    const response = 'Username Tidak Ditemukan !'
                    console.log(response)
                    // return dispatch({ type: 'LOGIN_DOSEN_ERROR', response });
                }
            }
        })
    // }
}

export {
    loginUser,
    registerMahasiswa,
}


//its work dont touch
// export const registerMahasiswa = (item) => {
//     db.ref(`/users/mahasiswa/${item.nim}`).set({
//         nama: item.nama,
//         nohp: item.nohp,
//         password: item.password
//     }).then((data)=>{
//         //success callback
//         console.log('data ' , data)
//     }).catch((error)=>{
//         //error callback
//         console.log('error ' , error)
//     })
// }

// export const loginUser = (item) => {
//     db.ref(`/users/${item.typeUser}/${item.nim}`).once('value', function (snapshot) {
//         console.log('data login', snapshot.val())
//         if(item.typeUser === 'mahasiswa'){
//             if(snapshot.val() !== null){
//                 if (item.password === snapshot.val().password){
//                     const response = snapshot.val()
//                     console.log('success', response)
//                     return dispatch({ type: 'LOGIN_MAHASISWA', response });
//                 } else {
//                     const response = 'Password Salah !'
//                     console.log(response)
//                     return dispatch({ type: 'LOGIN_MAHASISWA_ERROR', response });
//                 }
//             } else {
//                 const response = 'Nim Tidak Ditemukan !'
//                 console.log(response)
//                 return dispatch({ type: 'LOGIN_MAHASISWA_ERROR', response });
//             }
//         } else {
//             if(snapshot.val() !== null){
//                 if (item.password === snapshot.val().password){
//                     const response = snapshot.val()
//                     console.log('success', response)
//                     return dispatch({ type: 'LOGIN_DOSEN', response });
//                 } else {
//                     const response = 'Password Salah !'
//                     console.log(response)
//                     return dispatch({ type: 'LOGIN_DOSEN_ERROR', response });
//                 }
//             } else {
//                 const response = 'Username Tidak Ditemukan !'
//                 console.log(response)
//                 return dispatch({ type: 'LOGIN_DOSEN_ERROR', response });
//             }
//         }
//     })
// }