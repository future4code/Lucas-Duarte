import React from 'react';
import axios from 'axios'
import {FormContainer, Form, FormText, Input, SendButton} from "./FormCreateUser-style"
import {Highlight, Subtitle} from "../../Appstyle"

class FormCreateUser extends React.Component {

  state = {
    name: "",
    email: "",
  }
  
  onEnter = (event) => {
    if(this.state.name !== "" && this.state.email !== "" && event.key === "Enter") {
      this.createUser()
    }
  }

  createUser = () => {

    if (this.state.name !== "" && this.state.email !== "") {
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
          this.setState({ name: "", email: ""})
          this.props.toChangePage()
          console.log(response.data.result)
        })
          .catch((error) => {
            console.log("Erro:", error)
            alert(`Digite um email válido e utilize um nome e email ainda não cadastrados!`)
          })

        }
  else {
    alert("Preencha seu nome e sobrenome para virar VIP!")
  }

}      


    render() {

        const onChangeInputName = (event) => {
            this.setState({ name: event.target.value})
          }
        
          const onChangeInputEmail = (event) => {
            this.setState({ email: event.target.value})
          }

        return (
            <FormContainer>
            <Subtitle>Cansado de não ser ninguém? <br/><Highlight>Seja VIP!</Highlight></Subtitle>
            <Form>
              <FormText>Faça seu cadastro e entre agora mesmo para uma seleta lista de <Highlight>pessoas VIP</Highlight>:</FormText>
              <Input value = {this.state.name} type="text" onChange={onChangeInputName} placeholder="Seu nome completo"/>
              <Input value = {this.state.email} type="email" onChange={onChangeInputEmail} placeholder="Seu email" onKeyDown={this.onEnter} />
              <SendButton onClick = {this.createUser}>Quero ser VIP!</SendButton>
            </Form>
            </FormContainer>
        )
    }

}

export default FormCreateUser;

