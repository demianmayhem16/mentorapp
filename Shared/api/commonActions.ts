'use server'

import { getServerSession } from "next-auth"
import { userApi } from "./modules/user"



export const getSessionUser = async () => {
    'use server'
    const session = await getServerSession()
    const user = session?.user?.email

    if (!user) {
        throw new Error('no session user found in the getSessionUser action!')
    }

    const dbUser = await userApi.getUser(session?.user?.email as string)

    return dbUser
}


// export const audio = async () => {
//     const ffmpeg = new FFmpeg();
//     ffmpeg.whenReady(async () => {
//         await ffmpeg.exec(['-help']);
//       });
// }