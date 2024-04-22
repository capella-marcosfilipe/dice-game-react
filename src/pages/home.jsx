import React, { useState } from "react";
import { Dado } from "../components/dado";

export default function Home() {
  const [jogador, setJogador] = useState(1);
  
  const [dadoJogador1, setDadoJogador1] = useState();
  const [dadoJogador2, setDadoJogador2] = useState();
  
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  
  const [rodadas, setRodadas] = useState(0);
  
  const [vencedor, setVencedor] = useState(null);

  const handleClickJogar = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    if (jogador === 1) {
      setDadoJogador1(valor);
      setJogador(2);
    } else {
      setDadoJogador2(valor);
      setJogador(1);
      if (dadoJogador1 && dadoJogador2) {
        if (dadoJogador1 > dadoJogador2) {
          setVitoriasJogador1(vitoriasJogador1 + 1);
        } else if (dadoJogador2 > dadoJogador1) {
          setVitoriasJogador2(vitoriasJogador2 + 1);
        }
        setRodadas(rodadas + 1);
      }
    }

    if (rodadas === 5) {
      if (vitoriasJogador1 > vitoriasJogador2) {
        setVencedor(1);
      } else if (vitoriasJogador2 > vitoriasJogador1) {
        setVencedor(2);
      } else {
        setVencedor("Empate");
      }
    }
  };

  const handleJogarNovamente = () => {
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setRodadas(0);
    setVencedor(null);
    setDadoJogador1();
    setDadoJogador2();
  };

  return (
    <>
      <div className="board">
        <div className="player-1">
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
          <button onClick={handleClickJogar} disabled={jogador !== 1}>
            Jogar Dado
          </button>
        </div>
        <div className="player-2">
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
          <button onClick={handleClickJogar} disabled={jogador !== 2}>
            Jogar Dado
          </button>
        </div>
      </div>
      <div className="placar">
        <div className="placar__rodadas">
          <h2>Placar</h2>
          <p><b>Jogador 1</b>: {vitoriasJogador1} vitórias</p>
          <p><b>Jogador 2</b>: {vitoriasJogador2} vitórias</p>
        </div>
        {vencedor && (
          <div className="placar__resultado">
            <h2>
              {vencedor === "Empate" ? "Empatou!" : `O Jogador ${vencedor} venceu o jogo!`}
            </h2>
            <button onClick={handleJogarNovamente}>Jogar Novamente</button>
          </div>
        )}
      </div>
    </>
  );
}

// Marcos Capella
