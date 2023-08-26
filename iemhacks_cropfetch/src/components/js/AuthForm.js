
import React from 'react';
import '../css/authStyles.css';

const AuthForm = ({ title, children }) => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthForm;
