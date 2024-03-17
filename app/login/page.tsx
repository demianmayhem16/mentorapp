'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { signIn } from 'next-auth/react'

export default function Login() {
    const loginWithGoogle = () =>
        signIn('google', { callbackUrl: 'http://localhost:3000/onboarding' })

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Card className="w-[350px] shadow-lg">
                <CardHeader>
                    <CardTitle>Nightcrawlers</CardTitle>
                    <CardDescription>Create an account in one-click!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={loginWithGoogle}> sign in with google </Button>
                </CardContent>
            </Card>
        </div>
    )
}
