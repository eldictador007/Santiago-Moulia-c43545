import Counter from "../Contador/contador"


export const Item=({product})=>{
                return    <div style={{ margin: 50, maxWidth:450}} className='col-sm-8' >                                                        
                                                    <div className="card text-center w-100 mt-5" >
                                                        <div className="card-header ">
                                                            {`${product.name} - ${product.cat}`}
                                                        </div>
                                                        <div className="card-body ">
                                                            <img src={product.pic} alt={product.name} className='w-50' />
                                                           
                                                            <p className="card-text">Precio: $ {product.price} x unidad </p>
                                                        </div>                                                
                                                        <div className="card-footer">                                                        
                                                            <button className="btn btn-outline-primary btn-block">
                                                                detalles
                                                            </button>
                                                        </div>
                                                    </div>                                                    
                                               </div> 
                                               }