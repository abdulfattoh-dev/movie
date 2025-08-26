import { useMutation, useQueryClient } from "@tanstack/react-query"
import { userApi } from "../../../shared/api"

export const verifyOtp = "verifyOtp"

export const useVerifyOtp = () => {
    const client = useQueryClient()

    const verifyOtp = useMutation({
        mutationFn: (data: any) => userApi.post("/verify-otp", data),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: [verifyOtp] })
        }
    })
    return { verifyOtp }
}