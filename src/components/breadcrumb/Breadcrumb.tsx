import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import Routers from "@/routers";

interface IBreadcrumb {
    name: string[];
    path: string[];
    subSystemId: number;
    menuId?: number;
    state?: | string | {
        id: string;
        iconName: string;
        type: string;
        subMenu: { id: string; subName: string; subIcon: string; subLinkpage: string; }[];
    }
    | undefined;
}

export default function BreadCrumb({ slice = 1 }) {
    const { pathname, state } = useLocation();
    const routers = Routers();
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb | null>(null);

    useEffect(() => {
        if (!pathname || !routers || routers.length === 0) {
            setBreadcrumbs(null);
            return;
        }

        const basePath = pathname.split('/').slice(0, 3).join('/').replace('/', "");
        const currentRoute = routers[0]?.children?.find(child => child.path === pathname.replace('/', ""));

        if (currentRoute) {
            const newBreadcrumbs = {
                name: currentRoute.name.split('/').filter(Boolean),
                path: [basePath],
                subSystemId: currentRoute.subSystemId,
                menuId: currentRoute.menuId
            };

            if (JSON.stringify(newBreadcrumbs) !== JSON.stringify(breadcrumbs)) {
                setBreadcrumbs(newBreadcrumbs);
            }
        } else {
            setBreadcrumbs(null);
        }
    }, [pathname, routers, breadcrumbs]);

    if (!breadcrumbs?.name || breadcrumbs.name.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center justify-end text-base min-w-fit w-full md:w-fit" style={{ fontFamily: "Mitr" }}>
            {breadcrumbs.name.map((name, nameIdx) =>
                <div key={nanoid(3)} className="flex items-center">
                    <Link
                        to={"/" + breadcrumbs?.path?.slice(0, nameIdx + slice).join("/") || ""}
                        state={state}
                        className={nameIdx + 1 === breadcrumbs.name.length ? "text-[#FD6655] cursor-default" : "text-black"}
                        onClick={nameIdx + 1 === breadcrumbs.name.length ? (e) => e.preventDefault() : undefined}
                    >
                        <h3 className="!text-[16px] font-normal">{name}</h3>
                    </Link>
                    {nameIdx + 1 < breadcrumbs.name.length &&
                        <h3 className="text-black !text-[16px]">
                            <i className="fa-solid fa-chevron-right text-[14px] px-2" />
                        </h3>
                    }
                </div>
            )}
        </div>

    );
}