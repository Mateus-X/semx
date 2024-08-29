import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangeList() {
  const [title, setTitle] = useState("");
  const [begindate, setBeginDate] = useState("");
  const [fdate, setEndDate] = useState("");
  const [chapa, setChapa] = useState(["", "", ""]);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (title && begindate && fdate && chapa.every((ch) => ch !== "")) {
      const data = {
        title,
        begindate,
        fdate,
        chapas: chapa,
      };

      fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      navigate("/");
    } else {
      alert("Todas as informações devem ser preenchidas");
    }
  }

  function handleChange(index, value) {
    const newChapa = [...chapa];
    newChapa[index] = value;
    setChapa(newChapa);
  }

  function handlePlusChapa() {
    setChapa([...chapa, ""]);
  }

  function handleMinusChapa(index) {
    if (chapa.length > 3) {
      const newChapa = chapa.filter((_, i) => i !== index);
      setChapa(newChapa);
    } else {
      alert("Não é possível ter menos de 3 chapas.");
    }
  }

  return (
    <form className="listing" onSubmit={handleSubmit}>
      <label htmlFor="titulo">Escolha o título da votação:</label>
      <input
        id="titulo"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="begindate">Escolha a data de início:</label>
      <input
        id="begindate"
        type="datetime-local"
        value={begindate}
        onChange={(e) => setBeginDate(e.target.value)}
        required
      />
      <label htmlFor="fdate">Escolha a data final:</label>
      <input
        id="fdate"
        type="datetime-local"
        value={fdate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      {chapa.map((chap, index) => (
        <div key={index}>
          <label htmlFor={`chapa${index}`}>Escolha a chapa {index + 1}:</label>
          <input
            id={`chapa${index}`}
            type="text"
            value={chap}
            onChange={(e) => handleChange(index, e.target.value)}
            required
          />
          <button type="button" onClick={handlePlusChapa}>
            Plus
          </button>
          <button type="button" onClick={() => handleMinusChapa(index)}>
            Minus
          </button>
        </div>
      ))}
      <button type="submit">Enviar votação</button>
    </form>
  );
}

export default ChangeList;
