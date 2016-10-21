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
  mLabUri: "mongodb://admin:hunter2@ds057816.mlab.com:57816/vidmeo",
  vimeo: {
    clientID: "9a8b8dc88f638a3e6b511a12ec52870f4b14a09c",
    clientSecret: "aoVM2Chp6SjpIrQxZA8c6HTyZ46LhCzRSoejLO7xpTcj5gYiTQpOVVfGsdVRAhYI2NnOCbmB08n0IxWedYSBOKjG/tGJgdSeEFLNjMWT8LTbMnMK43gkU6Zr9RwSxV+z",
    authorizeURL: "https://api.vimeo.com/oauth/authorize",
    accessTokenURL: "https://api.vimeo.com/oauth/access_token",
    callbackURL: "http://localhost:4000/welcome",
    access_token: "1fc5456280cc99874ca4ed7ba0fdc21b"
    // access_token: "ac540bb21165263a96039149d2259489"
  },
  vidmeoLogin: {
    clientID: "e943d9ee11df699130e243e91faf35a507dc595e",
    clientSecret: "xavT4wrR0D+TsLfq811jw0I2G8dWbctawXgGkLIlgfpkxT6b8cCQ3/Wbnt5GUytHB4bqsPgN7ZiH6asHdj4RVtciU+fb+NtT4mqWkswMmrN69Zp5yOgIeXNnWqgFX9kw",
    authorizeURL: "https://api.vimeo.com/oauth/authorize",
    accessTokenURL: "https://api.vimeo.com/oauth/access_token",
    callbackURL: "http://localhost:4000/welcome",
    access_token: "9bd31eab9fc27ece6fb1331cada41585"
    // access_token: "ac540bb21165263a96039149d2259489"
  }
};
