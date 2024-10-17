import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routers from "./index";


const router = createBrowserRouter(
    Routers().map((route) => ({
        path: "/",
        element: route.layout,
        children: [
            {
                path: "/",
                element: route.children[0].element,
            },
            {
                path: "*",
                element: route.children[0].element,
            },
            ...route.children.map((child) => ({
                path: child.path,
                element: child.element,
            })),
        ],
    })),
);

export default function ManageRoutes() {
    return <RouterProvider router={router} />;
}