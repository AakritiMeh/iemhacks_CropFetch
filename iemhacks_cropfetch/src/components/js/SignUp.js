// components/SignUp.js
import React from 'react';
import AuthForm from './AuthForm';

const SignUp = () => {
  return (
    <AuthForm title="Sign Up">
      {/* SignUp form inputs */}
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="Phone Number" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <button>Sign Up</button>
    </AuthForm>
  );
};

export default SignUp;
