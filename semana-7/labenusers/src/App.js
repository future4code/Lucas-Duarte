import React from 'react';

// style
import {AppContainer, Header, Logotype, Footer, LabenuLogo, Credit} from "./Appstyle"

// componentes
import FormCreateUser from './components/FormCreateUser/FormCreateUser'
import UsersList from './components/UsersList/UsersList'

// imagens
import logo from './img/logo.svg'
import labenu from './img/labenu.png'

class App extends React.Component {

state = {
  currentPage: "formPage",
  // name: "",
  // email: "",
  // allUsers: [],
}

changePage = () => {
  this.state.currentPage === "formPage"
    ? this.setState({ currentPage: "userListPage" })
    : this.setState({ currentPage: "formPage" });
};

render() {

  const currentPage = () => {
    if (this.state.currentPage === "formPage") {
      return  <FormCreateUser toChangePage={this.changePage}/>;
    } else if (this.state.currentPage === "userListPage") {
      return <UsersList toChangePage={this.changePage}/>;
    }
  };

  return (
    <AppContainer>
      <Header>
        <Logotype src={logo} />
        {/* <button onClick = {this.changePage}>mudar de pagina</button> */}
      </Header>
      {currentPage()}
    <Footer>
      <Credit>SejaVip© foi criado por <strong>@dolucasduarte</strong> como um exercício na Labenu!</Credit>
      <LabenuLogo src={labenu}/>
    </Footer>
    </AppContainer>
  )
}
}

export default App;
