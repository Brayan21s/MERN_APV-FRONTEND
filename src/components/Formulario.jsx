import { useEffect, useState } from "react"
import Alerta from "./Alerta"
import usePacientes from "../hooks/usePacientes"

const Formulario = () => {

    const [nombre,setNombre]=useState('')
    const [propietario,setPropietario]=useState('')
    const [email,setEmail]=useState('')
    const [fechaAlta,setFechaAlta]=useState('')
    const [sintomas,setSintomas]=useState('')
    const [id, setId]= useState(null)

    const [alerta, setAlerta]= useState({})

    const { guardarPaciente,paciente } = usePacientes()
    
    useEffect(()=>{
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            //setFechaAlta(new Date(paciente.fechaAlta).toISOString())
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }
    },[paciente])


    
    const handleSubmit = e => {
        e.preventDefault();
        
        //validar formulario
        if([nombre, propietario, email, fechaAlta, sintomas].includes('')){
            setAlerta({
                msg:'Todos los campos son obligatorios',
                error:true
            })
            return;
        }
        setAlerta({}) //regresamos la alerta a un obtjeto vacio si paso la verificacion

        guardarPaciente({
            nombre, 
            propietario, 
            email, 
            fechaAlta, 
            sintomas,
            id
        })
        setAlerta({
            msg:"Guardado Correctamente"
        })
        setNombre('')
        setPropietario('')
        setEmail('')
        setSintomas('')
        setId('')


    }

    const {msg}= alerta;

    return (
        <>
            <h1 className="text-xl uppercase mb-5 font-bold text-center">Administrador de Pacientes</h1>

            <p className=" text-lg text-center mb-10">
                Añade tus Pacientes y {''} 
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            
            <form 
                className=" bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label 
                        htmlFor="nombre"
                        className="uppercase text-gray-700 font-bold"
                    >Nombre</label>
                    <input type="text" placeholder="Nombre Mascota"
                        id="nombre"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={nombre}
                        onChange={e=> setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="propietario"
                        className="uppercase text-gray-700 font-bold"
                    >Propietario</label>
                    <input type="text" placeholder="Propietario"
                        id=" propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={propietario}
                        onChange={e=> setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="email"
                        className="uppercase text-gray-700 font-bold"
                    >Email Propietario</label>
                    <input type="text" placeholder="Email Propietario"
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="fechaAlta"
                        className="uppercase text-gray-700 font-bold"
                    >Fecha alta</label>
                    <input 
                        type="date" 
                        placeholder="Fecha de alta"
                        id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={fechaAlta}
                        onChange={e=> setFechaAlta(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="sintomas"
                        className="uppercase text-gray-700 font-bold"
                    >Sintomas</label>
                    <textarea 
                        id="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                        value={sintomas}
                        onChange={e=> setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 font-bold uppercase rounded-lg hover:bg-indigo-800 cursor-pointer transition-colors text-white"
                    value={id ? "Guardar Cambio":"Guardar Paciente"}
                />
            </form>
            {msg && <Alerta alerta={alerta} />}
        </>
       


    )
}

export default Formulario