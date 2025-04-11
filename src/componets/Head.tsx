import { Link } from "react-router";


function Head(){
  return(
  <>
      <header className="bg-black h-26 flex flex-row"  >
        
            
          <div className="w-20 h-20">
              <img className="m-3 rounded-lg overflow-hidden " src="/src/imag/logo.jpeg" alt=""></img>             
          </div>   
          <div className="m-auto">
            <Link className="m-4  text-white" to={"/"}>Inicio</Link>
            <Link className="m-5 text-white" to={"/Eventos"}>Evento</Link>
            <Link className="m-5 text-white" to={"/"}>Consultas</Link>
            <Link className="m-5 text-white" to={"/"}>Sobre-nos</Link>
          </div>  
          
        
        
        
      </header>   
  </>
  )
}
export default Head;