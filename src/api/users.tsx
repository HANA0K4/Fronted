export const AuthService = {
    baseUrl: import.meta.env.VITE_IOT,
    endpoints: {
        login: '/login',
        register: '/register',
        getNodos: '/',
    },
};