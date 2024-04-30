import { Card, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthService } from '../../api/users';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/golden.jpg';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Dashboard = () => {
    const { id } = useParams();
    const [userNodos, setUserNodos] = useState();
    const navigate = useNavigate();
    const [selectedIcon, setSelectedIcon] = useState(false);
    useEffect(() => {
        const getAllUserNodos = async () => {
            console.log(id);
            const response = await axios.get(`${AuthService.baseUrl}${AuthService.endpoints.getNodos}${id}`);
            if (!response.data || !response.data.nodos) {
                throw new Error('No se encontró el usuario');
            }
            setUserNodos(response.data.nodos);
            console.log(response.data.nodos);
        }
        getAllUserNodos();
    }, [id]);
    return (
        <Box className="flex flex-row">
            <Container disableGutters className="bg-blue-200 flex flex-col mt-10 justify-center rounded-lg items-center max-w-3x1 pl-5 pr-5">
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    className='bg-white w-full rounded-lg mt-10 '>
                    <Grid item>
                        <Typography variant="h3">Nodos</Typography>
                    </Grid>
                </Box>
                <Grid container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    margin={5}>
                    {userNodos && userNodos.map((nodo) => (
                        <Grid item key={nodo.idnodo}
                            className='flex flex-row '>
                            <Card className="mt-4 mr-4 max-h-min max-w-xl sm:max-w-80 p-4 rounded-xl">
                                <CardMedia className="rounded-xl"
                                    component="img"
                                    style={{ height: 180 }}
                                    image={logo}
                                />
                                <Box
                                    className="flex flex-row justify-between align-middle mt-3">
                                    <Button
                                        variant="contained"
                                        onClick={() => navigate(`${nodo.idnodo}`)}
                                        sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                                    >
                                        Nodo {nodo.idnodo}
                                    </Button>
                                    <IconButton
                                        sx={{ mr: 'auto' }}
                                        onClick={() => setSelectedIcon(nodo.idnodo)}
                                    >
                                        {selectedIcon === nodo.idnodo ? <FavoriteIcon color="error" /> : <FavoriteBorder />}
                                    </IconButton>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
export default Dashboard;