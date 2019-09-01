<template>
  <div class="main">
    <header>
      <h2>Leads2b - Teste</h2>
      <button type="button" class="btn-logout" @click="logoff">Sair</button>
    </header>
    <div>
      <h1>Employees</h1>
      <button type="button" class="btn-new" @click="addNew">Add new</button>
    </div>

    <ul id="example-1">
      <li v-for="item in employees" v-bind:key='item.id'>
        <!-- <span>{{ item.id }}</span> -->
        <span>{{ item.name }}</span>
        <span>{{ item.email }}</span>
        <span>{{ item.salary }}</span>
        <span>{{ item.admission }}</span>

        <button type="button" class="btn-remove" @click="removeItem(item.id)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  mounted() {
    this.setEmployees();
  },

  methods: {
    ...mapActions("Employee", ["setEmployees", "removeEmployee"]),
    ...mapActions("Auth", ["logout"]),
    addNew: function(){
      this.$router.push("/create"); //navegação por vue-route in js
    },
    removeItem: function(param){
      this.removeEmployee({id: param});
    },
    logoff: function(){
      this.logout().then(() => {
        this.$router.push("/login");
      });
    }
  },

  computed: {
    ...mapState("Employee", ["employees"])
  }
};
</script>