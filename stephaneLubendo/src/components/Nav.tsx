import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <nav className="mb-[56px] fixed top-0 left-1/2 transform -translate-x-1/2 min-w-[45%] max-w-[45%] z-50">
            <ul className="flex flex-row justify-around items-center mx-auto  bg-accent/80 shadow-md rounded-b-3xl rounded-t-md p-3">
                <Link to='/writing'>
                <li className="backdrop-bur-xs px-4 py-1 rounded-3xl">Writing</li>
                </Link>
                <Link to='/tech'>
                <li className="backdrop-lur-xs px-4 py-1 rounded-3xl">Tech</li>
                </Link>
                <Link to='/music'>
                <li className="backdrop-lur-xs px-4 py-1 rounded-3xl">Music</li>
                </Link>
                <Link to='/me'>
                <li className="backdrop-lur-xs px-4 py-1 rounded-3xl">Me</li>
                </Link>
            </ul>
        </nav>
    )
}