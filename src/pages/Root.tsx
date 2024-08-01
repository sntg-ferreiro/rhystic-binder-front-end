import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/MainNavbar";

export const Root = () => {
    return (
        <>
            <MainNavbar />
            <main className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
                <Outlet />
            </main>
        </>
    );
};
