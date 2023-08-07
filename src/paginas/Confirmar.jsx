import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";

const Confirmar = () => {
  const [cuentaConfrimada, setCuentaConfirmada]= useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({})

  const params = useParams();
  const {id} = params 
  useEffect(()=>{
    const confirmarCuenta = async ()=>{
      try {
        const url=`/veterinarios/confirmar/${id}`
        const {data} = await clienteAxios(url)
        setCuentaConfirmada(true)
        setAlerta({
          msg: data.msg,
          error:false,
        })

      } catch (error) {
        setAlerta({
          msg:error.response.data.msg,
          error:true
        })
      }

      setCargando(false)
    }
    confirmarCuenta();
  },[])

  return (
    <>
        <div className=""> 
          <h1 className="text-indigo-600 font-black text-6xl">Confirma tu Cuenta y  <span className="text-black">Comienza a Administrar </span>tus pacientes </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg  px-5 py-10 rounded-xl bg-white">
          {!cargando && 
            <Alerta 
            alerta={alerta}
          />}
          {cuentaConfrimada && (
            <Link 
                to='/'
                className="block text-center my-5 text-gray-500"
              >¿Ya tienes cuenta? Inicia Sesión</Link>
          )}
        </div>
    </>
  )
}

export default Confirmar