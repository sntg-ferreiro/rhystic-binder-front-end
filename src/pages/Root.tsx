import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/MainNavbar";

export const Root = () => {
    return (
        <>
            <MainNavbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};
