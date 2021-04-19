import React,{useState, useEffect} from "react";
import {db} from '../firebase';

const ClienteForm =(props) => {

    const initialStateValues={
        nombres:'',
        apellidos:'',
        edad:'',
        fechaNacimiento:'',
        fdeceso:''
    }

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target
        //console.log(name, value)
        setValues({...values,[name]: value})
        
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("handleSubmit")
        props.addTask(values);
        setValues({...initialStateValues})
    }

    const getClienteId = async (id) => {
        const clie = await db.collection('cliente').doc(id).get();
        setValues({...clie.data()})
    }

    
    useEffect(()=> {
        if(props.currentId === ""){
            setValues({...initialStateValues})
        }else{
            getClienteId(props.currentId);
        }
        
    },[props.currentId])

    return(
        <form className="card card-body" onSubmit={handleSubmit}>
            <h4>Creación de Clientes</h4>
            <div className="form-group input-group">
                <div className="input-group-text">
                    Nombres: 
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Nombres"
                    name="nombres"
                    onChange={handleInputChange}
                    value={values.nombres}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text">
                    Apellidos: 
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Apellidos"
                    name="apellidos"
                    onChange={handleInputChange}
                    value={values.apellidos}
                />
            </div>


            <div className="form-group input-group">
                <div className="input-group-text">
                    Edad: 
                </div>
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Edad"
                    name="edad"
                    
                    onChange={handleInputChange}
                    value={values.edad}
                />
            </div>
            


            <div className="form-group input-group">
                <div className="input-group-text">
                    F. Nacimiento: 
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    name="fechaNacimiento"
                    onChange={handleInputChange}
                    value={values.fechaNacimiento}
                />
            </div>   
            
 
            <button className="btn btn-primary btn-block" color="succes">
                {props.currentId === "" ? 'Guardar': 'Volver'}
                
            </button>                     
        </form>
    )
};

export default ClienteForm;