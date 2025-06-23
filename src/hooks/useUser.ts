import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../services/user.service"

export const useUser = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    });
}