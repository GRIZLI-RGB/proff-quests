import { Navigate, useRoutes } from "react-router-dom";

import App from "./App";
import UserAuth from "./pages/UserAuth";
import AdminPanel from "./pages/AdminPanel";
import DashboardLayout from "./layouts/dashboard";
import DashboardAppPage from "./pages/DashboardAppPage";
import { QuestsMap } from "./pages/QuestsMap";
import Task from "./pages/Task";

export default function Router() {
    const routes = useRoutes([
        {
            path: "/admin-panel",
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/admin-panel/users" />, index: true },
                { path: "users", element: <DashboardAppPage /> },
                { path: "organizations", element: <DashboardAppPage /> },
            ],
        },
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/user-auth",
            element: <UserAuth />,
        },
        {
            path: "/admin-panel/auth",
            element: <AdminPanel />,
        },
        {
            path: "/quests/map",
            element: <QuestsMap />,
        },
        {
            path: "/quests/task/:id",
            element: <Task />,
        },
    ]);

    return routes;
}
