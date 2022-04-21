<template>
  <ul>
    <li><a href="#home">Twitter</a></li>
    <li style="float: right">
      <nuxt-link to="/">Home</nuxt-link>
    </li>

    <li style="float: right">
      <nuxt-link to="/CreatePost">CreatePost</nuxt-link>
    </li>

    <li style="float: right">
      <nuxt-link to="/Profile">Profile</nuxt-link>
    </li>

    <li style="float: right">
      <nuxt-link to="/">Logout</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserHeader',
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04aa6d;
}
</style>
