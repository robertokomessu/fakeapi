
const LOADING_LOGIN = (state, obj) => {
    state.loading_login = true
    state.error_login = false
}

const LOGIN_SUCCESS = (state, obj) => {
    state.loading_login = false
    state.error_login = false
    localStorage.setItem('auth', 'true')
    // SET TOKEN API HERE
}

const LOGOUT = (state, obj) => {
    state.loading_login = false
    state.error_login = false
    localStorage.setItem('auth', 'false')
}

const LOGIN_ERROR = (state, obj) => {
    state.loading_login = false
    state.error_login = true
    localStorage.clear('auth')
}

export default {
    LOADING_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
}