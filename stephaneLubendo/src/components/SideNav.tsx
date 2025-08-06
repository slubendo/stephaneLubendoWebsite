import { useLocation } from "react-router-dom";
import { sideNav, type SideNavKey } from "../db";

export default function SideNav() {
  const location = useLocation();
  console.log(location)
  const keys = Object.keys(sideNav) as SideNavKey[];

  const current: SideNavKey = keys.find(key => location.pathname.includes(key)) ?? "home";
  const currentSideNav = sideNav[current] 

  
    return (

            <nav className="fixed z-50 top-[110px] max-w-[10%]">
                <ul className="flex flex-col min-h-[calc(100vh/2)] justify-between =-start bg-accent/40 rounded-r-3xl rounded-l-md  px-[20%] pt-[15%] pb-[10%] shadow-md">
                    <div>
                        {currentSideNav.map((item, index) => (
                            <li key={index} className="px-1 pb-2">
                            {item}
                            </li>
                        ))}
                    </div>
                    <div>
                        <hr className="mb-3 mt-13 border-t border-gray-300"></hr>
                        <li className="px-1 pb-2">Collab</li>
                        <li className="px-1 ">Connect</li>
                        <li></li>
                    </div>
                </ul>
            </nav>
    )
}