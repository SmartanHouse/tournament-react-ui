export const msalConfig = {
  auth: {
    clientId: "cd66b22b-4062-46d3-ac86-28ea3f8e3e43",
    authority: "https://login.microsoftonline.com/4338217c-3f51-49a5-838c-2b094bdef8ea/",
    redirectUri: "https://tournamentwebdev.z13.web.core.windows.net",
    postLogoutRedirectUri: "https://tournamentwebdev.z13.web.core.windows.net"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
