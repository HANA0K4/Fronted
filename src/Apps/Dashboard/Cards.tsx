import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import logo from '../../assets/golden.jpg';
import { useParams } from 'react-router-dom';

export interface DepositsProps {
    id: number;
    userNodos: { idnodo: number; }[];
}

export default function AreaDeposits({ userNodos }: DepositsProps) {
    const { id } = useParams();

    return (
        <>
            {userNodos.map((nodo, index) => (
                    <Link to={`${id}`} style={{ textDecoration: 'none' }}>
                        <Card className="mt-4 mr-4 max-h-min max-w-xl sm:max-w-80 p-4 rounded-xl">
                            <CardActionArea>
                                <CardMedia className="rounded-xl"
                                    component="img"
                                    style={{ height: 180 }}
                                    image={logo}
                                />
                                <Typography key={index} variant="body2" align='center'>
                                    Nodo: {nodo.idnodo}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Link>
                ))}
        </>
    );
}
