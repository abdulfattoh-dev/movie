import { memo, type FC } from 'react';
import { IMAGE_URL } from '../../const';
import { useNavigate } from 'react-router-dom';

const Genres: Record<number, string> = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

interface Movie {
    id: number;
    title?: string;
    name?: string;
    poster_path: string;
    genre_ids: number[];
}


interface Props {
    data: Movie[]
    title?: string
    path?: string
    skip?: number
    count?: number
}

const MovieView: FC<Props> = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className="container mx-auto flex flex-col gap-5">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                {
                    data?.map((movie: any) => (
                        <div key={movie.id}>
                            <div className='rounded-xl overflow-hidden' onClick={() => navigate(`/movie/${movie.id}`)}>
                                <img loading='lazy' src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className='p-2'>
                                <h3 className='font-medium text-2xl line-clamp-1 text-white' title={movie.title ? movie.title : movie.name}>{movie.title ? movie.title : movie.name}</h3>
                                <div className='text-[#4D4D4D] flex gap-1.5 line-clamp-1 text-nowrap'>
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