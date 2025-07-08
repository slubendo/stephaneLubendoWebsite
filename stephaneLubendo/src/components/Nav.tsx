export default function Nav() {

    return (
        <nav className="bg-secondary">  
            <ul className=" flex flex-row justify-between items-center mx-auto max-w-[60%] bg-white/30 shadow-md rounded-b-3xl rounded-t-md p-3">
                <li className="backdrop-blur-xs px-4 py-1 rounded-3xl">Writing</li>
                <li className="backdrop-blur-xs px-4 py-1 rounded-3xl">Tech</li>
                <li className="backdrop-blur-xs  px-4 py-1 rounded-3xl">Music</li>
                <li className="backdrop-blur-xs px-4 py-1 rounded-3xl">Me</li>
                <li className="backdrop-blur-xs  px-4 py-1 rounded-3xl">Merch</li>
            </ul>
        </nav>
    )
}