import React from 'react';
import axios from 'axios'
import {AppContainer} from "./Appstyle"

import UsersList from './components/UsersList'

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
        Authorization: "fulano-dasilva-jackson"
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
      Authorization: "fulano-dasilva-jackson"
    }}
  )

  request.then((response) => {
    alert(`O usuário ${this.state.name} com email ${this.state.email} foi criado`)
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
        Authorization: "fulano-dasilva-jackson"
      }
    }
  )

    requestdelete
    .then((response) => {
      alert(`O usuário ${this.state.name} foi deletado`)
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
      <input value = {this.state.name} onChange={onChangeInputName} placeholder="Nome"/>
      <input value = {this.state.email} onChange={onChangeInputEmail} placeholder="Email" onKeyDown={this.onEnter} />
      <button onClick = {this.createUser}> Enviar</button>

      <div>
        <h3>Usuários:</h3>
        {this.state.allUsers.map ( (item) => {
                    return (
                    <div>
                    <p> {item.name} - <button onClick = {() => this.deleteUser(item.id)} >deletar</button></p>
                    </div>
                    )
                })}
      </div>
    </AppContainer>
  )
}
}

export default App;
