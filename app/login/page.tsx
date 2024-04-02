'use client'
import { GoogleIcon } from '@/Shared/icons/social'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { signIn } from 'next-auth/react'

export default function Login() {
    const loginWithGoogle = () =>
        signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })

    return (
    <div className='flex justify-center items-center h-screen'>
      <Card className="w-full max-w-sm bg-zink-950 border-opacity-20 "> 
        <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
             Login to your account faster!
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid gap-2">
            <Button className='flex gap-4' onClick={loginWithGoogle} > <GoogleIcon/> sign in with google </Button>
            </div>
        </CardContent>
     </Card>
 </div>
    )
}
