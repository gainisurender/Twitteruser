<template>
  <div>
    <Navbar />
    <form @submit.prevent="register">
      <h1>Register</h1>
      <input v-model="full_name" placeholder="Fullname" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'registration',
  data() {
    return {
      full_name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      console.log(this.full_name)
      console.log(this.email)
      console.log(this.password)
      await this.$store.dispatch('registerUser', {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
      })
      await this.$router.push('/')
    },
  },
}
</script>

<style scoped>
/* erro class styling */
.error {
  color: #ff0000;
  font-weight: normal;
}
.form-validate input {
  margin-top: 10px;
}
button {
  display: block;
  margin-top: 10px;
}
</style>