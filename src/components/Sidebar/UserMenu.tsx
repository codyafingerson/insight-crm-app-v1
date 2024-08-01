"use client"

import { UserButton } from "@clerk/nextjs";

const clerkConfig = {
    layout: {
        helpPageUrl: "/help",
        shimmer: false,
        size: "small",
    },
    showLabelIcon: true
}

export default function UserMenu() {
    return (
        <div className="flex items-center ms-3">
            <UserButton 
                appearance={clerkConfig }
            />
        </div>
    );
}