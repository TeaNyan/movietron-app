import { GetServerSideProps } from "next";
import { fetchMovieDetails } from "../../lib/api";
import Header from "../../components/Header";

const MovieDetail = ({ movie }: { movie: any }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 flex flex-col md:flex-row text-sw-light ">
        <div className="md:w-1/3">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 md:ml-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Rated:</strong> {movie.Rated}
          </p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Writer:</strong> {movie.Writer}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
          <p>
            <strong>Country:</strong> {movie.Country}
          </p>
          <p>
            <strong>Awards:</strong> {movie.Awards}
          </p>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Ratings</h2>
            {movie.Ratings.map((rating: any, index: number) => (
              <p key={index}>
                <strong>{rating.Source}:</strong> {rating.Value}
              </p>
            ))}
          </div>
          <p className="mt-4">
            <strong>IMDB Rating:</strong> {movie.imdbRating}
          </p>
          <p>
            <strong>IMDB Votes:</strong> {movie.imdbVotes}
          </p>
          <p>
            <strong>Type:</strong> {movie.Type}
          </p>
          {movie.Type && (
            <p>
              <strong>Total Seasons:</strong> {movie.totalSeasons}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const movie = await fetchMovieDetails(id as string);
  return {
    props: { movie },
  };
};

export default MovieDetail;
