import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

// images
import userpic1 from './img/userpic1.jpg'
import userpic2 from './img/userpic2.png'
import userpic3 from './img/userpic3.jpg'
import imagepost from './img/imagepost.png'
import imagepost2 from './img/imagepost2.png'
import logo from './img/labegram.png'

// style

const Header = styled.header`
  width: 100%;
  background-color:#FBFBFB;
  display: flex;
  justify-content: center;
  padding-top: 1.5em;
  padding-bottom: 1em;
  margin-bottom: 1em;
`

const Logo = styled.img`
  height: 3em;
`

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
  background-color:#FBFBFB;
  width: 30vw;
  height: 17em;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  margin-bottom: 0.5em;
  border: 3px solid #57656E;
  box-shadow: 10px 10px 8px #888888;
  padding-bottom: 1em;
  text-align:center;
`
const FormTitle = styled.h2`
  color: #424D54;
`

const InputForm = styled.input`
  height: 2.4em;
  font-size: 0.8em;
  width: 70%;
  border: 1px solid #B7C6CF;
  margin-bottom: 1em;
  padding-left: 0.5em;
`
const SendButton = styled.button`
  height: 3em;
  width: 9em;
  font-size: 0.8em;
  font-weight: 700;
`

const TipContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 30vw;
  background-color:#88A2B2;
  color: white;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
`
const TipParagraph = styled.p`
  width: 100%;
  text-align: center;
`
const TipEmphasis = styled.em`
  font-size: 0.8em;
`

const Footer = styled.footer `
  width: 100%;
  background-color:#FBFBFB;
  display: flex;
  justify-content: center;
  padding-top: 1.5em;
  padding-bottom: 1em;
  color: #444444;
`


class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'dolucasduarte',
        fotoUsuario: userpic1,
        fotoPost: userpic1,
      },
      {
        nomeUsuario: 'labenu',
        fotoUsuario: userpic2,
        fotoPost: imagepost,
      },
      {
        nomeUsuario:'capivarasinlove',
        fotoUsuario:userpic3,
        fotoPost:imagepost2,
      }
    ],
    valorInputNomeUsuario:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:"",
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value})
  }

  adicionaPost = () => {

    if (this.state.valorInputNomeUsuario !== "" && this.state.valorInputFotoUsuario !== "" && this.state.valorInputFotoPost) {
      const novoPost = {
        nomeUsuario: this.state.valorInputNomeUsuario,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost,      
      }

      const novaListaDePosts = [novoPost, ...this.state.posts]

      this.setState({ posts: novaListaDePosts, valorInputNomeUsuario: "", valorInputFotoUsuario: "", valorInputFotoPost: "" })

    } else {
      alert("Por favor, preencha os 3 campos! Se estiver sem uma URL, use a indicada!")
    }

  }


  render() {

    const listaDePosts = this.state.posts.map((post) => {

      return (
        <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
      )
    })

    return (
      <AppContainer>

      <Header>
        <Logo src={logo} />
      </Header>

      <FormContainer>
        <FormTitle>Adicione seu post!</FormTitle>
        <InputForm
        value={this.state.valorInputNomeUsuario}
        placeholder={"Digite seu nome de usuário"}
        onChange={this.onChangeInputNome}
          />
        <InputForm
        value={this.state.valorInputFotoUsuario}
        placeholder={"URL da foto do usuário"}
        onChange={this.onChangeInputFotoUsuario}
        />
        <InputForm
        value={this.state.valorInputFotoPost}
        placeholder={"URL da foto do post"}
        onChange={this.onChangeInputFotoPost}
        />
        <SendButton onClick={this.adicionaPost}>Adicionar post</SendButton>
      </FormContainer>

      <TipContainer>
        <TipParagraph>
        <strong>URL para teste rápido:</strong><br/>
        <TipEmphasis>https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/capybara.jpg?itok=XHdneBUA</TipEmphasis></TipParagraph>
        </TipContainer>


      <div>{listaDePosts}</div>
        {/* <Post
          nomeUsuario={'dolucasduarte'}
          fotoUsuario={userpic1}
          fotoPost={userpic1}
        />

        <Post
          nomeUsuario={'labenu'}
          fotoUsuario={userpic2}
          fotoPost={imagepost}
        />
        <Post
          nomeUsuario={'capivara'}
          fotoUsuario={userpic3}
          fotoPost={imagepost2}
        /> */}
                
      
      <Footer>Exercício realizado em 13/agosto/2020 para treinar Styled Components e Manipulação de Arrays! </Footer>

      </AppContainer>
    );
  }
}

export default App;
