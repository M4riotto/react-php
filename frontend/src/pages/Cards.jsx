import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';

import { API_SERVER } from '../config'

// import useAuthStore from '../store/useAuthStore';
// import Logout from '../components/Logout';
// import { useNavigate } from 'react-router-dom';

const Cards = () => {
    // const navigate = useNavigate();

    const [eventos, setEventos] = useState(false);

    const LoadCard = () => {
        axios
          .post(`${API_SERVER}/selectCurso.php`)
          .then((result) => {
            console.log('Cadastro realizado com sucesso!', result.data);
            setEventos(result.data); // Ajuste para atribuir result.data ao estado 'eventos'
          })
          .catch((error) => {
            console.error('Erro ao realizar o cadastro:', error);
          });
      };

      useEffect(() => {
        LoadCard()
    }, []) // [] = executa apenas uma vez quando o componente é montados
    
    return (
        <>
            {eventos.map((evento) => (
                <h1 key={evento.id}>{evento.titulo}</h1>
            ))}
        </>
    );
    
};

export default Cards;
