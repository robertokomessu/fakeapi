<template>
 <v-layout>
    <v-flex xs12 sm6 offset-sm3 class="register">
      <v-card>
        <v-card-title primary-title>
            <form>
              <v-text-field
                v-model="username"
                :error-messages="usernameErrors"
                label="Username"
                required
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field 
                name="password" 
                label="Password" 
                type="password" 
                v-model="password" 
                :error-messages="passwordErrors"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              />
            </form>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="submit">Register</v-btn>
          <v-btn flat to="/login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
 </v-layout>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  mixins: [validationMixin],
  validations: {
    username: { required },
    email: { required, email },
    password: { required }
  },
  data: () => ({
    username: "",
    email: "",
    password: ""
  }),
  computed: {
    ...mapState("Auth", ["inserting_user"]),
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Username is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    }
  },
  methods: {
    ...mapActions("Auth", ["insertUser"]),
    submit() {
      this.$v.$touch();

      if (
        this.usernameErrors.length === 0 &&
        this.emailErrors.length === 0 &&
        this.passwordErrors.length === 0
      ) {
        this.insertUser({
          username: this.username,
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push("/login");
        });
      }
    }
  }
};
</script>

<style scoped>
form {
  width: 100%;
}
.register {
  margin-top: 10%;
}
</style>