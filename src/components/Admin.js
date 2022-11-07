import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from './Users';
export const Admin = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <br />
      <Users />
      <br />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
