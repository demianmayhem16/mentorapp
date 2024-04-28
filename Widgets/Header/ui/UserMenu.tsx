import { TSessionUser } from '@/Shared/types/types'
import Image from 'next/image'

const UserMenu = ({ name, image }: Partial<TSessionUser>) => {
    return (
        <div className='flex gap-4 items-center  bg-white/20  backdrop-blur-lg rounded drop-shadow-lg ' >
            {name}
             <Image 
              className='rounded-full' 
              src={image as string}
              width={40} 
              height={40}  
              alt="user img" />
        </div>
    )
}

export { UserMenu }
