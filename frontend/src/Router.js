import { Routes, Route } from "react-router-dom";

import Cursos from "./pages/Cursos";
import SignUp from "./pages/SignUp";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import CheckLogged from "./components/CheckLogged";
import Cards from "./pages/Cards";


const Router = () => {
    return (
        <>
            <Routes>



                <Route element={<CheckLogged />}>

                    <Route path="home" element={<Home />} />
                    <Route path="cursos" element={<Cursos />} />
                    <Route path="card" element={<Cards />} />

                </Route>

                <Route path="/" element={<Sign />} />
                <Route path="cadastro" element={<SignUp />} />
                <Route path="sign" element={<Sign />} />
                
            {console.log('amigo estou aquii2')}
            </Routes>
        </>
    )
}

export default Router