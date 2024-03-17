import { getServerSession } from 'next-auth'

export const getUserSession = async () => {
    const authUserSession = await getServerSession({
        callbacks: {
            session: (session) => {
                return session
            }
        }
    })

    console.log(authUserSession, 'AUTH SESSION')

    return authUserSession
}
