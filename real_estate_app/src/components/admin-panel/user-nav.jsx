"use client";

import { Link, useNavigate } from "react-router-dom";
import { LayoutGrid, LogOut, Settings2, SettingsIcon, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useFrappeAuth, useFrappeGetDoc } from "frappe-react-sdk";

import { useEffect, useState } from "react";
import { useLogout } from "@/utils/logout";
import { FaUserSecret } from "react-icons/fa";

export function UserNav() {
  const { currentUser } = useFrappeAuth();
  const handleLogout = useLogout();

  const [userData, setUserData] = useState(null);
  const { data, error } = useFrappeGetDoc("User", currentUser);

  useEffect(() => {
    if (data) setUserData(data);
  }, [data]);


  console.log(userData);



  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <div
                className="relative h-8 w-8 rounded-full cursor-pointer overflow-hidden 
                     flex items-center justify-center transition 
                     hover:ring-2 hover:ring-green-400 hover:ring-offset-2 
                     focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
              >
                <Avatar className="h-full w-full rounded-full bg-green-100">
                  {currentUser?.user_image ? (
                    <AvatarImage
                      src={currentUser.user_image}
                      alt="User Avatar"
                      className="object-cover h-full w-full rounded-full"
                    />
                  ) : (
                    <AvatarFallback className="bg-green-100 text-green-800 font-semibold">
                      {currentUser?.slice(0, 2).toUpperCase() || "NA"}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Profile</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-40" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{data?.full_name || currentUser}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {currentUser}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="/dashboard" className="flex items-center">
              {/* <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" /> */}
              My Setting
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="/account" className="flex items-center">
              {/* <SettingsIcon className="w-4 h-4 mr-3 text-muted-foreground" /> */}
              My Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" asChild>
            <Link href="/account" className="flex items-center">
              {/* <SettingsIcon className="w-4 h-4 mr-3 text-muted-foreground" /> */}
              Toggle Themes
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer" onClick={() => handleLogout()}>
          {/* <LogOut className="w-4 h-4 mr-3 text-muted-foreground" /> */}
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
