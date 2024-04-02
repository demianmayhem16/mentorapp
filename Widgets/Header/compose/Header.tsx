'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { UserMenu } from '../ui/UserMenu'
import { useSession } from 'next-auth/react'

const UserMenuWidget = () => {
    const { data: session } = useSession()
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <UserMenu name={session?.user?.name} image={session?.user?.image} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export { UserMenuWidget }
