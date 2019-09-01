<template>
  <div class="panel">
    <header class="main-header">
      <div class="container">
        <figure>
          <img src="/static/logo.png" class="login--logo" />
        </figure>
        <div class="panel-actions">
          <button type="button"><router-link to="/">List all employees</router-link></button>
          <button type="button" class="btn-logout" @click="logoff">Logout
          </button>
        </div>
      </div>
    </header>

    <form id="form-new-employee" action="#" @submit.prevent="submit">
      <div :class="{ 'form-group--error': (submitStatus === 'ERROR')}">
      <h3>New Employee</h3>
      <input type="text" v-model.trim="$v.name.$model" name="name" placeholder="Please enter your first name *" value="" required/>
      <input type="text" v-model.trim="$v.email.$model" name="email" placeholder="Please enter your email *" value=""  required/>
      <input type="number" v-model.trim="$v.salary.$model" name="salary" placeholder="Please enter your salary *" value="" required/>
      <input type="date" v-model.trim="$v.admission.$model" name="admission" placeholder="Please enter your admission date *" value="" required/>
      <p class="errors">Please fill in all fields.</p>
      </div>
      <button type="button" v-on:click="create" :disabled="submitStatus === 'PENDING'">Create</button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(40) },
    email: { required, email },
    salary: { required },
    admission: { required }
  },
  data: () => ({
    name: "",
    email: "",
    salary: "",
    admission: "",
    submitStatus: null
  }),
  methods: {
    ...mapActions("Employee", ["insertEmployee"]),
    ...mapActions("Login", ["logout"]),
    create: function(event){
      this.$v.$touch()
      this.submitStatus = 'PENDING'
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      }
      if (
        this.name.length > 0 &&
        this.email.length > 0 &&
        this.salary.length > 0 &&
        this.admission.length > 0
      ) {
        this.submitStatus = 'OK'
        this.insertEmployee({
          name: this.name,
          email: this.email,
          salary: this.salary,
          admission: this.admission
        }).then(() => {
          this.$router.push("/");
        });
      }
    },
    logoff: function(){
      this.logout().then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
.panel .main-header{
  background: rgb(33, 117, 155);
  padding: 30px;
}
.panel .main-header .container{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

@media screen and (min-width: 768px){
  .panel .main-header .container{
    display: flex;
    justify-content: space-around;
  }
}
.panel-actions{
  display: flex;
  flex-direction: row;
}

.panel .main-header figure img{
  max-width: 200px;
}
.panel .main-header button{
  display: block;
  min-width: 150px;
  color: #fff;
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 10px 5px;
}
.panel .main-header button a{
  color: #fff;
  text-decoration: none;
}
#form-new-employee{
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 30px;
  margin: 40px auto;
}
#form-new-employee input{
  margin: 5px 0;
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  color: #757575;
}
#form-new-employee button{
  border: 0;
  cursor: pointer;
  margin: 20px 0 30px 0;
  background-color: #00d5b1;
  color: #fff;
  border-bottom: 2px solid rgb(33, 117, 155);
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  padding: 12px 10px;
  text-transform: uppercase;
}
.errors{
  display: none;
}
.form-group--error .errors{
  display: block;
  color: red;
}
</style>