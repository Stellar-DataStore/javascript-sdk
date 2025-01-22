(function () {
    class OAuth2 {
      constructor(config) {
        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
        this.redirectUri = config.redirectUri;
        this.authorizationEndpoint = config.authorizationEndpoint;
        this.tokenEndpoint = config.tokenEndpoint;
        this.scopes = config.scopes || '';
      }
  
      /**
       * Initiates the OAuth 2.0 authorization flow by redirecting to the authorization endpoint.
       */
      redirectToAuth() {
        const authUrl = `${this.authorizationEndpoint}?response_type=code&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scopes)}`;
        window.location.href = authUrl;
      }
  
      /**
       * Extracts the authorization code from the URL query parameters.
       * @returns {string|null} The authorization code, or null if not found.
       */
      getAuthorizationCode() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('code');
      }
  
      /**
       * Exchanges the authorization code for an access token.
       * @param {string} code - The authorization code.
       * @returns {Promise<object>} A promise that resolves with the token response.
       */
      async exchangeCodeForToken(code) {
        const tokenRequestBody = {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: this.redirectUri,
          client_id: this.clientId,
          client_secret: this.clientSecret,
        };
  
        try {
          const response = await fetch(this.tokenEndpoint, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin': '*',
            },
            body: new URLSearchParams(tokenRequestBody).toString(),
          });
  
          if (!response.ok) {
            throw new Error(`Token exchange failed: ${response.statusText}`);
          }
  
          return await response.json();
        } catch (error) {
          console.error('Error exchanging code for token:', error);
          throw error;
        }
      }
    }
  
    // Expose OAuth2 globally
    window.OAuth2 = OAuth2;
  })();
  
