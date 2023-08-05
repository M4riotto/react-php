import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';

import { API_SERVER } from '../config'

// import useAuthStore from '../store/useAuthStore';
// import Logout from '../components/Logout';
// import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const LoadCard = () => {
      axios
        .post(`${API_SERVER}/selectCurso.php`)
        .then((response) => {
          console.log('Resposta da API:', response.data);
          setEventos(response.data);
          setLoading(false); // Define o estado 'loading' para falso após a resposta da API
        })
        .catch((error) => {
          console.error('Erro ao buscar dados da API:', error);
          setLoading(false); // Define o estado 'loading' para falso mesmo em caso de erro
        });
    };
  
    useEffect(() => {
      LoadCard();
    }, []);
  
    return (
      <>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          eventos.map((evento) => <h1 key={evento.id}>{evento.titulo}</h1>)
        )}
      </>
    );
  };
  
  export default Cards;
  