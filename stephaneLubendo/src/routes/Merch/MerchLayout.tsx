import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";

export default function MerchLayout() {

    return (
        <div>
            <Layout />
            <Outlet />
        </div>
    )
}