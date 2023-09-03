<template>
  <div>
    <h1>Github App</h1>
    <GithubTokenForm />
    <User />
    <Repos />
  </div>
</template>

<script>
import GithubTokenForm from './components/GithubTokenForm.vue';
import Repos from './components/Repos.vue';
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    GithubTokenForm,
    Repos,
    User
  }
}
</script>
