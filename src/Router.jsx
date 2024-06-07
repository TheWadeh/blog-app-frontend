import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app/App";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
    ]);
    return <RouterProvider router={router} />;
}