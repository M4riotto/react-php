import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EventoCard from '../components/EventoCard';
import MiniDrawer from '../components/MiniDrawer';

import { API_SERVER } from '../config';

const Cards = () => {
  const [eventos, setEventos] = useState([]);

  const LoadCard = () => {
    axios
      .post(`${API_SERVER}/selectCurso.php`)
      .then((response) => {
        console.log('Resposta da API:', response.data);
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
      <MiniDrawer >

        {eventos.map((evento) => (
          <EventoCard key={evento.id} evento={evento} />
        ))}

      </MiniDrawer >
    </>
  );
};

export default Cards;
