import React,{useEffect, useState} from "react";
import ClienteForm from "./ClienteForm";
//import { toast} from 'react-toastify';
import {db} from '../firebase';

const Cliente =() => {

    const [clientes, setClientes] = useState([]);

    const addTask = async (clienteObj) => {
        try{
            console.log(clienteObj);
            await db.collection('cliente').doc().set(clienteObj);
            //toast('Cliente agregado',{
            //    type:'success'
            //});
        }catch(error){
            console.error(error);
        }
        

    };

    //evento
    const obtenerClientes = async () => {
        db.collection('cliente').onSnapshot(
            (querySnapshot) => {
                const listaCliente = [];
                querySnapshot.forEach((doc) => {
                    listaCliente.push({...doc.data(), id:doc.id});
                });
                console.log(listaCliente);

                setClientes(listaCliente);
            }
        );
    }


    useEffect(
        () => {obtenerClientes();},
        []
    );


    return (
        <div className="card card-body">
            <ClienteForm addCliente={addTask}/>
            <div className="col-md-8">
                <h4>Lista de Clientes</h4>
                
                    <div className="card mb-1">
                        <table className="table table-borderred">
                            <thead>
                                <tr>
                                    <th>
                                        Cliente
                                    </th>
                                    <th>
                                        Accion
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {clientes.map(clie => (
                                <tr>
                                    <td>
                                        {clie.nombres}
                                    </td>
                                    <td>
                                        <button className="btn btn-primary"
                                                onClick ={()=>this.proyeccionCliente(clie.id)}
                                        >
                                            analizar
                                        </button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            
                            
                        </table>
                        
                    </div>

                
            </div>
        </div>
      );
};

export default Cliente;