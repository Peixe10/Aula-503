import React, { Component } from 'react';
import './App.css';
import Pontuacao from './Pontuacao';

class App extends Component {
  constructor(props){ //Está forçando ele a renderizar os elementos
    super(props);
    this.state = {
      time1: '',
      time2: '',
      placar1: 0,
      placar2: 0
    }
  }

  reiniciar = () => { //Atualiza diretamente as duas variáveis para zero.
    this.setState({
      time1: 'lalala',
      time2: 'lelele',
      placar1: 0,
      placar2: 0
    });
  }
  
  incrementar = time => {
    if(time === "1"){
      this.setState({
        placar1: this.state.placar1 + 1
      });
    }
    if(time === "2"){
      this.setState({
        placar2: this.state.placar2 + 1
      });
    }
  }

  render() {
    return (
      <div>
      <div className="placar">
        <Pontuacao cliqueBotao={this.incrementar} nomeDoTime={this.state.time1} gols={this.state.placar1} numero="1"/> 
        X
        <Pontuacao cliqueBotao={this.incrementar} nomeDoTime={this.state.time2} gols={this.state.placar2} numero="2" visitante="true"/>
      </div>
      <div className="controles">
        <label>Time da casa</label>
        <input type="text" placeholder="Digite o nome do time da casa" />
        <label>Time visitante</label>
        <input type="text" placeholder="Digite o nome do time visitante" />
        <button onClick={this.reiniciar}>Reiniciar</button>
      </div>
      </div>
    );
  }
}

export default App;
