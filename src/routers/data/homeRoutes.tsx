import { Children } from "@/@types/data/routersTypes";
import MainHome from "@/views/home/MainHome";
import { Navigate } from "react-router-dom";

const homeRoutes: Children[] = [
    { menuId: 0, path: "/", name: "หน้าหลัก", element: <Navigate to="/main" /> },
    { menuId: 1, path: "main", name: "หน้าแรก", element: <MainHome /> },
];
export default homeRoutes;