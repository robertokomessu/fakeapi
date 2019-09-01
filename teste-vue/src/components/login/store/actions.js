import axios from "axios";

const login = ({ commit }, obj) => {
  commit("LOADING_LOGIN");
  return axios
  .get(`https://my-json-server.typicode.com/robertokomessu/fakeapi/login`, {
    headers: { "Content-Type": "application/json" }
  })
  .then(res => {
    if (
      obj.email === res.data[0].email &&
      obj.password === res.data[0].password
      )
      commit("LOGIN_SUCCESS");
      else 
      commit("LOGIN_ERROR");
    })
};

const logout = ({ commit }) => {
  commit("LOGOUT");
};

export default {
  login,
  logout
};
