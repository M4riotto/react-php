import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';

import { API_SERVER } from '../config'

import useAuthStore from '../store/useAuthStore';
import Logout from '../components/Logout';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const navigate = useNavigate();

    const LoadCard = () => {
        axios
          .post(`${API_SERVER}/curso.php`)
          .then((result) => {
            console.log('Cadastro realizado com sucesso!', result.data);
          })
          .catch((error) => {
            console.error('Erro ao realizar o cadastro:', error);
          });
      };
    
    return (
        <>

        </>
    );
};

export default Cards;
