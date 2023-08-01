import { useEffect } from 'react';
import useAuthStore from "../store/useAuthStore"
import { useNavigate, Outlet } from 'react-router-dom';

const CheckLogged = () => {

    const isLogged = useAuthStore((state) => state.isLogged)
    const navigate = useNavigate()
    
    useEffect(() => {


        if (!isLogged) {
            console.log('not logged')
            navigate('/sign')
        }
    }, [isLogged])

    return(
        <Outlet />
     )
}


export default  CheckLogged