import { useEffect, useState } from "react"
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth" 
import Alerta from "../components/Alerta"

const EditarPerfil = () => {
    const {auth, actualizarPerfil} = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta]=useState({})

    useEffect(()=>{
        setPerfil(auth)
    },[auth])

    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        const {nombre,email}= perfil;
        if([nombre, email].includes('')){
            setAlerta({
                msg:'Email y Nombre son Obligatorios',
                error:true,

            })
        }
        const resultado = await actualizarPerfil(perfil)

        setAlerta(resultado)
    }
    const {msg}= alerta

  return (
    <>
        <AdminNav />
        <h2 className="font-black text-3xl text-center mt-10 ">Editar Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center ">Modifica tu {''} 
            <span className="text-indigo-600 font-bold">Perfil Aqui</span> 
        </p>

        <div className="flex justify-center ">
            <div className="w-full md:w-1/2 bg-white shadow rounden-lg p-5">
                {msg && <Alerta 
                    alerta={alerta}
                />}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label className="uppercase font-bold" htmlFor="">Nombre Completo:</label>
                        <input 
                            type="text"
                            className="border bg-gray-50 w-full mt-5 rounded-lg pt-3"
                            placeholder="Nombre"
                            name="nombre"
                            value={perfil.nombre || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name]:e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold" htmlFor="">Sitio Web:</label>
                        <input 
                            type="text"
                            className="border bg-gray-50 w-full mt-5 rounded-lg pt-3"
                            
                            name="web"
                            value={perfil.web || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name]:e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold" htmlFor="">Telefono:</label>
                        <input 
                            type="text"
                            className="border bg-gray-50 w-full mt-5 rounded-lg pt-3"
                            
                            name="telefono"
                            value={perfil.telefono || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name]:e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold" htmlFor="">Email:</label>
                        <input 
                            type="text"
                            className="border bg-gray-50 w-full mt-5 rounded-lg pt-3"
                            placeholder="Email"
                            name="email"
                            value={perfil.email || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name]:e.target.value
                            })}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Guardar Cambios"
                        className="w-full bg-indigo-700 py-3 font-bold text-white rounded-lg uppercase px-10  mt-5"
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default EditarPerfil