
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useSidebar } from "../ui/sidebar";


function SidebarToggleTrigger({
    className,
    onClick,
    ...props
}) {
    const { toggleSidebar } = useSidebar()

    return (
        <Button
            data-sidebar="trigger"
            data-slot="sidebar-trigger"
            variant="ghost"
            size="icon"
            className={cn("size-7", className)}
            onClick={(event) => {
                onClick?.(event)
                toggleSidebar()
            }}
            {...props}>
            <MenuIcon />
            <span className="sr-only">Toggle Sidebar</span>
        </Button>
    );
}

export { SidebarToggleTrigger }; 