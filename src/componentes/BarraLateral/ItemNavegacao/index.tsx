import React from "react"
import styled from "styled-components"

const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7b78e5' : '#d9d9d9' };
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
    font-weight: 500;
`


const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return <ItemListaEstilizado $={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo } alt="" /> 
        {children}
    </ItemListaEstilizado>
}

export default ItemNavegacao