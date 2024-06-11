import Link from "next/link";

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  };
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, index }) => {
  return (
    <Link key={`${movie.imdbID} + ${index}`} href={`/movie/${movie.imdbID}`}>
      <div className="group border border-sw-dark p-4 rounded hover:bg-sw-highlight w-full h-full flex flex-col text-sw-light">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-96 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-lg mt-2 group-hover:text-sw-dark">
          <b>{movie.Title}</b>
        </h2>
        <p className="group-hover:text-sw-dark">{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
