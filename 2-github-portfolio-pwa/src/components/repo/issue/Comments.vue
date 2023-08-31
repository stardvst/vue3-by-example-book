<template>
  <div>
    <div v-if="comments.length > 0">
      <h4>Comments</h4>
      <div v-for="c of comments" :key="c.id">
        {{ c.user && c.user.login }} - {{ c.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueComments',
  props: {
    owner: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    },
    issueNumber: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comments: []
    }
  },
  mixins: [oktokitMixin],
  methods: {
    async getIssueComments(owner, repo, issueNumber) {
      if(typeof owner !== 'string' || typeof repo !== 'string' || typeof issueNumber !== 'number') {
        return
      }

      const oktokit = this.createOktokitClient();
      const { data: comments } = await oktokit.issues.listComments({ owner, repo, issue_number: issueNumber });
      this.comments = comments;
    }
  },
  watch: {
    owner: {
      immediate: true,
      handler(val) {
        getIssueComments(val, this.repo, this.issueNumber);
      }
    },
    repo: {
      immediate: true,
      handler(val) {
        getIssueComments(this.owner, val, this.issueNumber);
      }
    },
    issueNumber: {
      immediate: true,
      handler(val) {
        getIssueComments(this.owner, this.repo, val);
      }
    },
  }
}
</script>
