function ListV() {
  const vereadores = [
    { name: "Veracir", type: "Vereador" },
    { name: "Adão", type: "Vereador" },
    { name: "Macedo", type: "Vereador" },
  ];

  return (
    <>
      <h2>
        <strong>Vote no seu candidato a Vereador!</strong>
      </h2>

      <div>
        <ul className="list-poli">
          {vereadores.map((item, index) => (
            <li key={index}>
              <input
                type="radio"
                id={`radio-vereador-${index}`}
                name="politician"
                value={item.name}
              />
              <label htmlFor={`radio-vereador-${index}`}>{item.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListV;
