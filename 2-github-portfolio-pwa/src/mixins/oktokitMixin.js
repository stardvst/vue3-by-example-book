import { Octokit } from "https://esm.sh/@octokit/rest";

export const oktokitMixin = {
  methods: {
    createOktokitClient() {
      return new Octokit({
        auth: localStorage.getItem('github-token')
      })
    }
  }
}
