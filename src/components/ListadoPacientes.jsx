import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

const ListadoPacientes = () => {

  const {pacientes}= usePacientes()
  //console.log(pacientes)

  return (
    <>
      {pacientes.length ? 
        <>
          <h1 className="text-xl uppercase mb-5 font-bold text-center">Listado de Pacientes</h1>
          <p className="text-center text-black-600 text-lg">Listado de  <span className="text-indigo-600 font-bold">Pacientes</span> </p>
          {pacientes.map( paciente =>(
            <Paciente 
              key={paciente._id}
              paciente= {paciente}
            />
          ))}

        </>
      
      :(
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center ">
            Comienza Agregando pacientes y <span className="text-indigo-600 font-bold">Apareceran Aqui</span>
          </p>

        </>
      ) }   
    </>
  )
}

export default ListadoPacientes