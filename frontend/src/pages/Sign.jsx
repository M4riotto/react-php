import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Sign = () => {
    // const navigate = useNavigate();
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
      .then((result) => {
        console.log(`Cadastro realizado com sucesso! ${formData.senha}`, result.data);
        // navigate('https://www.google.com.br')
      })
      .catch((error) => {
        console.error('Erro ao realizar o cadastro:', error);
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>CPF:</label>
        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Sign;
