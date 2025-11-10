import { Outlet } from "react-router-dom";
import Accordion from "../../components/Accordion";

export default function Tech() {

    return (
<main className="flex flex-col mx-auto w-full max-w-[75vw] justify-center items-center pt-[75px]">
  {/* First grid */}
  <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-5 grid-rows-auto gap-2 min-h-[500px] mb-4">
    <div className="flex flex-col justify-between bg-accent md:col-span-3 md:row-span-4">
      <div className="h-[75%]">Div1</div>
      <div className="h-[25%] border-t border-tertiary"></div>
    </div>
    <div className="bg-accent md:col-start-4 md:col-span-2 md:row-span-2">Div 3</div>
    <div className="bg-accent md:col-start-5 md:col-span-1 md:row-start-3 md:row-span-2">Div 4</div>
    <div className="bg-accent md:col-start-4 md:col-span-1 md:row-start-3 md:row-span-2">Div 4</div>
  </div>

  <Accordion />

  {/* Side by side frontend/backend */}
  <div className="flex justify-between w-full md:w-[80%]">
    <div className="bg-accent flex-1 h-[50vh] md:h-[70vh] m-2">Frontend ... code snippet</div>
    <div className="bg-tertiary flex-1 h-[50vh] md:h-[70vh] m-2">Backend</div>
  </div>

  {/* Sliding accordion section (see below for refactor) */}
<div className="bg-tertiary relative w-full my-4 h-[65vh]"> <div className="flex w-[200%] h-full p-6"> <div className="bg-accent mx-2 w-[20%] h-full"></div> <div className="bg-accent mx-2 w-[20%] h-full"></div> <div className="bg-accent mx-2 w-[20%] h-full"></div> <div className="bg-accent mx-2 w-[20%] h-full"></div> <div className="bg-accent mx-2 w-[20%] h-full"></div> </div> </div>

  {/* "Why work with us" section */}
  <div className="mx-auto w-full md:w-[80%] grid grid-cols-1 md:grid-cols-5 gap-2 min-h-[400px] mt-4">
    <div className="bg-accent col-span-1 md:col-span-5">Title: Why work with us</div>
    <div className="bg-accent md:col-start-1 md:col-span-3">Writing paragraph</div>
    <div className="bg-accent md:col-start-4 md:col-span-2">Image</div>
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

    <div className="w-full md:w-[50%] h-[500px] mb-10 mt-5 bg-tertiary">
      <form className="flex flex-col gap-2 p-4">
        <input type="text" className="p-2 rounded" placeholder="Name" />
        <input type="text" className="p-2 rounded" placeholder="Email" />
        <button type="submit" className="bg-accent p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  </div>

  <Outlet />
</main>

    )
}