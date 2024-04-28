
import { useMutation, useQuery } from "@tanstack/react-query";
import { createTempProduct, getTempProduct, updateTempProduct } from "../modules/temporaryProductTemplate";
import { getSessionUser } from "../commonActions";
import { NewTemporaryProduct, TemporaryProduct } from "@/lib/schema";

export function useGetTemporaryProduct () {
    return useQuery({
        queryFn: async () => {
             const user = await getSessionUser()
             return await getTempProduct(user?.id as string)
        },
        queryKey: ['tempProduct']
    })
}

export function useCreateTemporaryProduct () {
    return useMutation({
        mutationFn: async (temporaryProduct: Partial<TemporaryProduct>) => {
             return await createTempProduct(temporaryProduct)
        },
        mutationKey: ['tempProduct']
    })
}

export function useUdateTemporaryProduct () {
    return useMutation({
        mutationFn: async ({id, temporaryProduct}: {id: string, temporaryProduct: Partial<NewTemporaryProduct>}) => {
             return await updateTempProduct(id, temporaryProduct as NewTemporaryProduct)
        },
        mutationKey: ['tempProduct']
    })
}