import './Poster.css';

const POSTER_URL = import.meta.env.VITE_POSTER_URL;
const Poster = ({ index, posterPath }) => {
  return (
    <div key={index} className="poster-container">
      <img src={`${POSTER_URL}${posterPath}`} alt="movie poster" />
    </div>
  )
}

export { Poster };
