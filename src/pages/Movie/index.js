import React from "react";
import "./movie.css";
import api from "../../services/api";
import { useParams, useHistory } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [verifyMovie, setVerifyMovie] = React.useState("");
  const [addSuccess, setAddSuccess] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    async function loading() {
      const res = await api(`r-api/?api=filmes/${id}`);

      if (res.data.length === 0) {
        history.replace("/");
        return;
      }

      setMovie(res.data);
      setLoading(false);
    }
    loading();
  }, [id, history]);

  function savedMovie() {
    const items = window.localStorage.getItem("movies");
    const data = JSON.parse(items) || [];

    const hasMovie = data.some((movies) => movies.id === movie.id);
    if (hasMovie) {
      setVerifyMovie("Você já salvo esse filme!");
      setAddSuccess("");
      return;
    }

    data.push(movie);
    window.localStorage.setItem("movies", JSON.stringify(data));
    setAddSuccess("Filme salvo com sucesso!");
    setVerifyMovie("");
  }

  if (loading) return <h1>Carregando...</h1>;
  return (
    <div className="filme-info">
      <h1>
        {movie.nome}{" "}
        {(verifyMovie && (
          <small style={{ color: "brown" }}>- {verifyMovie}</small>
        )) ||
          (addSuccess && (
            <small style={{ color: "green" }}>- {addSuccess}</small>
          ))}
      </h1>
      <img src={movie.foto} alt={movie.nome} />
      <h3>Sinopse</h3>
      <p>{movie.sinopse}</p>
      <div>
        <button onClick={savedMovie}>Salvar</button>
        <a
          href={`https://youtube.com/results?search_query=${movie.nome} Trailer`}
          target="_blank"
          rel="noreferrer"
        >
          Trailer
        </a>
      </div>
    </div>
  );
};

export default Movie;
