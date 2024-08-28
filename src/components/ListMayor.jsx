function ListMayor() {
  const mayors = [
    { name: "Rafa Greca", type: "prefeito" },
    { name: "Requião", type: "prefeito" },
    { name: "Ney Leprevot", type: "prefeito" },
  ];

  return (
    <>
      <h2>
        <strong>Vote no seu candidato a prefeito!</strong>
      </h2>

      <div>
        <ul className="list-poli">
          {mayors.map((item, index) => (
            <li key={index}>
              <input
                type="radio"
                id={`radio-prefeito-${index}`}
                name="politician"
                value={item.name}
              />
              <label htmlFor={`radio-prefeito-${index}`}>{item.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListMayor;
