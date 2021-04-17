import React from "react";
import "./home.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [movie, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadingFilmes() {
      const res = await api.get("r-api/?api=filmes");
      setMovies(res.data);
      setLoading(false);
    }
    loadingFilmes();
  }, []);

  if (loading) return <h1>Carregando...</h1>;
  return (
    <div className="container">
      <div className="lista-filmes">
        {movie &&
          movie.map(({ id, nome, foto }) => {
            return (
              <article key={id}>
                <strong>{nome}</strong>
                <img src={foto} alt={nome} />
                <Link to={`/filme/${id}`}>Acessar</Link>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
