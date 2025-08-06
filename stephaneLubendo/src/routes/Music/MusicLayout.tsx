import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";

export default function MusicLayout() {

    return (
        <div>
            <Layout />
            <Outlet />
        </div>
    )
}