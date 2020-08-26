import React from 'react';
import axios from 'axios'
import {AppContainer, Header, Logotype, Subtitle, Highlight} from "./Appstyle"
import {FormContainer, FormText, Input, SendButton} from "./Appstyle"
//importa componente lista
import {ListContainer, ListItem, UserIcon, UserName, DeleteButton} from "./Appstyle"
import staricon from './img/star-icon.svg'


import UsersList from './components/UsersList'
import logo from './img/logo.svg'

class App extends React.Component {

state = {
  name: "",
  email: "",
  allUsers: [],
}

getAllUsers = () => {

  const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      { headers: {
        Authorization: "lucas-duarte-jackson"
      }}
  )

  request
  .then((response) => {
      this.setState({allUsers: response.data})
  })
  .catch((error) => {  
    console.log("ERRO NA GETALLUSERS",error)
  })
}

componentDidMount() {
  this.getAllUsers()
}

onEnter = (event) => {
  if(this.state.name !== "" && this.state.email !== "" && event.key === "Enter") {
    this.createUser()
  }
}

createUser = () => {

  const body = {
    name: this.state.name,
    email: this.state.email,
  }

  const request = axios.post(
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
  body,
   {headers: {
      Authorization: "lucas-duarte-jackson"
    }}
  )

  request.then((response) => {
    alert(`Bem-vindx, ${this.state.name}! Agora você é VIP!`)
    this.getAllUsers()
    this.setState({ name: "", email: ""})
    console.log(response.data.result)
  })
  .catch((error) => {
    console.log("Erro:", error)
  })

}



deleteUser = (id) => {
  
  const requestdelete = axios.delete(
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
      headers: {
        Authorization: "lucas-duarte-jackson"
      }
    }
  )

    requestdelete
    .then((response) => {
      alert(`Obrigado pela denúncia! Essa pessoa foi deletada da lista VIP`)
      this.getAllUsers()
      console.log("deu certo", response)
    })
    .catch((error) => {
      console.log("deu errado", error)
    })
}


render() {

  const onChangeInputName = (event) => {
    this.setState({ name: event.target.value})
  }

  const onChangeInputEmail = (event) => {
    this.setState({ email: event.target.value})
  }

  return (
    <AppContainer>
      <Header>
        <Logotype src={logo} />
        <Subtitle>Cansado de não ser ninguém? <Highlight>Seja VIP!</Highlight></Subtitle>
      </Header>
      <FormContainer>
      <FormText>Faça seu cadastro e entre agora mesmo para uma seleta lista de <Highlight>pessoas VIP</Highlight>:</FormText>
      <Input value = {this.state.name} type="text" onChange={onChangeInputName} placeholder="Seu nome completo"/>
      <Input value = {this.state.email} type="email" onChange={onChangeInputEmail} placeholder="Seu email" onKeyDown={this.onEnter} />
      <SendButton onClick = {this.createUser}>Quero ser VIP!</SendButton>
      </FormContainer>

      <ListContainer>
        <Subtitle>Lista de gente <Highlight>VIP</Highlight>:</Subtitle>
        {this.state.allUsers.map ( (item) => {
                    return (
                    <ListItem>
                    <UserIcon src={staricon} />
                    <UserName> {item.name}</UserName>
                    <DeleteButton onClick = {() => this.deleteUser(item.id)}>(Essa pessoa não é VIP? Denuncie!)</DeleteButton>
                    </ListItem>
                    )
                })}
      </ListContainer >
    </AppContainer>
  )
}
}

export default App;
