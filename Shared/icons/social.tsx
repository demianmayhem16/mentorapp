import google from '@/Shared/assets/google.png'
import Image from 'next/image'

export const GoogleIcon = () => {
    return <Image  src={google.src} alt='google' width={30} height={30} />
}