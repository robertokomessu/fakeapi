<template>
  <div class="panel">
    <header class="main-header">
      <div class="container">
        <figure>
          <img src="/static/logo.png" class="login--logo" />
        </figure>
        <div class="panel-actions">
          <button type="button" class="btn bt-panel-list" @click="addNew">New employee</button>
          <button type="button" class="btn-logout" @click="logoff">Logout
          </button>
        </div>
      </div>
    </header>
    <main class="panel-employee">
      <div class="container">
        <div class="panel-employee--list">
          <h2>Employees</h2>
        </div>
        <div class="employee-list-container">
          <table id="employee-list">
            <thead>
              <tr>
                <th>First name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Admission</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody v-if="employees.length > 0">
              <tr v-for="item in employees" v-bind:key="item.id">
                <td data-label="Name">
                  <span>{{ item.name }}</span>
                </td>
                <td data-label="E-mail">
                  <span>{{ item.email }}</span>
                </td>
                <td data-label="Salary">
                  <span>{{ item.salary }}</span>
                </td>
                <td data-label="Admission">
                  <span>{{ item.admission }}</span>
                </td>
                <td data-label="Actions">
                  <button type="button" class="btn bt-remove" @click="removeItem(item.id)">delete</button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="5">No data available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.setEmployees();
  },

  methods: {
    ...mapActions("Employee", ["setEmployees", "removeEmployee"]),
    ...mapActions("Login", ["logout"]),
    addNew: function() {
      this.$router.push("/create"); //navegação por vue-route in js
    },
    removeItem: function(param) {
      this.removeEmployee({ id: param });
    },
    logoff: function() {
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
.employee-list-container{
  margin-right: -20px;
  overflow: scroll;
}
@media screen and (min-width: 768px){
  .employee-list-container{
    overflow: auto;
    margin-right: 0;
  }
}
#employee-list {
  min-width: 1000px;
  width: 100%;
  border-spacing: 0;
  border: 1px solid #ccc;
}
#employee-list tr th{
  text-align: center;
  padding: 5px;
  background: #777;
  color: #fff;
  border-right: 2px solid #ccc;
  font-size: 14px;
  text-transform: uppercase;
}
#employee-list tr th:last-child{
  border: none;    
}
.panel-employee {
  max-width: 100%;
  overflow: hidden;
}
.panel-employee .container{
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
#employee-list tr td{
  padding: 10px 5px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 13px;
}
#employee-list .bt-remove{
  border: 0;
  cursor: pointer;
  margin: 0 10px;
  background-color: #f94c4c;
  border-bottom: 2px solid #f94c4c;
  color: #fff;
  border-radius: 5px;
  font-size: 13px;
  width: 80%;
  padding: 8px 5px;
  text-transform: uppercase;
  transition: all 0.2s linear;
}
#employee-list .bt-remove:hover{
  background-color: #f03c3c;
  border-bottom: 2px solid #004c4c;
}
</style>