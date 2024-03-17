import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

//POSTGRES_URL="postgres://default:xptPLD0B2YXZ@ep-dark-voice-a4sa0usz-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require"
export const env = createEnv({
    server: {
        POSTGRES_URL: z.string().url(),
        CLIENT_SECRET: z.string(),
        CLIENT_ID: z.string(),
        NEXTAUTH_SECRET: z.string()
    },
    client: {},
    // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
    runtimeEnv: {
        POSTGRES_URL: process.env.POSTGRES_URL,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        CLIENT_ID: process.env.CLIENT_ID,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    }
    // For Next.js >= 13.4.4, you only need to destructure client variables:
    // experimental__runtimeEnv: {
    //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    // }
})
