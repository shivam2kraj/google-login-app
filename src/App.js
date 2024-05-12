// App.js
import React, { useState, useEffect } from 'react';
import GoogleLoginComponent from './googleLogin';
import Profile from './profile';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isInInstagramApp = userAgent.includes('instagram');
    
    if (isInInstagramApp) {
      const handleLinkClick = (event) => {
        const isExternalLink = event.target.tagName === 'A' && event.target.origin !== window.location.origin;
        if (isExternalLink) {
          event.preventDefault();
          window.open(event.target.href, '_system');
        }
      };
      
      document.body.addEventListener('click', handleLinkClick);
      
      return () => {
        document.body.removeEventListener('click', handleLinkClick);
      };
    }
  }, []);

  const handleLoginSuccess = (profile) => {
    setUser(profile);
    setError(null);
  };

  const handleLoginFailure = (error) => {
    setError(error);
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <div>
          <h1>Login</h1>
          <GoogleLoginComponent
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
          />
          {error && <p>Error: {error}</p>}
        </div>
      ) : (
        <Profile user={user} />
      )}
    </div>
  );
};

export default App;
