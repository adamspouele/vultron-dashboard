<template>
  <div class="hello">
    <h1>Login</h1>
    <div class="uk-container uk-container-xsmall">
      <form>
          <fieldset class="uk-fieldset">

              <legend class="uk-legend">Type Credentials please.</legend>

              <div class="uk-margin">
                  <input class="uk-input" type="email" placeholder="username">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="password" placeholder="password">
              </div>

              <button class="uk-button uk-button-primary uk-button-large">Connect</button>
              <router-link to="/">
                <button class="uk-button uk-button-secondary uk-button-large">Back</button>
              </router-link>

          </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
