import { db } from './db';

export const registerMahasiswa =  (item) => {
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


// import axios from 'axios';

// const fetch = async (url , options = {
//     method: 'GET',
//     body: {}
// }) => {
//     const request = {
//         baseURL: "https://asa-project-569.firebaseio.com/users/",
//         method: options.method,
//         timeout: 5000,
//         url,
//         headers: options.head
//     };
//     if (request.method === "POST"){ request.data = options.body }
//     else if (request.method === "PUT"){ request.data = options.body }
//     const res = await axios(request);
//     if (res.status === 200) {
//         return res.data
//     } else {
//         throw res
//     }
// };

// export default {
//     getLoginMhs : () =>{
//         return fetch('https://asa-project-569.firebaseio.com/users/mahasiswa.json',{
//             method: "GET",
//             head:{
//                 "Content-Type" : "application/json",
//                 "Accept" : "application/json",
//             },
//         })
//     },
//     getLoginDosen : () =>{
//         return fetch('dosen',{
//             method: "GET",
//             head:{
//                 "Content-Type" : "application/json",
//                 "Accept" : "application/json",
//             },
//         })
//     },
// }