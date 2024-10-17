import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function MainPrivateLayout() {
    const { pathname } = useLocation();
    const fullPage = ["/home"].includes(pathname) ? true : false;


    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <main id="list-data" className={`${!fullPage && "pagin-layout-main pt-5"} bg-red-100 flex-1 flex flex-col w-full overflow-hidden  pb-10`}>
                <div className={`${!fullPage && "card-main border flex-1 overflow-hidden"}`}>
                    <div className={`${!fullPage && "card-pagin"}`}>
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}