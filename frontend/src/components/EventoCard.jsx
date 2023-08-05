import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const EventoCard = ({ evento }) => {
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
};

export default EventoCard;
