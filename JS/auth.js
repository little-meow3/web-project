async function googleSignInClicked() {
  try {
    const authUrl = await supertokensThirdParty.getAuthorisationURLWithQueryParamsAndSetState({
      providerId: "google",

      authorisationURL: "https://little-meow3-web-project.onrender.com/user/callback/google",
    });

    window.location.assign(authUrl);
  } catch (err) {
    if (err.isSuperTokensGeneralError === true) {
      window.alert(err.message);
    } else {
      window.alert(err.message);
    }
  }
}

let logoutBtn = document.querySelector(".logoutButton");

// async function doesSessionExist() {
//   const loggedInElement = document.getElementById("auth");
//   const authElement = document.createElement("i");
//   let qwerty = await supertokensSession.doesSessionExist();
//   console.log("User account is " + qwerty);
//
// }
// doesSessionExist();

