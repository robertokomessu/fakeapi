const INSERTING_USER  = (state, obj) => {
    state.inserting_user = true
    state.error_login = false
}

const INSERT_USER_SUCCESS = (state, obj) => {
    state.inserting_user = false
    state.insert_user_success = true
    state.insert_user_error = false
}

const INSERT_USER_ERROR = (state, obj) => {
    state.insert_user_error = true
    state.insert_user_success = false
    state.inserting_user = false
}

const LOADING_LOGIN = (state, obj) => {
    state.loading_login = true
    state.error_login = false
    state.insert_user_success = false
    state.insert_user_error = false
}

const LOGIN_SUCCESS = (state, obj) => {
    state.loading_login = false
    state.error_login = false
    localStorage.setItem('auth', 'true')
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
    // Insert User
    INSERTING_USER,
    INSERT_USER_SUCCESS,
    INSERT_USER_ERROR,

    // Login
    LOADING_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
}