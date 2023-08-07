
import usePacientes from "../hooks/usePacientes"

const Paciente = ({paciente}) => {
    
  const {setEdicion, eliminarPaciente}= usePacientes()
    const {email,nombre, propietario, fechaAlta,sintomas,_id}= paciente

  const formatearFecha=(fechaAlta)=>{
    const nuevaFecha = new Date(fechaAlta)
    return new Intl.DateTimeFormat('es-MX',{dateStyle:'long'}).format(nuevaFecha)
  }

 
  return (
    <div className=" mx-5 bg-white my-10 shadow-md px-5 rounded-xl py-10">
      <p className="font-bold uppercase text-indigo-800 my-1">Nombre:<span className="font-normal normal-case text-black"> {nombre}</span> </p>
      <p className="font-bold uppercase text-indigo-800 my-1">Propietario:<span className="font-normal normal-case text-black"> {propietario}</span> </p>
      <p className="font-bold uppercase text-indigo-800 my-1">Email:<span className="font-normal normal-case text-black"> {email}</span> </p>
      <p className="font-bold uppercase text-indigo-800 my-1">Fecha de Alta:<span className="font-normal normal-case text-black"> {formatearFecha(fechaAlta)}</span> </p>
      <p className="font-bold uppercase text-indigo-800 my-1">Sintomas:<span className="font-normal normal-case text-black"> {sintomas}</span> </p>

      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 rounded-lg font-bold text-white"
          onClick={()=> setEdicion(paciente)}
        >Editar</button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 rounded-lg font-bold text-white"
          onClick={()=>eliminarPaciente(_id)}
        >Eliminar</button>


      </div>
    </div>
  )
}

export default Paciente