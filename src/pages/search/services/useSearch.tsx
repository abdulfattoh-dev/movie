import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

interface IParams {
    query: string
}

export const useSearch = () => {

    const getMoviesBySearch = (params: IParams) => useQuery({
        queryKey: ["search-key", params],
        queryFn: () => api.get(`search/movie`, {params}).then(res => res.data)
    })

    return {getMoviesBySearch}
}