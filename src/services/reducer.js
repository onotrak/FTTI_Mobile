const INIT_STATE = {
    loginMahasiswa: false,
    loginDosen: false,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'RESET':
            return {
                ...state,
                loginMahasiswa: false,
                loginDosen: false,
            };

        case 'LOGIN_MAHASISWA':
            return {
                ...state,
                loginMahasiswa: true,
                dataLogin: action.response,
            }

        case 'LOGIN_MAHASISWA_ERROR':
            return {
                ...state,
                dataLogin: action.response,
            }

        case 'LOGIN_DOSEN':
            return {
                ...state,
                loginDosen: true,
                dataLogin: action.response,
            }

        case 'LOGIN_DOSEN_ERROR':
            return {
                ...state,
                dataLogin: action.response,
            }


        default:
            return state;
    }
};

export default reducer;
