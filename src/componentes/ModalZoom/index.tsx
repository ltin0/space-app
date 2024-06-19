import React from "react"
import Imagem from "../Galeria/Imagem"
import styled from "styled-components"
import BotaoIcone from "../BotaoIcone"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 50px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const ButtonEstilizado = styled.button`
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    border: transparent;
    position: absolute;
    top: 0;
    right: 0;
    img {
        width: 32px;
        height: 32px;
    }
    `



const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {

    return (
        <>
            {foto &&

                <>
                    <Overlay>
                    <DialogEstilizado open={!!foto}>
                        <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}></Imagem>
                        <form method="dialog">
                            <ButtonEstilizado><img src="/icones/fechar.png" onClick={aoFechar}/></ButtonEstilizado>

                        </form>
                    </DialogEstilizado>
                    </Overlay>

                </>
            }
        </>
    )
}

export default ModalZoom