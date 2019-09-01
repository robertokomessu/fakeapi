<template>
  <div class="login">
    <header>
      <h2>Leads2b - Teste</h2>
    </header>
    <h1>Login</h1>
    <form action="#">
    <input
      type="text"
      placeholder="Email"
      v-model="email"
      autocomplete="email"
    >
    <input
      type="password"
      placeholder="Senha"
      v-model="password"
      autocomplete="password"
    >
    <div class="btn-login">
      <button @click="submit">Login</button>
    </div>
  </form>
    <!-- <p>
      Você não tem conta?
      <span>
        <router-link to="/registrar">crie uma conta</router-link>
      </span>
    </p> -->
  </div>
</template>

<script>
// import firebase from 'firebase';
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
      ...mapActions("Auth", ["login"]),
      submit: function(event) {
        if (this.email.length > 0 && this.password.length > 0){
          this.login({ email: this.email, password: this.password })
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {
            console.log("login_error");
          });
        }
      }
    }
  }
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>