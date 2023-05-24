import protectedRoute from "@/components/protectedRoute";

const DashboardPage = () => {
    return <h1 className="text-gray-900">Welcome to the Dashboard!</h1>;
};

export default protectedRoute(DashboardPage);