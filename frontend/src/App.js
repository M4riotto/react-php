import React, { useState } from 'react';
import axios from 'axios';

function App() {
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
    axios.post('http://localhost/projeto_curso/api/cadastro.php', formData)
      .then(result => {
        console.log('Cadastro realizado com sucesso!', result.data);
        setMensagem(`Cadastro realizado com sucesso! ${formData.nome}`);
      })
      .catch(error => {
        console.error('Erro ao realizar o cadastro:', error);
        setMensagem('Erro ao realizar o cadastro.');
      });
  };

  return (
    <div>
      <h1>Exemplo de Formulário e Requisição com React</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <br />
        <label>
          Sobrenome:
          <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          CPF:
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
        </label>
        <br />
        <label>
          Empresa:
          <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleCadastro}>Fazer Cadastro</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App;
