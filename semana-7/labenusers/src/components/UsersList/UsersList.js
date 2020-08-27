import React from 'react';
import axios from 'axios'

// style
import {Subtitle, Highlight} from "../../Appstyle"

import {ListContainer, BackIconContainer, BackIcon, BackIconLabel, ListItemContainer, ListItem, UserIcon, UserName, LinkButton, SmallText} from "./UsersList-style"
//detalhes:
import {DetailsContainer, EmailContainer, EmailIcon, EmailText} from './UsersList-style'
// edit:
import {EditContainer,EditInput} from './UsersList-style'

// imagens
import staricon from '../../img/star-icon.svg'
import backicon from '../../img/back-arrow.svg'
import emailicon from '../../img/email-icon.svg'

const axiosConfig = {
  headers: {
    Authorization: "lucas-duarte-jackson"
  }
};

class UsersList extends React.Component {

  state = {
     allUsers: [],
     showUserEmail: false,
     showEditUser: false,
     userEmail: "",
     userID: "",
     userName:"",
     inputEditName:"",
     inputEditEmail:"",
  }

  goBack = () => {
    this.props.toChangePage()
  }

  getAllUsers = () => {

    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      axiosConfig
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
      
      
  deleteUser = (id) => {
        
    const confirmation = prompt(`Você garante que essa pessoa não é vip? (responda com "s/n")`)

    if (confirmation === "sim" || confirmation === "s" || confirmation === "SIM" || confirmation === "S") {
      const requestDelete = axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        axiosConfig
      )
        
        requestDelete
        .then((response) => {
          alert(`Obrigado pela denúncia! Essa pessoa foi deletada da lista VIP`)
          this.getAllUsers()
        })
        .catch((error) => {
          alert(`Algum erro aconteceu. Por favor, tente novamente.`)
            })

    } else {
      alert("OK. Essa pessoa continuará sendo VIP!")
      }
      
  }

  getUserById = (id) => {

    const requestUser = axios.get(
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    axiosConfig
    )

    requestUser
    .then( (response) => {
      console.log("resposta", response.data)
      this.setState({showUserEmail: true, userEmail: response.data.email, userID: response.data.id, userName: response.data.name})
    })
    .catch((error) => {
      console.log("erro", error)
    })
  }

  showEditUser = () => {
    this.setState({showEditUser:!this.state.showEditUser})
  }

  onEnterEdit = (event) => {
    if(this.state.inputEditName !== "" && this.state.inputEditName !== "" && event.key === "Enter") {
      this.editUser(this.state.userID)
    }
  }
  
  editUser = (id) => {
    
    if (this.state.inputEditName !== "" && this.state.inputEditEmail !== "") {

    const body = {
      name: this.state.inputEditName,
      email: this.state.inputEditEmail,
    }

    const requestEdit = axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      body,
      axiosConfig
    )

    requestEdit
    .then( (response) => {
      this.setState({inputEditName:"", inputEditEmail: "", showUserEmail: false, showEditUser: false, })
      this.getAllUsers()
    })
    .catch( (error) => {
      console.log("deu erro pra editar", error)
    })

  } else {
    alert("Escolha um novo nome e um novo email!")
  }

  }



    render() {

    const userDetails = () => {
      if (this.state.showUserEmail) {
        return (
        <DetailsContainer>
          <EmailContainer>
          <EmailIcon src={emailicon}/>
          <EmailText>O email de {this.state.userName} é <strong>{this.state.userEmail}</strong></EmailText>
          </EmailContainer>
          <LinkButton onClick={this.showEditUser} type={"edit"}><strong>Editar informações de {this.state.userName}</strong></LinkButton>
          {editUser()}
        </DetailsContainer>)
      }
    }

    const onChangeEditName = (event) => {
      this.setState({ inputEditName: event.target.value})
    }
  
    const onChangeEditEmail = (event) => {
      this.setState({ inputEditEmail: event.target.value})
    }

    const editUser = () => {
      if (this.state.showEditUser) {
        return (
          <EditContainer>
          <EditInput type={"nome"} value = {this.state.inputEditName} placeholder="Novo nome" onChange ={onChangeEditName}/>
          <EditInput value = {this.state.inputEditEmail} placeholder="Novo email" onChange = {onChangeEditEmail} onKeyDown={this.onEnterEdit} />
          <LinkButton type={"edit"} onClick={() => this.editUser(this.state.userID)}><strong>Confirmar >></strong></LinkButton>
          </EditContainer>  
        )
      }
    }

        return (
            <ListContainer>
                <Subtitle>Parabéns! Você agora faz parte da nossa Lista <Highlight>VIP</Highlight>!</Subtitle>

                <BackIconContainer>
                <BackIcon src={backicon} onClick = {this.goBack}/>
                <BackIconLabel onClick = {this.goBack}>Voltar</BackIconLabel>
                </BackIconContainer>

                    {this.state.allUsers.map ( (item) => {
                        return (
                    <ListItemContainer>
                    <ListItem>
                    <UserIcon src={staricon} />
                    <UserName> {item.name}</UserName>
                    <LinkButton onClick = {() => this.getUserById(item.id)}> <strong>Ver detalhes</strong> </LinkButton>
                    <SmallText>|</SmallText>
                    <LinkButton onClick = {() => this.deleteUser(item.id)}>(Essa pessoa não é VIP? Denuncie!)</LinkButton>
                    </ListItem>
                    {this.state.userID === item.id && userDetails()}
                    </ListItemContainer>
                    )
                })}

              {/* {this.state.showUserEmail && 
                    <div>
                        Email: {this.state.userEmail}
                    </div>} */}

            </ListContainer >
        )
    }

}

export default UsersList;
