import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';
import MiniDrawer from '../components/MiniDrawer';


import { API_SERVER } from '../config'

function Cursos() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    aula: '',
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
    // Obter o ID da pessoa logada do Local Storage
    const idPessoaLogada = localStorage.getItem('id');

    // Incluir o ID no corpo do formulário
    const formDataComId = {
      ...formData,
      idPessoaLogada,
    };

    axios
      .post(`${API_SERVER}/cadastroCurso.php`, formDataComId)
      .then((result) => {
        setMensagem(`Cadastro realizado com sucesso! Título: ${formData.titulo}`);
      })
      .catch((error) => {
        console.error('Erro ao realizar o cadastro:', error);
        setMensagem('Erro ao realizar o cadastro.');
      });
  };

  return (
    <>
      <MiniDrawer>
        <Container maxWidth="sm">
          <Box mt={5}>
            <Typography variant="h4" align="center" gutterBottom>
              Cadastro de Aula
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Título da Aula"
                    variant="outlined"
                    fullWidth
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Descrição da Aula"
                    variant="outlined"
                    fullWidth
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Aula"
                    variant="outlined"
                    fullWidth
                    name="aula"
                    value={formData.aula}
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
      </MiniDrawer>
    </>
  );
}

export default Cursos;
