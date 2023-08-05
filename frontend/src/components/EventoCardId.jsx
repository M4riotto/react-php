import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const EventoCardId = ({ evento }) => {
  // Verificar se o ID do criador do evento é compatível com o ID armazenado no localStorage
  const localStorageCreatorId = localStorage.getItem('id'); // Substitua 'creatorId' pelo nome correto usado no localStorage
  const isCreatorIdMatch = localStorageCreatorId === evento.id_criador;

  // Se os IDs forem compatíveis, exibir o evento
  if (isCreatorIdMatch) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1">
            {evento.titulo}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            {evento.descricao}
          </Typography>
          <Box
            width="100%"
            height="0"
            paddingTop="56.25%" // 16:9 aspect ratio for responsive video
            position="relative"
          >
            <iframe
              src={evento.aula}
              title="Vídeo do YouTube"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
              allowFullScreen
            />
          </Box>
          <Typography variant="subtitle2" component="h2">
            {evento.nome}
          </Typography>
        </CardContent>
      </Card>
    );
  }else if(eventos.titulo === null ){
    return <h1>Nnenhum evento cadastrado</h1>
  } else {
    // Se os IDs não forem compatíveis, retornar null (não exibir o evento)
    return null;
  }
};

export default EventoCardId;
