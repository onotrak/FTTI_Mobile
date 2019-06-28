import axios from 'axios';

const fetch = async (url , options = {
    method: 'GET',
    body: {}
}) => {
    const request = {
        baseURL: "https://asa-project-569.firebaseio.com/users/",
        method: options.method,
        timeout: 5000,
        url,
        headers: options.head
    };
    if (request.method === "POST"){ request.data = options.body }
    else if (request.method === "PUT"){ request.data = options.body }
    const res = await axios(request);
    if (res.status === 200) {
        return res.data
    } else {
        throw res
    }
};

export default {
    getLoginMhs : () =>{
        return fetch('mahasiswa',{
            method: "GET",
            head:{
                "Content-Type" : "application/json",
                "Accept" : "application/json",
            },
        })
    },
    getLoginDosen : () =>{
        return fetch('dosen',{
            method: "GET",
            head:{
                "Content-Type" : "application/json",
                "Accept" : "application/json",
            },
        })
    },
}