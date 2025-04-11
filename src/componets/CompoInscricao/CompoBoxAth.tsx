function CompoBoxAth(){
    return(
        <>
          <div className="bg-blue-600   flex flex-col  w-100" >
            
             <div>
                    <label className="m-5">Nome completo do competidor: </label>
                    
             </div>
             <input className="border-3  ml-11 " type="text" />
             <div>
                    <label className="m-5 ">Data de Nacimeto: </label>
                    
             </div>
             <input className="border-3 m-2 ml-11" type="date" />
             <div>
                    <label className="m-5 ">Faixa :</label>
                    
             </div>
             <input className="border-3 m-2 ml-11" type="text" />
             <div>
                    <label className="m-5">CPF: </label>
                    
             </div>
             <input className="border-3 m-2 ml-11" type="text" />
             
              
            


          </div>
        </>
    )
}

export default CompoBoxAth;