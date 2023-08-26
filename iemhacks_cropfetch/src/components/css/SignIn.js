// components/SignIn.js
import React from 'react';
import AuthForm from './AuthForm';

const SignIn = () => {
  return (
    <AuthForm title="Sign In">
      {/* SignIn form inputs */}
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
    </AuthForm>
  );
};

export default SignIn;