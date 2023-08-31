<template>
  <div v-if="issues.length > 0">
    <button>
      {{ showIssues ? 'Hide' : 'Show' }} issues
    </button>
    <div v-if="showIssues">
      <div v-for="i of issues" :key="i.id">
        <h3>{{ i.title }}</h3>
        <a :href="i.url">Go to issue</a>
        <IssueComments :owner="owner" :repo="repo" :issueNumber="i.number" />
      </div>
    </div>
  </div>
</template>

<script>
import { oktokitMixin } from '../../mixins/oktokitMixin'
import IssueComments from './issue/Comments.vue'

export default {
  name: 'RepoIssues',
  components: {
    IssueComments
  },
  props: {
    owner: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      issues: [],
      showIssues: false
    }
  },
  mixins: [oktokitMixin],
  methods: {
    async getRepoIssues(owner, repo) {
      const oktokit = this.createOktokitClient();
      const { data: issues } = await oktokit.issues.listForRepo({ owner, repo });
      this.issues = issues;
    }
  },
  watch: {
    owner: {
      handler(val) {
        getRepoIssues(val, this.repo);
      }
    },
    repo: {
      handler(val) {
        getIssueComments(this.owner, val);
      }
    }
  },
  created() {
    this.getRepoIssues(this.owner, this.repo)
  }
}
</script>
