import React from "react"
import styled from "styled-components"

const BannerEstilizado = styled.div`
    background-image: url('././public/imagens/banner.png');
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 328px;
    border-radius: 20px;
    opacity: 80%;
    display: flex;
    align-items: center;
    padding: 20px;
`

const TituloEstilizado = styled.h1`
    color: #fff;
    font-family: 'GandhiSansRegular';
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    max-width: 300px;
    padding: 0 64px;
`


const banner = () => {
    return(
        <BannerEstilizado>
            <TituloEstilizado>
                A Galeria mais<br/> completa de<br/> fotos do espaço!
            </TituloEstilizado>        
        </BannerEstilizado>
    )
}

export default banner;