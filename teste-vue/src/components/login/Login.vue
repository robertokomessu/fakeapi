<template>
  <div class="login">
    <div class="login--box-login">
      <header>
        <figure>
          <img src="/static/logo.png" class="login--logo" />
        </figure>
      </header>
      <h3>Welcome</h3>
      <form action="#" autocomplete="off" id="form-login">
        <input type="text" placeholder="Digite o seu e-mail" v-model="email" autocomplete="vue-1" />
        <input type="password" placeholder="Digite sua senha" v-model="password" autocomplete="vue-2" />
        <div v-if="this.error_login" class="errors-label">
          <p class="errors">Please check your username or password.</p>
        </div>
        <div v-if="this.loading_login" class="status-label">
          <p class="alert">Sending data...</p>
        </div>
        <div class="btn bt-login">
          <button @click="submit" :disabled="this.loading_login === true">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase';
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  computed: {
    ...mapState('Login', ['error_login','loading_login']),
  },
  methods: {
    ...mapActions("Login", ["login"]),
    submit: function(event) {
      if (this.email.length > 0 && this.password.length > 0) {
         this.error_login2 = false
        let payload = { email: this.email, password: this.password }
        this.login(payload)
          .then(() => {
            if(!this.error_login){
              this.$router.push("/");
            }
          })
      }else{
         
      }
    }
  }
};
</script>

<style scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
}
.login .login--box-login{
  max-width: 350px;
  background: rgb(33, 117, 155);
  padding: 30px;
}
.login--box-login h3{
  color: #fff;
}
.login--box-login a{
  color: #fff;
  font-size: 14px;
}
.login--box-login .login--logo{
  display: block;
  max-width: 200px;
  margin: 0 auto 30px;
  width: 100%;
}
.login--box-login input{
  margin: 5px 0;
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  color: #757575;
}
.login--box-login .bt-login button{
  border: 0;
  cursor: pointer;
  margin: 20px 0 0;
  background-color: #00d5b1;
  color: #fff;
  border-bottom: 1px solid #00d5b1;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  padding: 12px 10px;
  text-transform: uppercase;
  transition: all 0.2s linear;
}
.login--box-login .bt-login button:hover{
  background-color: #00bd9e;
  border-bottom: 1px solid rgb(33, 117, 155);
}
#form-login .errors-label{
  font-size: 14px;
  color: #fff;
  background: #f03c3c;
  padding: 2px 10px;
  margin-top: 10px;
}
#form-login .status-label{
  font-size: 14px;
  color: #000;
  background: greenyellow;
  padding: 2px 10px;
  margin-top: 10px;
}
</style>