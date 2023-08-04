import { Routes, Route } from "react-router-dom";

import Cursos from "./pages/Cursos";
import SignUp from "./pages/SignUp";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import CheckLogged from "./components/CheckLogged";


const Router = () => {
    return (
        <>
            {console.log('amigo estou aquii')}
            <Routes>



                <Route element={<CheckLogged />}>

                    <Route path="/home" element={<Home />} />
                    <Route path="/cursos" element={<Cursos />} />

                </Route>

                <Route path="/signUp" element={<SignUp />} />
                <Route path="/Sign" element={<Sign />} />
            </Routes>
        </>
    )
}

export default Router