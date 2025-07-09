import Connect from "./Connect";
import Nav from "./Nav";
import SideNav from "./SideNav";

export default function Layout() {

    return (
        <header>
            <Nav />
            <SideNav />
            <Connect />
        </header>
    )
}