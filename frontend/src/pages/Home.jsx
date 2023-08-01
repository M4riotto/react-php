import React from 'react';
import MiniDrawer from '../components/MiniDrawer';

const Home = () => {
  const user = localStorage.getItem('nome')
  return (
    <>
      <MiniDrawer>
        <h1>Seja Bem-vindo: {user}</h1>
      </MiniDrawer>
    </>
  );
};

export default Home;
