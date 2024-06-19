import React from "react"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import styled from "styled-components"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 20px;

`

const SessaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`




const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
    return (

        <>

            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SessaoFluida>

                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SessaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria