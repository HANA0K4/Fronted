import SignIn from "../auth/SignIn";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppsRoutes from './AppsRoutes';
import Register from "../auth/Register";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/user/*" element={<AppsRoutes />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter