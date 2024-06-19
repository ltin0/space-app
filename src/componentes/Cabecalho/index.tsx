import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import React from "react"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;

    }
`

const Cabecalho = ({ setFiltro }) => {
    return(
    <HeaderEstilizado>
        <img src="/imagens/logo.png" alt=""></img>
        <CampoTexto setFiltro={setFiltro}/>    
    </HeaderEstilizado>
    
    )
   
}

export default Cabecalho