// .eslintrc.js
module.exports = {
    // Extend Create React App's default configuration
    extends: 'react-app',
    rules: {
      // Add custom rules here if needed
    },
    globals: {
      // Declare global variables provided by the Canvas environment
      __app_id: 'readonly',
      __firebase_config: 'readonly',
      __initial_auth_token: 'readonly',
    },
  };
  