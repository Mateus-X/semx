import React, { useState } from "react";

function CreateList() {
  const [title, stitle] = useState("");
  const [begindate, sbegindate] = useState("");
  const [fdate, sfdate] = useState("");
  const [chapa, schapa] = useState(["", "", ""]);

  function handleSubmit(event) {
    if ((title, begindate, fdate, chapa)) {
    } else {
      alert("Todas as informações devem ser preenchidas");
    }
  }

  return (
    <>
      <form className="listing" action="/chapa_escolhida" method="POST">
        <label htmlFor="titulo">Escolha o titulo da votação:</label>
        <input id="titulo" type="text" name="title" value={title} required />
        <label htmlFor="begindate">Escolha a data de início:</label>
        <input
          id="begindate"
          type="datetime-local"
          value={begindate}
          required
        />
        <label htmlFor="fdate">Escolha a data final:</label>
        <input id="fdate" type="datetime-local" value={fdate} required />
        <label htmlFor="chapa">Escolha as chapas eleitorais:</label>
        <input id="chapa" type="text" name="title" value={chapa[1]} required />
        <input id="chapa" type="text" name="title" value={chapa[2]} required />
        <input id="chapa" type="text" name="title" value={chapa[3]} required />
        <button type="submit" />
      </form>
    </>
  );
}
