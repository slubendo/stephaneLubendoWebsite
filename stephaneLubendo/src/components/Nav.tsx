export default function Nav() {

    return (
        <nav className="mb-[56px] fixed top-0 left-1/2 transform -translate-x-1/2 min-w-[60%] max-w-[60%] z-50">
            <ul className="flex flex-row justify-between items-center mx-auto  bg-accent/50 shadow-md rounded-b-3xl rounded-t-md p-3">
                <li className="backdrop-bur-xs px-4 py-1 rounded-3xl">Writing</li>
                <li className="backdrop-lur-xs px-4 py-1 rounded-3xl">Tech</li>
                <li className="backdrop-blu-xs  px-4 py-1 rounded-3xl">Music</li>
                <li className="backdrop-blu=-xs px-4 py-1 rounded-3xl">Me</li>
                <li className="backdrop-bur-xs  px-4 py-1 rounded-3xl">Merch</li>
            </ul>
        </nav>
    )
}