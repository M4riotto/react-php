import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';

import { API_SERVER } from '../config'

// import useAuthStore from '../store/useAuthStore';
// import Logout from '../components/Logout';
// import { useNavigate } from 'react-router-dom';

const Cards = () => {
  // const navigate = useNavigate();

  const [eventos, setEventos] = useState([]);

  const LoadCard = () => {
    axios
      .post(`${API_SERVER}/selectCurso.php`)
      .then((response) => {
        console.log('Resposta da API:', response.data);
        setEventos(response.data.data); // Ajuste para atribuir response.data ao estado 'eventos'
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  };


  useEffect(() => {
    LoadCard()
  }, []) // [] = executa apenas uma vez quando o componente é montados

  return (
    <>
      {eventos.map((evento) => (
        <div key={eventos.id}>

          <h1>{evento.titulo}</h1>
          <h2>{evento.descricão}</h2>
          <h2>{evento.nome}</h2>

        </div>
      ))}
    </>

  );

};

export default Cards;
