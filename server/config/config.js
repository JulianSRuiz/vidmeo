module.exports = {
  mySecrets: {
    secret: "juliansruizisthewiz"
  },
  facebook: {
    clientID: "1855771994657595",
    secret: "32b2178c4b75e42a6590cead6c482026",
    cbURL: "http://localhost:4000/auth/facebook/callback"
  },
  doNotUse: {
    clientID: "652260793725-jtid55nhh2b12riuc02epjhrvdr0a5ps.apps.googleusercontent.com",
    secret: "8AuBSxEQsq0X1IDYkdTAJkT3W",
    cbURL: "http://localhost:4000/auth/google/callback"
  },
  google: {
    "client_id":"1003770422313-869hrho6gfbjf25t8qbakktca6dt7ctk.apps.googleusercontent.com",
    "project_id":"vidmeo-clone",
    "auth_uri":"https://accounts.google.com/o/oauth2/auth",
    "token_uri":"https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
    "client_secret":"QF_Ort4uQLRhW16t-LBGg4al",
    "redirect_uris":"http://localhost:4000/auth/google/callback",
    "javascript_origins":["http://localhost:4000"]
  },
  mLabUri: "mongodb://admin:hunter2@ds057816.mlab.com:57816/vidmeo"

  // accessPoints: {
    //  web: {
    //    client_id:"652260793725-jtid55nhh2b12riuc02epjhrvdr0a5ps.apps.googleusercontent.com",
    //    project_id:"vidmeo-146215",
    //    auth_uri:"https://accounts.google.com/o/oauth2/auth",
    //    token_uri:"https://accounts.google.com/o/oauth2/token",
    //    auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
    //    client_secret:"8AuBSxEQsq0X1IDYkTAJkT3W",
    //    redirect_uris:["http://localhost:4000/welcome"],
    //    javascript_origins:["http://localhost:4000"],
    //    cbURL: "http://localhost:4000/auth/google/callback"
    //  }
   //}

    // const freebaseKey = "AIzaSyAZT7l7jUtemn577dAZWhNAf-SD499klFY";

};
