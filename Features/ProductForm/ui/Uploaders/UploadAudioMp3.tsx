'use client'
import { FileUploader } from "@/Shared/components/FileUploader"
import { useCreateTemporaryProduct, useGetTemporaryProduct, useUdateTemporaryProduct } from "@/Shared/api/queryHooks/tempProducts";
import { useGetUser } from "@/Shared/api/queryHooks/user";
import { toast } from "sonner"
import { AudioSkeleton } from "../AudioSkeleton";
import Image from "next/image";

export const UploadProductAudioMp3 = () => {
  const {mutate: create, isPending} = useCreateTemporaryProduct()
  const { data: tempProduct } = useGetTemporaryProduct();
  const {mutate: update, isPending: isUpdatePending} = useUdateTemporaryProduct()
  const {data: user} = useGetUser()


  const onClientUpload = (img: any) => {
     const newMp3Audio = img[0].url

    if (tempProduct?.audioUrlMp3) {
      const id: string = tempProduct.id
      update({id: id, temporaryProduct: {audioUrlMp3: newMp3Audio, id: id}}) 
    } else {
      create({id: 'tempProduct', audioUrlMp3: newMp3Audio, userId: user?.id})
    }
 
    toast("MP3 audio  was uploaded successfully!", {
        description: "WAV was generated as well",
    })
  
  }


  if (isPending || isUpdatePending) {
    return <AudioSkeleton/>
  }


  const uploadOptions = {
        onClientUploadComplete: onClientUpload,
        onUploadError: (error: any) => {
          throw new Error(`audio mp3 upload ERROR! ${error.message}`)
        },
        onUploadBegin: () => {},
  }

  return <FileUploader 
    fileToDisplay={<Image className="rounded-lg" src={tempProduct?.audioUrlMp3 as string}  alt='img' fill/>}
    loader={ <AudioSkeleton/>} 
    upload={['audioUploader', uploadOptions]}
    defaultImgUrl={tempProduct?.audioUrlMp3 as string}
    uploaderBody={<>     
        <p className="text-gray-600">Drag and drop files here or click to upload</p> 
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">audio format - MP3 (MAX. 800x400px)</p></>}
    />
}