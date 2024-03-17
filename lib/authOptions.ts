import { ERoles } from '@/Shared/types'
import { env } from '@/env'
import { createUser, getUser, updateUser } from '@/Shared/service/users'
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
                    const userId = String(Math.random())
                    await createUser({
                        id: userId,
                        email,
                        role: 'ADMIN',
                        name
                    })
                } else {
                    const newUser = { name: name, email: email, role: ERoles.ADMIN }
                    await updateUser(newUser, user.id)
                }
            } catch (e) {
                console.log(e, 'create user error')
            }

            return true
        }
    }
}
