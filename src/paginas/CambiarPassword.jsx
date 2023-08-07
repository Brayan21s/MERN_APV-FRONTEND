import { useState } from "react";
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {

    const { guardarPassword } = useAuth()

    const [alerta, setAlerta]= useState({})
    const [password, setPassword] = useState({
        pwd_actual : '',
        pwd_nuevo : ''
    })


  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(Object.values(password).some(campo=>campo='')){
        setAlerta({
            msg:'Todos los campos son obligatorios',
            error:true
        })
        return
    }
    if(password.pwd_nuevo.length< 6){
        setAlerta({
            msg:"La contraseña debe tener al menos 8 caracteres",
            error: true
        })
        return
    }
    const respuesta= await guardarPassword(password)

    setAlerta(respuesta)
  }

  const {msg}= alerta
  return (
    <>
        <AdminNav />
        <h2 className="font-black text-3xl text-center mt-10 ">Cambiar Password</h2>
        <p className="text-xl mt-5 mb-10 text-center ">Modifica tu {''} 
            <span className="text-indigo-600 font-bold">Password Aqui</span> 
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
                        <label className="uppercase font-bold" htmlFor="">Password actual:</label>
                        <input 
                            type="password"
                            className="border bg-gray-50 w-full mt-5 rounded-lg pt-3"
                            placeholder="Escribe tu Actual Password"
                            name="pwd_actual"
                            onChange ={ e=> setPassword({
                                ...password,
                                [e.target.name]:e.target.value
                            })}
                        />
                    </div>
                    <div className="my-3">
                        <label className="uppercase font-bold" htmlFor="">Nuevo Password:</label>
                        <input 
                            type="password"
                            className="border bg-gray-50 w-full mt-5 rounded-lg pt-3"
                            placeholder="Escribe tu Nuevo Password"
                            name="pwd_nuevo"
                            onChange ={ e=> setPassword({
                                ...password,
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

export default CambiarPassword