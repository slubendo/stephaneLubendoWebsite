// import { useLocation } from "react-router-dom";
import Connect from "./Connect";
// import HomePage from "./HomePage";
import Nav from "./Nav";
// import SideNav from "./SideNav";

export default function Layout() {
//   const location = useLocation();

    return (
        <header>
            {/* <div>{location.pathname}</div> */}
            {/* <HomePage /> */}
            <Nav />
            {/* <SideNav /> */}
            <Connect />
        </header>
    )
}