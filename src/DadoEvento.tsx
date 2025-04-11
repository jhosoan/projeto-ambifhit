import { Link } from "react-router";

function DadoEvento(){
    return(
    <>
      <h1 className="text-5xl text-center">Mais informaçãoes do evento!</h1>  

      <div>
        <h2 className="text-2xl c">Esse bloco ainda funçao</h2>
      </div>

      <Link to={"/inscriçao"}>proximo</Link>
    </>
    )
  }
  export default DadoEvento;