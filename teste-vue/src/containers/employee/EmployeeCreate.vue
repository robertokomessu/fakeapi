<template>
  <div class="main">
    <header>
      <h2>Leads2b - Teste</h2>
      <button type="button" class="btn-logout" @click="logoff">Sair</button>
    </header>
    <div>
      <h1>Employees</h1>
    </div>

    <router-link
      to="/"
    ><button type="button">voltar para a lista</button></router-link>

    <form>
      <input type="text" v-model="name" name="name" placeholder="name" value=""/>
      <input type="text" v-model="email" name="email" placeholder="email" value=""/>
      <input type="text" v-model="salary" name="salary" placeholder="salary" />
      <input type="text" v-model="admission" name="admission" placeholder="admission" />

      <button type="button" v-on:click="create">criar</button>
    </form>
  </div>
</template>

<script>
// import { validationMixin } from "vuelidate";
// import { required, maxLength, email } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  // mixins: [validationMixin],
  // validations: {
  //   name: { required, maxLength: maxLength(40) },
  //   role: { required },
  //   email: { required, email },
  //   salary: { required }
  // },
  data: () => ({
    name: "",
    email: "",
    salary: "",
    admission: ""
  }),
  computed: {
    // ...mapState("Employee", ["inserting_employee"])
  },
  methods: {
    ...mapActions("Employee", ["insertEmployee"]),
    ...mapActions("Auth", ["logout"]),
    create: function(event){
      if (
        this.name.length > 0 &&
        this.email.length > 0 &&
        this.salary.length > 0 &&
        this.admission.length > 0
      ) {
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
form {
  padding: 0 24px;
}
</style>