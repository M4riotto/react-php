
import { Card, CardContent, Typography } from '@mui/material';

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
                <Typography variant="subtitle2" component="h2">
                    {evento.nome}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EventoCard