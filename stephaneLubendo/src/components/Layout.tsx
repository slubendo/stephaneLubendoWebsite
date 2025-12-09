// import { useLocation } from "react-router-dom";
import Connect from "./Connect";
// import HomePage from "./HomePage";
import Nav from "./Nav";
import SideNav from "./SideNav";

export default function Layout() {

    return (
        <header className="mb-5">
            {/* <HomePage /> */}
            <Nav />
            <SideNav />
            <Connect />
        </header>
    )
}