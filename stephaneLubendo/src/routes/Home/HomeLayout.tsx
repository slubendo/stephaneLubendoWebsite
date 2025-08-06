import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";

export default function HomeLayout() {

    return (
        <div>
            <Layout />
            <Outlet />
        </div>
    )
}