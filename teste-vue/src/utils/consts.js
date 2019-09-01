export default {
  url: "http://localhost:3333",
  auth: localStorage.getItem("auth"),
  token: JSON.parse(localStorage.getItem("auth"))
    ? JSON.parse(localStorage.getItem("auth")).token
    : null
};
