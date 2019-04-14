const INIT_STATE = {
    loggedIn: false,
    error: false,
    success: false,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'RESET':
            return {
                ...state,
                error: false,
                success: false,
            };

        case 'SHOW_LOADING':
            return {
                ...state,
                loadingOS: true
            };

        default:
            return state;
    }
};

export default reducer;
