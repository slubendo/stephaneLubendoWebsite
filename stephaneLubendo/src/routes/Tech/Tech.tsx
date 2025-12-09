import { Outlet } from "react-router-dom";
import Accordion from "../../components/Accordion";
import { postInfo } from "../../db";

export default function Tech() {

    return (
<main className="flex flex-col mx-auto w-[80vw] justify-center items-center pt-[77px]">
  {/* First grid */}
  <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-5 grid-rows-auto gap-2 min-h-[500px] mb-4">
    <div className="flex flex-col justify-between bg-accent md:col-span-3 md:row-span-4">
      <div className="h-[10%]">Full Stack Web Developer</div>
      <div className="h-[15%]">Full Stack Web Developer</div>
      <div className="h-[75%]">{postInfo.content}</div>
      <div className="h-[25%] border-t border-tertiary">list of programmming lanuges that i am good with asFASFGASDGadfgmnksd adLKSndsdG
      </div>
    </div>

    <div className="bg-accent md:col-start-4 md:col-span-2 md:row-span-2">
      <img src="/Banner2.HEIC" alt="" />
    </div>
    <div className="bg-accent md:col-start-4 md:col-span-2 md:row-start-3 md:row-span-2">list of programmming lanuges that i am good with asFASFGASDGadfg</div>
  </div>

  <Accordion />

  {/* Side by side frontend/backend */}
  <div className="flex justify-between w-full md:w-[80%]">
    <div className="bg-accent flex-1 h-[50vh] md:h-[70vh] m-2">
      <h2>Frontend</h2>
      <div> wDfrontend pitch to clents m good with asFASFGASDGadfg</div>
      
      <h2>Frontend code snippet, Try it out!!</h2>

    </div>
    <div className="bg-tertiary flex-1 h-[50vh] md:h-[70vh] m-2">
      <h2>Backend</h2>
      <div>Backend pitch to clients</div>
      <div>All icons from frontend and backend in this section</div>
      </div>
  </div>

    {/* Sliding accordion section (see below for refactor) */}
  {/* <div className="bg-tertiary relative w-full my-4 h-[65vh] overflow-x-auto">
    <div className="flex h-full p-6 animate-slide w-[200%]">
      <div className="bg-accent mx-2 w-[20%] h-full"></div>
      <div className="bg-accent mx-2 w-[20%] h-full"></div>
      <div className="bg-accent mx-2 w-[20%] h-full"></div>
      <div className="bg-accent mx-2 w-[20%] h-full"></div>
      <div className="bg-accent mx-2 w-[20%] h-full"></div>
    </div>
  </div> */}


  {/* "Why work with us" section */}
 <h2>Past Projects</h2>
  <div className="mx-auto w-full md:w-[80%] grid grid-cols-1 grid-rows-6 md:grid-cols-6 gap-2 min-h-[400px] mt-4">
    <div className="bg-accent col-span-1 row-span-3 row md:col-span-6">
      <h2>Trell-IT</h2>
      <p>content about the project</p>
      <img src="/Banner.heic" alt="" />
    </div>
    <div className="bg-accent md:col-start-1 row-span-3 md:col-span-3">
      <h2>TaskIT</h2>
      <p>content about the project</p>
      <img src="/Banner.heic" alt="" />
    </div>
    <div className="bg-accent md:col-start-4 row-span-3 md:col-span-3">
      <h2>XYTweet</h2>
      <p>content about the project</p>
      <img src="/Banner.heic" alt="" />
    </div>
  </div>

  {/* Footer / contact form */}
  <div className="flex flex-col w-full items-center">
    <h2 className="text-4xl my-4">Lets Connect</h2>
    <div className="flex flex-wrap justify-center">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]"
        >
          Insta
        </div>
      ))}
    </div>

   <div className="w-full md:w-[50%] h-[300px] mb-50 mt-5 bg-tertiary relative">
          <form className="flex flex-col gap-4 p-4 z-10">
            <input
              type="text"
              className="p-2 rounded bg-accent/40 relative z-10"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="p-2 rounded bg-accent/40 relative z-10"
              placeholder="Email"
            />
            <textarea
              className="p-2 rounded bg-accent/40 relative z-10"
              placeholder="Content"
            />
            <button type="submit" className="bg-accent p-2 rounded relative z-10">
              Submit
            </button>
          </form>
    </div>

  </div>

  <Outlet />
</main>

    )
}