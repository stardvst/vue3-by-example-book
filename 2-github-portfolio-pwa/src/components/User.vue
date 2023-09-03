<template>
  <div>
    <h1>User Info</h1>
    <ul>
      <li>
        <img :src="userData.avatar_url" id="avatar" alt="user avatar" />
      </li>
      <li>username: {{ userData.login }}</li>
      <li>followers: {{ userData.followers }}</li>
      <li>plan: {{ userData.plan && userData.plan.name }}</li>
    </ul>
  </div>
</template>

<script>
import { oktokitMixin } from '../mixins/oktokitMixin'

export default {
  name: "User",
  data() {
    return {
      userData: {},
    };
  },
  mixins: [oktokitMixin],
  async mounted() {
    const octokit = this.createOktokitClient();
    const { data: userData } = await octokit.request("/user");
    console.log(userData);
    this.userData = userData;
  },
  methods: {
    saveToken() { },
  },
};
</script>


<style scoped>
#avatar {
  width: 50px;
  height: 50px;
}
</style>
