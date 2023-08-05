import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';


import { API_SERVER } from '../config'

function SignUp() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    senha: '',
    empresa: '',
    telefone: '',
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCadastro = () => {
    axios
      .post(`${API_SERVER}/cadastro.php`, formData)
      .then((result) => {
        setMensagem(`Cadastro realizado com sucesso! ${formData.nome}`);
      })
      .catch((error) => {
        console.error('Erro ao realizar o cadastro:', error);
        setMensagem('Erro ao realizar o cadastro.');
      });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Cadastro
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome"
                variant="outlined"
                fullWidth
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sobrenome"
                variant="outlined"
                fullWidth
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CPF"
                variant="outlined"
                fullWidth
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12}>
              <TextField
                label="Empresa"
                variant="outlined"
                fullWidth
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Telefone"
                variant="outlined"
                fullWidth
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={handleCadastro}>
              Fazer Cadastro
            </Button>
          </Box>
        </form>
        {mensagem && (
          <Typography variant="body1" color="success" align="center" mt={2}>
            {mensagem}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default SignUp;
