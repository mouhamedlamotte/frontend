import * as React from "react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { AvatarFallback } from "./ui/avatar"
import { Separator } from "./ui/separator"

const data = {
  navMain: [
    {
      title: "Mes transaction",
      url: "/",
    },
    {
      title: "nouvelle transaction",
      url: "/transaction/new",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="flex justify-start">
              <a href="#" className="flex-row justify-start">
                  <Avatar className="">
                    <AvatarImage src="/images/logo/xarala.png"  />
                  </Avatar>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
