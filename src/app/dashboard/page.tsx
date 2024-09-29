import { currentUser } from "@clerk/nextjs/server"
import {redirect} from 'next/navigation'
import CustomerList from "@/components/CustomerList";
import Sidebar from "@/components/Sidebar/Sidebar";
import NavBar from "@/components/Sidebar/Navbar";
import DashboardContainer from "@/components/DashboardContainer";

export default async function DashboardPage() {
    const user = await currentUser()
    if (!user) {
        redirect('/')
    }

    return (
        <div>
            <NavBar />
            <Sidebar />
            <DashboardContainer>
                <CustomerList />
            </DashboardContainer>
        </div>
    )
}