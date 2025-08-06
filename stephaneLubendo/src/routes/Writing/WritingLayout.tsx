import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";

export default function WritingLayout() {

    return (
        <div>
            <Layout />
            <Outlet />
        </div>
    )
}