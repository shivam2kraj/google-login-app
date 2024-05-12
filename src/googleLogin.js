// GoogleLogin.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginComponent = ({ onSuccess, onFailure }) => {
  const clientId = 'YOUR_GOOGLE_CLIENT_ID';

  const responseGoogle = (response) => {
    if (response.profileObj) {
      onSuccess(response.profileObj);
    } else {
      onFailure(response.error);
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginComponent;
