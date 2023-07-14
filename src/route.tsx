import Dashboard from "./layout/Dashboard";
import DashboardPage from "./pages";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
    ],
  },
];

export default routes;
