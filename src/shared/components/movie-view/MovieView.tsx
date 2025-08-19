import { memo, type FC } from 'react';
import { IMAGE_URL } from '../../const';
import { useNavigate } from 'react-router-dom';

enum Genres {
    Action = 28,
    Adventure = 12,
    Animation = 16,
    Comedy = 35,
    Crime = 80,
    Documentary = 99,
    Drama = 18,
    Family = 10751,
    Fantasy = 14,
    History = 36,
    Horror = 27,
    Music = 10402,
    Mystery = 9648,
    Romance = 10749,
    Sciencefiction = 878,
    Tvmovie = 10770,
    Thriller = 53,
    War = 10752,
    Western = 37
}

interface Props {
    data: any
    title: string
    path: string
    skip?: number
    count: number
}

const MovieView: FC<Props> = ({ data, title, path, skip = 0, count }) => {
    const navigate = useNavigate()
    return (
        <div className="container mx-auto flex flex-col gap-5">
            <div className='flex justify-between'>
                <h4 className='text-2xl text-white'>{title}</h4>
                <p onClick={() => navigate(`${path}`)} className='text-[#4D4D4D] text-[16px] hover:text-[#C61F1F] cursor-pointer'>Show all {'>'}</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                {
                    (count ? data?.slice(skip, count + skip) : data)?.map((movie: any) => (
                        <div key={movie.id}>
                            <div className='rounded-xl overflow-hidden' onClick={() => navigate(`/movie/${movie.id}`)}>
                                <img loading='lazy' src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className='p-2'>
                                <h3 className='font-medium text-2xl line-clamp-1 text-white' title={movie.title ? movie.title : movie.name}>{movie.title ? movie.title : movie.name}</h3>
                                <div className='text-[#4D4D4D] flex gap-1.5 line-clamp-1'>
                                    {
                                        movie?.genre_ids.map((id: number) => (
                                            <p key={id} className='text-[#4D4D4D]'>{Genres[id]}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default memo(MovieView);