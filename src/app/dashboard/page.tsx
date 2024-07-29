import { currentUser } from "@clerk/nextjs/server"
import { SignOutButton } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
    const user = await currentUser()
    if (!user) return <div>Not signed in</div>;

    return (
        <div>
            <h1>Dashboard</h1>
            <UserButton
                appearance={{ layout: { helpPageUrl: "/help", shimmer: false } }}
            />
            <p>Welcome, {user.fullName}!</p>

        </div>
    )
}