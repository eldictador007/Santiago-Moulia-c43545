import { Link } from "react-router-dom"




export const Item=({product})=>{
                return    <div style={{ margin: 15, maxWidth:450}} className='col-sm-8' >                                                        
                                                    <div className="card text-center w-100 h-100 mt-5" >
                                                        <div className="card-header ">
                                                            {`${product.name} - ${product.cat}`}
                                                        </div>
                                                        <div className="card-body ">
                                                            <img src={product.pic} alt={product.name} className='img-fluid p-5' />
                                                           
                                                            <p className="card-text">Precio: $ {product.price} x unidad </p>
                                                        </div>                                                
                                                        <div className="card-footer">        
                                                        <Link to={`/detalle/${product.id}`}>
                                                            <button className="btn btn-outline-primary btn-block">
                                                                detalles
                                                            </button>
                                                        </Link>                                                
                                                        </div>
                                                    </div>                                                    
                                               </div> 
                                               }