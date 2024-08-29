import React, { useState } from "react";

function ListMayor() {
  const [SMayor, setSMayor] = useState("");
  const [Sucess, setSucess] = useState(false);
  const [begindate, sbegindate] = useState("");
  const [fdate, sfdate] = useState("");

  const mayors = [
    { name: "Rafa Greca", type: "prefeito" },
    { name: "Requião", type: "prefeito" },
    { name: "Ney Leprevot", type: "prefeito" },
  ];

  function handleVote(event) {
    if (SMayor) {
      event.currentTarget.disabled = true;
      console.log(`+1 voto: ${SMayor}`);
      setSucess(true);
    } else {
      alert("Escolha um candidato");
    }
  }

  return (
    <>
      <h2>
        <strong>Vote no seu candidato a prefeito! *exemplo sem backend*</strong>
      </h2>
      <h3>
        Data de começo: {begindate}. Data de término:{fdate}
      </h3>
      <div>
        <ul className="list-poli">
          {mayors.map((item, index) => (
            <li key={index}>
              <input
                type="radio"
                id={`radio-prefeito-${index}`}
                name="politician"
                value={item.name}
                onChange={() => setSMayor(item.name)}
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

export default ListMayor;
