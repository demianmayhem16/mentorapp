import { env } from '@/env'
import { createUser, getUser, updateUser } from '@/queries/users'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
    secret: 'mayhem_ddwave_crawl_secret_99988324',
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: '595290021001-b4orphhfbsc30jlsnri15pnhm6cnuhme.apps.googleusercontent.com',
            clientSecret: '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',
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (!profile?.email) {
                throw new Error('no profile!')
            }

            try {
                const user = await getUser(profile.email)
                const { email, name } = profile
                if (!user) {
                    const createdUser = await createUser({ id: '1', email, role: 'beatmaker' })
                    console.log(createdUser, 'CREATE USER')
                } else {
                    const newUser = { name: name, email: email, id: 'id2' }
                    const updatedUser = await updateUser(newUser, user.id)
                    console.log(updatedUser, 'UPDATED USER')
                }
            } catch (e) {
                console.log(e, 'create user error')
            }

            return true
        }
    }
}
