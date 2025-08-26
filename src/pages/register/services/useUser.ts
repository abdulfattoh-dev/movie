import { useMutation, useQueryClient } from "@tanstack/react-query"
import { userApi } from "../../../shared/api"

export const user = "user"

export const useUser = () => {
    const client = useQueryClient()

    const register = useMutation({
        mutationFn: (data: any) => userApi.post("/register", data),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: [user] })
        }
    })

    const login = useMutation({
        mutationFn: (data: any) => userApi.post("/login", data),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: [user] })
        }
    })
    return { register, login }
}