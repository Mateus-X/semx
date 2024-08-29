import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Bem vindo, estamos em época de eleição!</h2>
      <p>
        Escolha entre criar uma votação ou entrar em uma votação já existente.
      </p>
      <p>
        <Link to="/create_vote">Criar votação</Link>
      </p>
      <p>
        <Link to="/current_votings">Votações atuais</Link>
      </p>
    </>
  );
}

export default Home;
