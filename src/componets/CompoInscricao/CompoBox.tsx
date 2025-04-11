import { Link } from "react-router";

 








function CompoBox(){
    //alert("Essa etapa é para o responsalve do atheta no dia do evento.")
    return(
        <>
          
          <div className="h-125 w-152  m-auto bg-blue-7000" >
             <label>Primeira etapa do processo de incrição</label>

             <nav className="flex-boxflex flex-col ...">
                <div className="m-5">
                <label className="m-1.5 q">Nome do responsalvel :</label>
                <input className="bg-amber-200   border-black" type="nome_res" name="res" id="" />


                </div>
                <div className="m-5">
                <label className="m-1.5 q">email :</label>
                <input className="bg-amber-200" type="nome_res" name="res" id="" />


                </div>
                
                 <div className="m-5">
                 <label className="m-1.5 q"> Telefone :</label>
                <input className="bg-amber-200" type="nome_res" name="res" id="" />
 
                    
                    </div>                

                 <div className="m-5">
                 <label className="m-1.5 q">Escola/Academia :</label>
                <input className="bg-amber-200" type="nome_res" name="res" id="" />
    
                    
                    
                    
                 </div>     
                

                                  
                <div className="flex justify-center b">
                 <Link className="bg-blue-900 h-10 w-25" to={'/IncricaoAtheta'}>se-inscrever</Link>
                                      
                </div>
             </nav>
             
          </div>
        </>
    )
}
 export default CompoBox;