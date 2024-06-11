import { useState, useEffect, useCallback } from "react";
import { fetchMovies } from "../lib/api";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { useRouter } from "next/router";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchTerm = router.query.search ? String(router.query.search) : "Star";

  const loadMovies = useCallback(async () => {
    setLoading(true);
    setError("");
    const data = await fetchMovies(searchTerm, page);
    if (data.Response === "False") {
      setError(data.Error);
      if (page === 1) {
        setMovies([]);
      }
    } else {
      setMovies((prev) =>
        page === 1 ? data.Search : [...prev, ...data.Search]
      );
    }
    setLoading(false);
  }, [searchTerm, page]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="text-sw-light min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        {error && <p className="text-center text-sw-highlight">{error}</p>}
        {!error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie: any, i: number) => (
              <MovieCard key={i} movie={movie} index={i} />
            ))}
          </div>
        )}
        {loading && <p className="text-center mt-4">Loading...</p>}
      </div>
    </div>
  );
};

export default Home;
