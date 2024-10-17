import { Fragment } from "react/jsx-runtime"
import MainPrivateLayout from "./data/MainPrivateLayout"
import ScrollToTop from "@/components/scroll-top/ScrollToTop"

export default function MainLayout() {
    return (
        <Fragment>
            <MainPrivateLayout />
            <ScrollToTop />
        </Fragment>
    )
}