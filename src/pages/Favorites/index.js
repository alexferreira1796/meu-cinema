import React from "react";
import "./favorites.css";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const local = window.localStorage.getItem("movies");
    setMovies(JSON.parse(local) || []);
  }, []);

  function handleDelete(e) {
    const target = +e.target.dataset.set;
    const newMovies = movies.filter(({ id }) => id !== target);
    setMovies(newMovies);
    window.localStorage.setItem("movies", JSON.stringify(newMovies));
  }

  return (
    <>
      <div className="meus-filmes">
        <h1>Meus filmes</h1>
        {movies.length === 0 && <p>Nenhum filme salvo</p>}
        {movies.length > 0 && (
          <ul>
            {movies.map(({ id, nome }) => {
              return (
                <li key={id}>
                  <span>{nome}</span>
                  <div className="buttons">
                    <Link to={`/filme/${id}`}>Ver mais detalhes</Link>
                    <button data-set={id} onClick={handleDelete}>
                      Excluir
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Favorites;
