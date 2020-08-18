import React from 'react'

import {AppContainer, TarefaList, Tarefa, InputsContainer} from './style'


class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  } 

  componentDidMount() {
    this.setState({tarefas: JSON.parse(localStorage.getItem("tarefas"))})
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue:event.target.value
    })
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro:event.target.value
    })
  }

  apertouEnter = (event) =>{
    if(event.key === "Enter") {
      this.criaTarefa()
    }
  }

  criaTarefa = () => {

    if (this.state.inputValue !== "") {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false,
        mostrarTarefa: true
      }

      const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]

      this.setState({tarefas: novaListaDeTarefas})
      this.setState({inputValue: ""})
    }
  }

  selectTarefa = (id) => {

    const novaLista = this.state.tarefas.map( (tarefa) => {

      if (id === tarefa.id) {
        return(
          {... tarefa, 
            completa:!tarefa.completa
          }
          )
      } else {
        return tarefa
      }
    })

    this.setState({tarefas:novaLista})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <AppContainer>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}
          onKeyDown={this.apertouEnter}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </AppContainer>
    )
  }
}

export default App
