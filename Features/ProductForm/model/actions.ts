'use server'
import { getSessionUser } from "@/Shared/api/commonActions"
import { revalidatePath } from "next/cache"



export async function CreateTempProductAction  (img: Array<{url: string}>)  {
    const url = img[0].url
    const user = await getSessionUser()

    // const existingProduct = await tempProductApi.getTempProduct(user?.id as string)
    
    // if (existingProduct && user?.id) {
    //     await tempProductApi.updateTempProduct(user.id, {...existingProduct, imageUrl: url})
    //     revalidatePath('/')

    // } else {
    //     await tempProductApi.createTempProduct({imageUrl: url, userId: user?.id as string, id: 'tempProduct'})
    //     revalidatePath('/')

    // }
    
 }


//  export async function GetDefaultProductFormValues () {

//     const user = await getSessionUser()

//     const defaultValues = await tempProductApi.getTempProduct(user?.id as string)
    
//     revalidatePath('/')
//     return defaultValues

//  }
