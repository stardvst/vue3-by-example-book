<template>
  <form @submit.prevent="saveToken">
    <div>
      <label for="githubToken">Github Token</label>
      <br>
      <input type="text" name="githubToken" id="githubToken" v-model="githubToken">
    </div>
    <div>
      <input type="submit" value="Save token" name="saveToken" id="saveToken">
      <button @click="clearToken">Clear token</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'GithubTokenForm',
  data() {
    return {
      githubToken: ''
    }
  },
  beforeMount() {
    this.githubToken = localStorage.getItem('github-token')
  },
  methods: {
    saveToken() {
      localStorage.setItem('github-token', this.githubToken)
    },
    clearToken() {
      localStorage.removeItem('github-token')
    }
  }
}
</script>
