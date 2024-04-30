export const ManageNodosService = {
    baseUrl: import.meta.env.VITE_IOT_NODOS,
    endpoints: {
        getNodos: '/',
        getPeso: '/datosPeso',
        getUltrasonido: '/datosUltrasonido',
    },
};