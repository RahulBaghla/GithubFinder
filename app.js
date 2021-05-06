const github = new Github();
const ui = new UI();
// Search Input
const searchUser = document.getElementById("searchUser");
const searchBtn = document.getElementById("btn");

searchBtn.addEventListener("click", (e) => {
  // Get input text
  const userText = searchUser.value;
  if (userText !== "") {
    // Make http call
    github
      .getUser(userText)
      .then((res) => {
        if (res.Profile.message === "Not Found") {
          // Show alert
          ui.showAlert("User Not Found", "alert alert-danger");
        } else {
          //Show Profile
          ui.showProfile(res.Profile);
          ui.showRepos(res.Repositories);
        }
      })
      .catch((err) => console.log(err));
  } else {
    // Clear Profile
  }
});
