import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <nav className="bottom-0 mb-0 sm:top-0 sm:mb-[56px] fixed left-1/2 transform -translate-x-1/2 min-w-[70%] sm:min-w-[55%] max-w-[55%] z-50">
            <ul className="flex flex-row sm:justify-around justify-center items-center mx-auto  bg-accent/80 shadow-md rounded-t-3xl sm:rounded-none sm:rounded-b-3xl p-3">
                <Link to='/writing'>
                <li className="backdrop-bur-xs px-2 sm:px-4 py-1 rounded-3xl">Writing</li>
                </Link>
                <Link to='/tech'>
                <li className="backdrop-lur-xs px-2 sm:px-4 py-1 rounded-3xl">Tech</li>
                </Link>
                <Link to='/music'>
                <li className="backdrop-lur-xs px-2 sm:px-4 py-1 rounded-3xl">Music</li>
                </Link>
                <Link to='/me'>
                <li className="backdrop-lur-xs px-2 sm:px-4 py-1 rounded-3xl">Me</li>
                </Link>
            </ul>
        </nav>
    )
}