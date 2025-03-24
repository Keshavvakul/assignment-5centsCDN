import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
  } from "@/components/ui/sidebar"
import { LayoutDashboard, User, Settings } from "lucide-react"

interface AppSidebarProps {
    navigation: { name: string; href: string; icon: string }[]
    pathname: string
}

export const AppSidebar = ({ navigation, pathname }: AppSidebarProps) => {
    // Create a mapping of icon names to components
    const iconComponents = {
      LayoutDashboard: LayoutDashboard,
      User: User,
      Settings: Settings,
    }
  
    return (
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader className="border-b">
          <div className="flex h-14 items-center px-4">
            <span className="text-lg font-semibold">Navigation</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navigation.map((item) => {
              // Get the icon component from our mapping
              const IconComponent = iconComponents[item.icon as keyof typeof iconComponents]
  
              return (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                    <a href={item.href}>
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} My App</div>
        </SidebarFooter>
      </Sidebar>
    )
  }