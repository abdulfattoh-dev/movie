import { memo } from 'react';
import { useMovie } from './services/useMovie';
import MovieView from '../../shared/components/movie-view/MovieView';
import { useParamsHook } from '../../shared/hooks/useParams';
import { useGenre } from './services/useGenre';
import { Pagination, Select, type PaginationProps } from 'antd';
import { PERIOD } from '../../shared/static';

const Movie = () => {
  const { getParam, setParam, removeParam } = useParamsHook()
  const with_genres = getParam("genre") || "";
  const page = getParam("page") || "1";
  const period = getParam("period") || "";

  const item = PERIOD.find((i: any) => i.value === Number(period));

  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const { data: movieData, isLoading } = getMovies({
    page,
    with_genres,
    "release_date.gte": item?.gte,
    "release_date.lte": item?.lte
  });
  const { data: genreData } = getGenres();
  const genreOptions = genreData?.genres?.filter((genre: any) => {
    if (![99, 18, 9648, 10749, 10770].includes(genre.id)) {
      return genre
    }
  })?.map((genre: any) => ({
    value: genre.id,
    label: genre.name,
  }));

  const handleChangeGenre = (value: string) => {
    if (value == '') {
      removeParam('genre')
    } else {
      setParam("genre", value);
    }

    removeParam("page");
  };

  const handleChangePeriod = (value: string) => {
    if (value == '0') {
      removeParam('period')
    } else {
      setParam("period", value);
    }

    removeParam("page");
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    if (page === 1) {
      removeParam("page");
    } else {
      setParam("page", page);
    }
  };

  return (
    <div className="container">
      <div className='mb-30 mt-12 flex flex-col border'>
        <div className='flex flex-row-reverse gap-2 text-white'>
          <div className='flex flex-col'>
            <span className='text-[14px]'>Select a genre</span>
            <Select
              onChange={handleChangeGenre}
              className='w-35'
              defaultValue={'All'}
              options={[{ value: "", label: "All" }, ...(genreOptions || [])]} />
          </div>
          <div className='flex flex-col'>
            <span className='text-[14px]'>Select a period</span>
            <Select
              onChange={handleChangePeriod}
              className="w-35"
              defaultValue={'All'}
              options={PERIOD} />
          </div>
        </div>
        <div className='mt-12 mb-16'>
          <MovieView data={movieData?.results} />
        </div>
        <Pagination
          className='flex justify-center'
          current={Number(page)}
          onChange={onChange}
          showSizeChanger={false}
          total={movieData?.total_results > 10000 ? 10000 : movieData?.total_results}
          defaultPageSize={20}
        />
      </div>
    </div>
  );
};

export default memo(Movie);