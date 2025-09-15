"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // IMPORT ESSENCIAL

const palavras = ["REACT", "JAVASCRIPT", "PYTHON", "COMPILER", "NEXTJS"];

export default function Forca() {
  const [palavraSecreta, setPalavraSecreta] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [input, setInput] = useState("");
  const maxErros = 6;

  useEffect(() => {
    setPalavraSecreta(palavras[Math.floor(Math.random() * palavras.length)]);
  }, []);

  const handleChute = () => {
    if (!palavraSecreta) return;
    const chute = input.toUpperCase().trim();
    if (!chute) return;

    if (chute.length > 1) {
      if (chute === palavraSecreta) {
        setLetrasUsadas(palavraSecreta.split(""));
        setLetrasErradas([]);
      } else {
        setLetrasErradas(Array(maxErros).fill("X"));
      }
      setInput("");
      return;
    }

    if (letrasUsadas.includes(chute) || letrasErradas.includes(chute)) {
      setInput("");
      return;
    }

    if (palavraSecreta.includes(chute)) {
      setLetrasUsadas([...letrasUsadas, chute]);
    } else {
      setLetrasErradas([...letrasErradas, chute]);
    }

    setInput("");
  };

  const reiniciar = () => {
    setPalavraSecreta(palavras[Math.floor(Math.random() * palavras.length)]);
    setLetrasUsadas([]);
    setLetrasErradas([]);
    setInput("");
  };

  const gameOver = letrasErradas.length >= maxErros;
  const venceu = palavraSecreta && palavraSecreta.split("").every(l => letrasUsadas.includes(l));

  if (!palavraSecreta) return null;

  return (
    <div className="forca-container">
      <h2>Jogo da Forca</h2>

      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {palavraSecreta.split("").map((letra, i) => (
          <span
            key={i}
            className={letrasUsadas.includes(letra) ? "correct-letters" : "_"}
            style={{ marginRight: "0.3rem" }}
          >
            {letrasUsadas.includes(letra) ? letra : "_"}
          </span>
        ))}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          maxLength={palavraSecreta.length}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleChute}>Chutar</button>
      </div>

      <p>
        Letras erradas:{" "}
        {letrasErradas.map((l, i) => (
          <span key={i} className="wrong-letters">{l} </span>
        ))}
      </p>

      <p>Tentativas restantes: {maxErros - letrasErradas.length}</p>

      {(gameOver || venceu) && (
        <div style={{ marginTop: "1rem" }}>
          {venceu ? <p>🎉 Parabéns! Você venceu!</p> : <p>💀 Game Over! Palavra: {palavraSecreta}</p>}
          <button onClick={reiniciar} style={{ marginRight: "0.5rem" }}>Reiniciar</button>
          <Link href="/">
            <button>🔙 Voltar para Mini Bio</button>
          </Link>
        </div>
      )}
    </div>
  );
}
