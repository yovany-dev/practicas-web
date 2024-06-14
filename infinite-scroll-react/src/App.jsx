import { useState, useEffect, useRef } from 'react';
import { Poster } from './components/Poster';
import './App.css';


function App() {
  const containerMovies = useRef(null)
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-MX&page=${page}`;

  const callback = entries => {
    const [ entry ] = entries;

    if (entry.isIntersecting) {
      setPage(page +1);
    }
  }

  const options = {
    root: null,
    rootMargin: '0px 0px 200px 0px',
    threshold: 1.0,
  }

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      setResults([...results, ...data.results]);
    })
  }, [page]);

  useEffect(() => {
    if (page > 1000) return;

    const observer = new IntersectionObserver(callback, options);
    const lastPoster = containerMovies.current.lastElementChild;

    if (lastPoster) observer.observe(lastPoster);
    return () => {
      if (lastPoster) observer.unobserve(lastPoster);
    }
  }, [results]);

  return (
    <>
      <div className='bg'></div>
      <div className="content">
        <h1 className="title">Mejores películas en 2024</h1>
        <div ref={containerMovies} className="container-movies">
          {
            results.map((movie, index) => {
              return (
                <Poster key={index} posterPath={movie.poster_path} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
