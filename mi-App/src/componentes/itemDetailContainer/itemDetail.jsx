import Counter from "../Contador/contador"

export const ItemDetail =({product})=>{

    return(

        <div style={{ margin: '20px auto ', maxWidth:650,display:'flex',justifyContent:'center'}} className='col-sm-8' >                                                        
                                                    <div className="card text-center w-75 mt-5" >
                                                        <div className="card-header ">
                                                            {`${product.name} - ${product.cat}`}
                                                        </div>
                                                        <div className="card-body ">
                                                            <img src={product.pic} alt={product.name} className='img-fluid ' />
                                                           
                                                        </div>                                                
                                                        <div className="card-footer">        
                                                                                                        
                                                            <p className="card-text">Precio: $ {product.price} x unidad </p>
                                                    <Counter stock={product.stock}/> 
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum quidem itaque a tempora sint corrupti ullam tenetur molestias dignissimos sit, quasi aut, inventore exercitationem accusamus alias, assumenda repudiandae delectus.</p>
                                                        </div>
                                                    </div>                                                    
                                               </div> 
                                               
       
    )
}