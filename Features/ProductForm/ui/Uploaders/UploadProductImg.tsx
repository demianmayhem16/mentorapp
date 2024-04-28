'use client'
import { FileUploader } from "@/Shared/components/FileUploader"
import { useCreateTemporaryProduct, useGetTemporaryProduct, useUdateTemporaryProduct } from "@/Shared/api/queryHooks/tempProducts";
import { useGetUser } from "@/Shared/api/queryHooks/user";
import { ImageSkeleton } from "../ImageSkeleton";
import { toast } from "sonner"
import Image from "next/image";

export const UploadProductImg = () => {
  const {mutate: create, isPending} = useCreateTemporaryProduct()
  const { data: tempProduct } = useGetTemporaryProduct();
  const {mutate: update, isPending: isUpdatePending} = useUdateTemporaryProduct()
  const {data: user} = useGetUser()


  const onClientUpload = (img: any) => {
     const newImage = img[0].url

    if (tempProduct?.imageUrl) {
      const id: string = tempProduct.id
      update({id: id, temporaryProduct: {imageUrl: newImage, id: id}}) 
    } else {
      create({id: 'tempProduct', imageUrl: newImage, userId: user?.id})
    }
 
    toast("cover image uploaded successfully", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
    })
  
  }


  if (isPending || isUpdatePending) {
    return <ImageSkeleton/>
  }


  const uploadOptions = {
        onClientUploadComplete: onClientUpload,
        onUploadError: (error: any) => {
          throw new Error(`image upload ERROR! ${error.message}`)
        },
        onUploadBegin: () => {},
  }

  return <FileUploader 
    fileToDisplay={<Image className="rounded-lg" src={tempProduct?.imageUrl as string}  alt='img' fill/>}
    loader={<ImageSkeleton/>} 
    upload={['imageUploader', uploadOptions]}
    defaultImgUrl={tempProduct?.imageUrl as string}
    />
}