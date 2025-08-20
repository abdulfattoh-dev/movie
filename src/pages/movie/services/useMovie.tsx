import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const movieKey = "movieKey"


interface IParams {
    page?: string,
    with_genres?: string
    "release_date.gte"?: string
    "release_date.lte"?: string
}

export const useMovie = () => {
    const getMovies = (params?: IParams) => useQuery({
        queryKey: [movieKey, params],
        queryFn: () => api.get("discover/movie", { params: { ...params, without_genres: '99, 18, 9648, 10749, 10770' } }).then(res => res.data)
    })

    const getMovieById = (id: string) => useQuery({
        queryKey: [movieKey, id],
        queryFn: () => api.get(`movie/${id}`,).then(res => res.data)
    })

    return { getMovies, getMovieById }
}