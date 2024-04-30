import Orders from "./Table";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import logo from "../../assets/golden.jpg";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import axios from "axios";
import { ManageNodosService } from "../../api/nodos";

const ViewAll = () => {
    const { id } = useParams();

    const [userNodoPeso, setUserNodos] = useState();
    const [userNodoUltrasonido, setUserNodosUltrasonido] = useState();
    useEffect(() => {
        const getAllUserNodos = async () => {
            console.log(id);
            const response = await axios.get(`${ManageNodosService.baseUrl}${ManageNodosService.endpoints.getPeso}/${id}`);
            const response2 = await axios.get(`${ManageNodosService.baseUrl}${ManageNodosService.endpoints.getUltrasonido}/${id}`);
            if (!response.data || !response.data) {
                throw new Error('No se encontró el usuario');
            }
            setUserNodos(response.data);
            setUserNodosUltrasonido(response2.data);
            console.log(response.data);
        }
        getAllUserNodos();
    }, [id]);

    // ...rest of the code
    return (
        <Box className="flex flex-row">
            <Box className="hidden sm:block">
                <IconButton onClick={() => window.history.back()}>
                    <ArrowBackIcon color="primary" style={{ fontSize: 40 }} />
                </IconButton>
            </Box>
            <Container className="bg-blue-200 flex flex-col justify-center rounded-lg items-center max-w-3x1">
                <Box className="bg-white flex flex-row justify-around items-center w-full rounded-lg mt-10 mb-10 ">
                    <Box className="flex flex-col items-center">
                        <Typography variant='h3' >Información</Typography>
                        <Typography variant='h5' >Nodo {id}</Typography>
                        <Typography variant='h5' >Datos almacenados</Typography>
                    </Box>
                    <Box>
                        <CardMedia className="rounded-xl"
                            component="img"
                            style={{ height: 100 }}
                            image={logo}
                        />
                    </Box>
                </Box>
                <Box className="bg-white w-full mb-5">
                    <Typography variant='h5' align="center">Datos almacenados Peso</Typography>
                </Box>
                <Container className="bg-white max-h-96 overflow-y-auto mb-5">
                    {userNodoPeso && (
                        <Orders
                            orders={userNodoPeso}
                        />
                    )}
                </Container>
                <Box className="bg-white w-full mb-5">
                    <Typography variant='h5' align="center">Datos almacenados Infrarrojo</Typography>
                </Box>
                <Container className="bg-white max-h-96 overflow-y-auto mb-5">
                    {userNodoUltrasonido && (
                        <Orders
                            orders={userNodoUltrasonido}
                        />
                    )}
                </Container>
            </Container>
        </Box>
    );
}
export default ViewAll;