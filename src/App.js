import React from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import styled from '@emotion/styled';

const Cotenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Cotenedor>
      <Header titulo="Contizador de seguros" />

      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>

    </Cotenedor>
  );
}

export default App;
