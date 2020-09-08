import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

export default function Post (props) {

  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])


  const onClickCurtida = () => {

    setCurtido(!curtido)
        
    if (curtido) {
        setNumeroCurtidas(numeroCurtidas - 1)
    } else {
        setNumeroCurtidas(numeroCurtidas + 1)
    }

  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };


  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
  
    setComentarios(listaDeComentarios)
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>

      {comentando? (<SecaoComentario enviarComentario={enviarComentario}></SecaoComentario>) : (comentarios.map(comentario => {
        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })) }
      
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}