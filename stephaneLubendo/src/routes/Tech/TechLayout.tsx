import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";

export default function TechLayout() {

    return (
        <div>
            <Layout />
            <Outlet />
        </div>
    )
}