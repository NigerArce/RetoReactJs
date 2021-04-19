import React,{useEffect, useState} from "react";
import {db} from '../firebase';


const Desviacion =() => {

    const initialStateValues={
        muestra:'',
        media:'',
        totaledad:'',
        desviacion:''
    }

    
    const [values, setValues] = useState(initialStateValues);

    const [clientes, setClientes] = useState([]);

    const [edades, setEdades] = useState([]);

    var v_cantidad = 0;
    var v_totaledad = 0;
    var v_media = 0;
    var v_sumatoria = 0;
    var v_varianza = 0;
    var v_desviacion = 0;

    



    const obtenerClientes = async () => {
        db.collection('cliente').onSnapshot(
            (querySnapshot) => {
                const listaCliente = [];
                const aEdad = [];
                querySnapshot.forEach((doc) => {
                    listaCliente.push({...doc.data(), id:doc.id});
                    v_cantidad++;
                    console.log("doc.edad"+doc.data().edad);
                    var nedad = parseInt(doc.data().edad);
                    v_totaledad = v_totaledad + nedad;
                    aEdad.push(nedad);
                });
                console.log(listaCliente);
                console.log(aEdad);
                v_media = v_totaledad/v_cantidad;//Math.round(v_totaledad/v_cantidad);
                console.log(v_media);
                
                
                
                //setValues({...values, 'media': v_media})
                setClientes(listaCliente);

                for (var i = 0; i < v_cantidad; i++) {
                    v_sumatoria = Math.pow(aEdad[i] - v_media, 2);
                    v_varianza = v_varianza + v_sumatoria;
                }
                v_varianza = v_varianza /(v_cantidad-1);
                v_desviacion = Math.sqrt(v_varianza);
                console.log("····"+v_desviacion);
                const calc = { muestra:v_cantidad, media:v_media, totaledad:v_totaledad, desviacion:v_desviacion};
                setValues(calc);
            }
        );

        
    }

    useEffect(
        () => {obtenerClientes();},
        []
    );
    
    

    return( 
        <div className="card card-body">
            <div className="col-md-8">
                
                    <div className="card mb-1">
                        <table className="table table-borderred">
                            <tbody>
                                <tr>
                                    <td>
                                        Muestra:
                                    </td>
                                    <td>
                                        {values.muestra}
                                    </td>
                                </tr>
                            </tbody>
                            
                            <tbody>
                                <tr>
                                    <td>
                                        Media:
                                    </td>
                                    <td>
                                        {values.media}
                                    </td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <td>
                                        Desviación  Estandar:
                                    </td>
                                    <td>
                                        {values.desviacion}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>

                
            </div>
            
        </div>
    )
}

export default Desviacion;