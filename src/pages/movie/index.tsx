import { memo } from 'react';
import { useMovie } from './services/useMovie';
import MovieView from '../../shared/components/movie-view/MovieView';

const Movie = () => {
  const { getMovieLists } = useMovie()
  const { data: trendingAllData } = getMovieLists('trending/all/day')
  const { data: popularMoviesData } = getMovieLists('movie/popular')
  const { data: topRatedMoviesData } = getMovieLists('movie/top_rated')
  const { data: upcomingMoviesData } = getMovieLists('movie/upcoming')

  return (
    <div className="Index mb-30 mt-12 flex flex-col gap-12">
      <MovieView data={trendingAllData?.results} title='Trending' path='/trending' count={4} />
      <MovieView data={popularMoviesData?.results} title='Popular' path='/popular' skip={4} count={4} />
      <MovieView data={topRatedMoviesData?.results} title='Top Rated' path='/top_rated' skip={8} count={4} />
      <MovieView data={upcomingMoviesData?.results} title='Upcoming' path='/upcoming' skip={12} count={4} />
    </div>
  );
};

export default memo(Movie);