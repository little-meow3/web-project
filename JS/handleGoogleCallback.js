async function handleGoogleCallback() {
  try {
    const response = await supertokensThirdParty.signInAndUp();

    if (response.status === "OK") {
      console.log(response.user)
      console.log(response.user + 'привет')
      if (response.createdNewUser) {

      } else {

      }
      window.location.assign("/login");
    } else {
      window.alert("No email provided by social login. Please use another form of login");
      window.location.assign("/"); // redirect back to login page
    }
  } catch (err) {
    if (err.isSuperTokensGeneralError === true) {
      window.alert(err.message);
    } else {
      // window.alert(err.message);
    }
  }
}

handleGoogleCallback();
