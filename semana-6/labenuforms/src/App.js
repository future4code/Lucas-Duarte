import React from 'react';

import logo from './assets/img/labenu-forms.png'
import nexticon from './assets/img/next.svg'

import {LogoStyle} from './AppStyle'
import {ContainerGeral} from './AppStyle'
import {Header} from './AppStyle'
import {Body} from './AppStyle'
import {Button} from './AppStyle'
import {NextIcon} from './AppStyle'

import Etapa1 from './assets/components/Etapa1'
import Etapa2 from './assets/components/Etapa2'
import Etapa3 from './assets/components/Etapa3'
import Final from './assets/components/Final'



class App extends React.Component{

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;

    }
  }

  proximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })


  }

  mostraBotao = () => {
  const botao = (this.state.etapa !==4) ? 
  <Button onClick={this.proximaEtapa}> Próxima etapa<NextIcon src={nexticon} /></Button> : <div></div>

  return botao
  }

  render() {

  return (
    <ContainerGeral>
      <Header><LogoStyle src={logo} /></Header>
      <Body>
      {this.renderizaEtapa()}
      {this.mostraBotao()}
      </Body>
    </ContainerGeral>
  )
}

}

export default App;

