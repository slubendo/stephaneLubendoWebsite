import { Link } from "react-router-dom";

export default function HomeLogo() {

return (
    <div className="fixed -top-[60px] -left-[40px] w-3xs justify-center items-center">
        <Link to='/'>
        <img  src="/Logo.png" className=" text-red" />
        </Link>
    </div>
)
} 