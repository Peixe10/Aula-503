import React, { Component } from 'react';
import './Pontuacao.css';

class Pontuacao extends Component {
    constructor(props){ // 1 - Sempre que criar o construtor usar o props lá dentro.
        super(props); //1.1 - Super é uma palavra que significa instancia a classe que está sendo extendida. E assim como o construtor recebe o props o super também deve receber o Props. Explicação 2: O component é uma classe que extende a classe PlacarTime, e o React antes de executar o contructor do PlacarTime precisa executar o constructor do Component, que é o pai (super classe).
        this.time = "Time da casa";
        this.state = {
            gols:0
        } //3 - Precisa criar o state porque ele não cria. A chave gols é optativa, não precisa criar, mas a chama state precisa criar para dizer que esse objeto tem estado.  
    }

    atualizar = () => {

        this.setState({
            gols:this.state.gols + 1
        }); //4 - Atualiza o state, vai no react DOM e avisa que ela atualizou o state, faz uma chamada no React DOM utiliza o comando e devolve para o React DOM. Outra vantagem: nao recarrega a página, olha os JSX que ele já carregou e só substitui as diferenças. É muito mais rápido pois atualiza só um componente sem mexer no restante.
    }

    render() {
        if(this.props.visitante === "true"){ //2 - Esta conferindo se o time da casa é igual ao time visitante. Ou seja, se encontrar o mesmo nome ele substitui o segundo que está igual por time visitante.
            this.time = "Time visitante";
        }

        return (
            <div className="pontuacao">
                <h1>{this.props.nomeDoTime || this.time}</h1>
                <h2>{this.state.gols}</h2>
                <button className="gol" onClick={this.atualizar}>
                    GOL!
                </button>
            </div>
        );
    }
}

export default Pontuacao;
//Props passar uma  para outras instancias
//State também é um objeto mas não exisite por padrão diferentemente do Props, ele está contido no proprio componente e pode ser atualizado pelo próprio componente.