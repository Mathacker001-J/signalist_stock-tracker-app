
'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";


const UserDropdown = () => {

   const router = useRouter();

  const handleSignOut = async () => {
      router.push("/sign-in");
  }

  const user ={name:'Saurabh',email:'contact@js.com'}

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                <Button variant ="ghost" className="flex item-center gap-3 text-gray-4 hover:text-yellow-500">

                    <Avatar className="h-8 w-8">
                        <AvatarImage src="data:image/jpeg;base64,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" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900  text-sm  font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>

                <div className="hidden md:flex flex-col items-start">
                    <span className='text-base font-medium text-gray-400'>
                     {user.name}
                    </span>
                </div>

                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                <div className="flex relative items-center gap-3 py-2">

                    <Avatar className="h-10 w-10">
                        <AvatarImage src="data:image/jpeg;base64,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" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900  text-sm  font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col ">
                    <span className='text-base font-medium text-gray-400'>
                     {user.name}
                    </span>
                        <span className="text-sm text-gray-500">{user.email}</span>
                    </div>

                </div>
                </DropdownMenuLabel>

            <DropdownMenuSeparator className="bg-gray-500"/>

            <DropdownMenuItem onClick={handleSignOut} className="text-shadow-gray-100 text-md  font-medium  focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">Sign Out
             <LogOut className="h-4 w-4 mr-2 hidden sm:block"/>
                Logout
            </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-500"/>
                <nav className="sm:hidden">

                  <NavItems/>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
