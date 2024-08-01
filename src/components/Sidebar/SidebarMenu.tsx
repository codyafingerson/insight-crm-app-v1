"use client"

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import SidebarMenuItem from "./SidebarMenuItem";


export default function SidebarMenu() {
    const pathname = usePathname();
    return (
        <ul className="space-y-2 font-medium">
            <SidebarMenuItem to="/dashboard" icon={faHouse} label="Dashboard" active={pathname === "/dashboard"} badge={1}/>
        </ul>
    );
};