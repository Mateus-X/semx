import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Bem vindo, estamos em época de eleição!</h2>
      <p>Escolha a modalidade e, posteriormente, a chapa eleitoral</p>
      <p>
        <Link to="/prefeitura">Prefeitura</Link>
      </p>
    </>
  );
}

export default Home;
