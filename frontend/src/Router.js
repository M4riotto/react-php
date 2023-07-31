import { Routes, Route } from "react-router-dom";

import Cursos from "./pages/Cursos";
import SignUp from "./pages/SignUp";


const Router = () => {
    return (
        <Routes>
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/signUp" element={<SignUp />} />
        </Routes>
    )
}

export default Router