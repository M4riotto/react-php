import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';

import Logout from '../components/Logout'

const Sign = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost/projeto_curso/api/login.php', formData)
      .then((response) => {
        if (response.data.message === 'Usuario Logado!') {
          const { token, user } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          // Redireciona para outra página, se necessário
          // window.location.href = 'URL_DA_PAGINA_DE_DESTINO';
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
        <form onSubmit={(e) => handleSubmit(e)}>
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
