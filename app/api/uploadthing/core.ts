import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { userApi } from "@/Shared/api/modules/user";
import { getServerSession } from "next-auth";
 
const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      
      const session = await getServerSession()
    
      if (!session) throw new UploadThingError("Unauthorized");
      const user = await userApi.getUser(session.user?.email as string)

      if (!user) throw new UploadThingError("No such user");
 
      return { userId: user?.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("IMAGE file url", file.url);
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
    audioUploader: f({ audio: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
        const session = await getServerSession()
   
      if (!session) throw new UploadThingError("Unauthorized");

      const user = await userApi.getUser(session.user?.email as string)

      if (!user) throw new UploadThingError("No such user");
 
      return { userId: user?.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("AUDIO file url", file.url);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;