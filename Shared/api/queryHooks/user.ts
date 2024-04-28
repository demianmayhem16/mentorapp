import { useQuery } from "@tanstack/react-query";
import { getSessionUser } from "../commonActions";

export function useGetUser () {
    return useQuery({
        queryFn: async () => await getSessionUser(),
        queryKey: ['tempProduct']
    })
}
