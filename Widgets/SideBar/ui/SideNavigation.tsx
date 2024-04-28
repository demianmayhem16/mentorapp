'use client'

import { routes } from "@/Shared/const"
import {
    Home,
    LineChart,
    Package,
    ShoppingCart,
  } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


const menuItems = [
  {href: routes.dashboard, title: 'Dashboard', icon: <Home className="h-5 w-5"/>},
  {href: routes.emails, title: 'Emails', icon: <Package  className="h-5 w-5"/>},
  {href:  routes.uploads, title: 'Uploads', icon: <ShoppingCart className="h-5 w-5" />},
  {href: routes.analytics, title: 'Analytics', icon: <LineChart  className="h-5 w-5"/>},
]

export const SideNavigation = () => {
  const pathname = usePathname()

    return <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {menuItems.map(({href, title, icon}) => {
        return <Link 
        key={href}
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 
        py-2 text-muted-foreground hover:text-foreground, 
        ${pathname === href && 'bg-muted px-3 text-primary'}`}
        href={href}
        > 
        {icon}
        {title}
        </Link>
      })}
  </nav>
}

