import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const Header = () => {
    const {cerrarSesion}= useAuth()
    return (
        <header className="py-10 bg-indigo-600 ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="font-bold text-indigo-200 text-2xl text-center">Administrador de Pacientes de {''} <span className="text-white">Veterinaria</span> </h1>
                <nav className="flex flex-col items-center lg:flex-row mt-5 lg:mt-0 gap-4">
                    <Link to="/admin" className="text-white text-sm uppercase font-bold">Pacientes</Link>
                    <Link to="/admin/perfil" className="text-white text-sm uppercase font-bold">Perfil</Link>
                    <button
                        type="button"
                        className="text-white text-sm uppercase font-bold"
                        onClick={cerrarSesion}
                    >Cerrar Sesión</button>
                </nav>
            </div>

        </header>

    )
}

export default Header