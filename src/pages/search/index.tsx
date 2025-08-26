import { memo, useEffect, useState, type ChangeEvent } from 'react';
import { useSearch } from './services/useSearch';
import MovieView from '../../shared/components/movie-view/MovieView';
import { useDebounce } from '../../shared/hooks/useDebounce';
import { useParamsHook } from '../../shared/hooks/useParams';
import { Search } from 'lucide-react';

const SearchPage = () => {
  const { getParam, setParam, removeParam } = useParamsHook()

  const [value, setValue] = useState(getParam("search"))
  // const paramValue = getParam("search") || ""
  const { getMoviesBySearch } = useSearch()
  const debouncedValue = useDebounce(value || '', 1000)

  const { data } = getMoviesBySearch({ query: debouncedValue })

  useEffect(() => {
    if (debouncedValue) {
      setParam("search", debouncedValue)
    } else {
      removeParam("search")
    }
  }, [debouncedValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className="container">
      <div className='flex justify-center'>
        <label htmlFor="search" className='flex border w-[32.2%] p-5 bg-[#111111] rounded-xl gap-4 border-none'>
          <Search className='text-red-500' />
          <input className='w-full placeholder:text-[#4D4D4D]' type="text" id='search' value={value || ''} onChange={handleChange} placeholder='Search...' />
        </label>
      </div>
      <div className='mt-6'>
        <MovieView data={data?.results} />
      </div>
    </div>
  );
};

export default memo(SearchPage);