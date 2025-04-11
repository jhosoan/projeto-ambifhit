import { Link } from "react-router";
function AddEvento(){
    return(
     <>
     <h2 className="m-7">PROXIMOS EVENTOS.</h2>
       <div className="h-100 w-90 m-15 ">
         
          
            <h1 className="text-3xl">not event..</h1>
              
              <Link to={"/mais_sob_evento"}>Proximo tela</Link>

       </div>
     
      
     </>
    )
}
export default AddEvento;