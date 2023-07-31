import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = () => {
    const data = {
        nome: 'Exemplo',
        email: 'exemplo@example.com',
    };

    axios.post('http://localhost/projeto_curso/api/cadastro.php', data)
      .then(result => {
        console.log('Cadastro realizado com sucesso!', result.data);
        setMensagem(`Cadastro realizado com sucesso! ${data.nome}`);
      })
      .catch(error => {
        console.error('Erro ao realizar o cadastro:', error);
        setMensagem('Erro ao realizar o cadastro.');
      });
  };

  return (
    <div>
      <h1>Exemplo de Requisição com React</h1>
      <button onClick={handleCadastro}>Fazer Cadastro</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App;
