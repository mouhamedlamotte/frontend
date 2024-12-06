"use client"

import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from './themes/themeProviders'
import { SidebarProvider } from '@/components/ui/sidebar'

const Providers = (props : PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SidebarProvider>
            {props.children}
        </SidebarProvider>
    </ThemeProvider>
  )
}

export default Providers