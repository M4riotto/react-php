import { Routes, Route } from "react-router-dom";

import Cursos from "./pages/Cursos";
import SignUp from "./pages/SignUp";
import Sign from "./pages/Sign";


const Router = () => {
    return (
        <Routes>
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/Sign" element={<Sign />} />
        </Routes>
    )
}

export default Router