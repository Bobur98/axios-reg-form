import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
export const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signout = async () => {
    await logout();
    navigate('/linkpage');
  };
  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link>Go to the Editor page</Link>
      <br />
      <Link>Go to the Admin page</Link>
      <br />
      <Link>Go to the Lounge page</Link>
      <br />
      <Link>Go to the link page</Link>
      <div className="flexGrow">
        <button onClick={signout}>Sign Out</button>
      </div>
    </section>
  );
};
