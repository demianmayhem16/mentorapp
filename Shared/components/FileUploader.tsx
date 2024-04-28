'use client'
import { useUploadThing } from "@/Shared/hooks/uploadThing";
import { useDropzone } from "@uploadthing/react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import Image from "next/image";


type Props = {
    loader: ReactNode 
    upload: Parameters<typeof useUploadThing>
    className?: string
    uploaderBody?: ReactNode
    defaultImgUrl: string
    fileToDisplay: ReactNode
}


export const FileUploader = ({loader, upload: [uploaderFileType, options], className, uploaderBody, defaultImgUrl, fileToDisplay}:  Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);
 

 const { startUpload, permittedFileInfo, isUploading } = useUploadThing(
        uploaderFileType,
        options
      );

    const fileTypes = permittedFileInfo?.config
      ? Object.keys(permittedFileInfo?.config)
      : [];


    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
      });

    useEffect(() => {
        if (files.length > 0) {
            startUpload(files)
        }
    }, [files.length] )

    if (isUploading) {
        return <> {loader} </>
    }

    const UploaderBody = uploaderBody ? uploaderBody : <>     
    <p className="text-gray-600">Drag and drop files here or click to upload</p> 
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>  
    
    </> 
      return (
        <div 
        className={`border-2 border-dashed border-gray-400 rounded-lg flex flex-col
         items-center justify-center hover:bg-gray-900/10 flex-1 relative cursor-pointer text-center p-2 h-[300px] w-[300px] ${className}`}
         {...getRootProps()}>

        {defaultImgUrl ? fileToDisplay : UploaderBody}

        <input {...getInputProps()}/>
        </div> 
      );  
}