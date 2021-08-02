import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
  domain="dev-wsv0j42l.us.auth0.com"
  clientId="aEhHve7Uv2EsJvX4FYCYJokrmexGrhqP"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);