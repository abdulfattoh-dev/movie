import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const movieKey = "movieKey"

export const useMovie = () => {
    const getMovieLists = (path: string) => useQuery({
        queryKey: [movieKey],
        queryFn: () => api.get(path).then(res => res.data)
    })

    return { getMovieLists }
}