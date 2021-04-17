import React from "react";
import "./styles.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [filmes, setFilmes] = React.useState([]);

  React.useEffect(() => {
    async function loadingFilmes() {
      const res = await api.get("r-api/?api=filmes");
      setFilmes(res.data);
    }
    loadingFilmes();
  }, []);

  return (
    <div className="container">
      {filmes &&
        filmes.map(({ id, nome, foto }) => {
          return (
            <div className="lista-filmes" key={id}>
              <article>
                <strong>{nome}</strong>
                <img src={foto} alt={nome} />
                <Link to="/">Acessar</Link>
              </article>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
