import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EventoCard from '../components/EventoCard';

import MiniDrawer from '../components/MiniDrawer';


import { API_SERVER } from '../config';

const Home = () => {
  const user = localStorage.getItem('nome')


  const [eventos, setEventos] = useState([]);

  const LoadCard = () => {
    axios
      .post(`${API_SERVER}/selectCurso.php`)
      .then((response) => {
        setEventos(response.data.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  };

  useEffect(() => {
    LoadCard();
  }, []);

  return (
    <>
      <MiniDrawer>
        <h1>Seja Bem-vindo: {user}</h1>
        {eventos.map((evento) => (
          <EventoCard key={evento.id} evento={evento} />
        ))}
      </MiniDrawer>
    </>
  );
};

export default Home;
