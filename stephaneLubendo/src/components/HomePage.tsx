import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <div className="fixed top-2 w-[15vw] left-3 flex justify-between items-center">
      <div className="bg-white/20 rounded-full m-1 flex justify-center items-center w-[60px] h-[60px]">
        <Link to='/'>
          <img src="" alt="" />
          Home
        </Link>
      </div>
    </div>
    )
}