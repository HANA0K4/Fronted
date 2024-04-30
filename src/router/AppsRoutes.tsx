import { Routes, Route } from "react-router-dom";
import NavBar from "../main/NavBar";
import Dashboard from "../Apps/Dashboard/Dashboard";
import Viewall from "../Apps/Dashboard/ViewAll";

const AppsRoutes = () => {
    return (
        <NavBar>
            <Routes>
                <Route path="/:id" element={<Dashboard />} />
                <Route path="/:id/:id" element={<Viewall />} />
            </Routes>
        </NavBar>
    )
}
export default AppsRoutes