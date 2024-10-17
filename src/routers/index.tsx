import { ExtendedChildren } from "@/@types/data/routersTypes";
import homeRoutes from "./data/homeRoutes";
import MainLayout from "@/layouts";

const allRoles: ExtendedChildren[] = [
    ...homeRoutes.map((route) => ({ subSystemId: 0, ...route }))//อันแรก
];

export default function Routers() {
    return [
        {
            role: [],
            layout: <MainLayout />,
            children: allRoles,
        },
    ];
}