import React, {useState} from "react";
import styled from "@emotion/styled";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: no;
`;

const InputRadio = styled.input `
    margin:0 1rem;
`;

const Boton = styled.button `
    background-color:#00838F;
    font-size:16px;
    width:100%;
    padding:1rem;
    color:#FFF;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    margin-top:2rem;

    &:hover{
        cursor:pointer;
        background-color:#26c6da;
        transition: background-color .3s ease;
    }
`;

const Error = styled.div `
    width:100%;
    background-color:red;
    color:white;
    padding:1rem;
    text-align:center;
    margin-bottom:2rem;

`;

const Formulario = () => {

    const [datos, setDatos]=useState({
        marca:'',
        año:'',
        plan:''
    })

    //extraer valores del state 

    const {marca, año, plan}= datos;

    //leer los datos del formulario y colocarlos en el state

    const obtenerInformacion = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value

        })
    };

    //error de validacion

    const [error, setError]=useState(false);

    //cuando el usuario presion Submit

    const cotizarSeguro = e => {
        
        e.preventDefault();

        if(marca.trim()=== '' || año.trim()=== '' || plan.trim()=== ''){
           setError(true)
           return;
           
        }

        setError(false)
    }

  return (
    <form onSubmit={cotizarSeguro}>

    {error ? <Error>Todos los campos son obligatorios</Error> : null};

      <Campo>
        <label>Marca</label>
        <Select
            name='marca'
            value={marca}
            onChange={obtenerInformacion}
        >
          <option value="">Seleccione</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select
            name='año'
            value={año}
            onChange={obtenerInformacion}
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio value="basico" name="plan" type="radio" checked={plan === 'basico'} onChange={obtenerInformacion}  />
        Basico
        <InputRadio value="completo" name="plan" type="radio" checked={plan === 'completo'} onChange={obtenerInformacion}/>
        Completo
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

export default Formulario;
