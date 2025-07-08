export default function SideNav() {

    return (
            <nav className="sticky top-1/2 translate-y-6/12  max-w-[10%]">
                <ul className="flex flex-col min-h-[calc(100vh/2.5)] justify-between =-start bg-accent/40 rounded-r-2xl rounded-l-md  px-[20%] pt-[15%] pb-[10%] shadow-md">
                    <div>
                        <li className="px-1 pb-2">Feed</li>
                        <li className="px-1 pb-2">Favorites</li>
                        <li className="px-1 pb-2">Pictures</li>
                        <li className="px-1 pb-2">Feed</li>
                    </div>
                    <div>
                        <hr className="mb-3 mt-13 border-t border-gray-300"></hr>
                        <li className="px-1 pb-2">Favorites</li>
                        <li className="px-1 ">Pictures</li>
                        <li></li>
                    </div>
                </ul>
            </nav>
    )
}