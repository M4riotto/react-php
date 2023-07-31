import React from 'react';
import { Button } from '@mui/material';

const Logout = () => {
  const handleLogout = () => {
    // Remova todos os itens do Local Storage
    localStorage.clear();
    // Redireciona para a página de login ou outra página, se necessário
    // window.location.href = 'URL_DA_PAGINA_DE_LOGIN';
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Sair
    </Button>
  );
};

export default Logout;
