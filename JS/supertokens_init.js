supertokens.init({
  appInfo: {
    apiDomain: "https://little-meow3-web-project.onrender.com",
    apiBasePath: "api/auth",
    appName: "little-meow3",
  },
  recipeList: [
    supertokensSession.init(),
    supertokensThirdParty.init(),
  ],
});