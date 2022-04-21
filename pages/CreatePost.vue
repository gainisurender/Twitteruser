<template>
  <div>
    <UserHeader />
    <!-- <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
    <title>Posts Create Page</title>
    <!-- <link rel="stylesheet" href="./login_form_2.css" /> -->
    <!-- </head> -->
    <body>
      <div class="content">
        <div class="flex-div">
          <div class="name-content">
            <h1 class="logo">CreatePost</h1>
          </div>
          <form @submit.prevent="CreatePost">
            <input
              v-model="formData.title"
              type="text"
              placeholder="Give Title"
              required
            />

            <button class="login">CreatePost</button>
            <!-- <a href="#">Forgot iscompleted ?</a> -->
            <hr />
            <!-- <button class="create-account">Create New Account</button> -->
          </form>
        </div>
      </div>
    </body>
    <!-- </html> -->
  </div>
</template>

<script>
// import axios from 'axios'
// import UserHeader from "~/components/UserHeader.vue";
export default {
  name: 'createtpost',
  // components: { UserHeader },
  data() {
    return {
      title: '',
      formData: {
        title: this.title,
      },
    }
  },
  methods: {
    async CreatePost() {
      console.log(this.formData.title)
      await this.$store.dispatch('CreatePosts', this.formData)
      this.$router.push({ path: '/UserHome' })
    },
  },
  head() {
    return {
      title: 'Create Todo Page',
      meta: [
        {
          hid: 'create todo',
          name: 'create todo page',
          content: 'user can create here',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>