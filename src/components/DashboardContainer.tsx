interface DashboardContainerProps {
    children: React.ReactNode;
}

export default function DashboardContainer({ children }: DashboardContainerProps){
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 mt-14">
                {children}
            </div>
        </div>
    );
};