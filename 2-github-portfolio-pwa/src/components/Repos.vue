<template>
  <div>
    <h1>Repos</h1>
    <div v-for="r of repos" :key="r.id">
      <h2>{{ r.owner.login }}/{{ r.name }}</h2>
      <Issues :owner="r.owner.login" :repo="r.name" />
    </div>
  </div>
</template>

<script>
import Issues from './repo/Issues.vue'
import { oktokitMixin } from '../mixins/oktokitMixin'

export default {
  name: 'Repos',
  components: {
    Issues
  },
  data() {
    return {
      repos: []
    }
  },
  mixins: [oktokitMixin],
  async mounted() {
    const oktokit = this.createOktokitClient();
    const { data: repos } = await oktokit.request('/user/repos');
    this.repos = repos;

  }
}
</script>
