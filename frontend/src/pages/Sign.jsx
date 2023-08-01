import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';

import useAuthStore from '../store/useAuthStore';
import Logout from '../components/Logout';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cpf: '',
    senha: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    axios
      .post('http://localhost/projeto_curso/api/login.php', formData)
      .then((response) => {
        if (response.data.message === 'Usuario Logado!') {
          const { token, user } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('nome', user.nome);
          localStorage.setItem('sobrenome', user.sobrenome);
          localStorage.setItem('id', user.id);

          // Chame as funções do useAuthStore para armazenar as informações no estado global
          const { login } = useAuthStore.getState();
          login(token, user.nome, user.sobrenome, user.id);
          
          navigate('/home');
        } else {
          console.error('Login ou senha inválidos.');
        }

        console.log(`Resposta do servidor:`, response.data);
      })
      .catch((error) => {
        console.error('Erro ao realizar o login:', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="CPF"
                variant="outlined"
                fullWidth
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Senha"
                variant="outlined"
                fullWidth
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
            <Logout />
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Sign;
