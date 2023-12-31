import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EventoCardId from '../components/EventoCardId';
import MiniDrawer from '../components/MiniDrawer';

import { API_SERVER } from '../config';

const Cards = () => {
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
      <MiniDrawer >

        {eventos.map((evento) => (
          <EventoCardId key={evento.id} evento={evento} />
        ))}

      </MiniDrawer >
    </>
  );
};

export default Cards;
