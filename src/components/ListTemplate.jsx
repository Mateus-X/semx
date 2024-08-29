import React, { useState } from "react";

function ListChapa() {
  const [SChapa, setSChapa] = useState("");
  const [Sucess, setSucess] = useState(false);

  let Chapas = [];

  function handleVote(event) {
    if (SMayor) {
      event.currentTarget.disabled = true;
      console.log(`+1 voto: ${SChapa}`);
      setSucess(true);
    } else {
      alert("Escolha um candidato");
    }
  }

  return (
    <>
      <h2>
        <strong>Vote no seu candidato a prefeito!</strong>
      </h2>

      <div>
        <ul className="list-poli">
          {Chapas.map((item, index) => (
            <li key={index}>
              <input
                type="radio"
                id={`radio-prefeito-${index}`}
                name="politician"
                value={item.name}
                onChange={() => setSChapa(item.name)}
              />
              <label htmlFor={`radio-prefeito-${index}`}>{item.name}</label>
            </li>
          ))}
          <button type="submit" name="vote-computed" onClick={handleVote}>
            Computar Voto
          </button>
        </ul>

        {Sucess && <p>Seu voto foi computado!</p>}
      </div>
    </>
  );
}

export default ListChapa;
