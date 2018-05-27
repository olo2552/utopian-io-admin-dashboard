import sc2 from "sc2-sdk";
// TODO: refactor into .env, check why it doesn't work

export default sc2.Initialize({
  app: "equal",
  callbackURL: "http://localhost:3000/redirect/",
  scope: ["login"]
});
