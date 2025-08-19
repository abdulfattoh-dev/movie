import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const movie = "movie"

export const useMovie = () => {
    const getNowPlayingMovies = () => useQuery({
        queryKey: [movie],
        queryFn: () => api.get("movie/now_playing").then(res => res.data)
    })

    return { getNowPlayingMovies }
}