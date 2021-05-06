class Github {
  constructor() {
    this.client_id = "e56e2f4484d57bc82482";
    this.client_secret = "ca0574d85ea0cd138f382969bb8c2ced9e69995b";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );
    // const profileResponse = await fetch(
    //   `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    // );

    // const reposResponse = await fetch(
    //   `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    // );

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();
    return {
      Profile: profileData,
      Repositories: reposData,
    };
  }
}
