import { Outlet } from "react-router-dom";
import Accordion from "../../components/Accordion";

export default function Tech() {

    return (
        <main className="flex flex-col mx-auto w-[75vw] justify-center items-center pt-[calc(75px)]">

            <div className="mx-auto w-full grid grid-cols-5 grid-rows-4 gap-2 h-[500px] mb-4">
                <div className="flex flex-col justify-between bg-accent col-span-3 row-span-4">
                    <div className="h-[75%]">Div1</div>
                    <div className="h-[25%] border-t border-tertiary"></div>
                </div>
                <div className="bg-accent col-start-4 col-span-2 row-span-2">Div 3</div>
                <div className="bg-accent col-start-5 col-span-1 row-start-3 row-span-2">Div 4</div>
                <div className="bg-accent col-start-4 col-span-1 row-start-3 row-span-2">Div 4</div>
            </div>
            
            <Accordion/>


            <div className="flex justify-between w-[80%]">
                <div className="bg-accent min-w-1/2 h-[calc(70vh)] m-2">Frontend ... code snippet</div>
                <div className="bg-tertiary min-w-1/2 h-[calc(70vh)] m-2">Backend </div>
            </div>

            <div className="bg-tertiary relative w-full my-4 h-[65vh]">
                <div className="flex w-[200%] h-full p-6">
                    <div className="bg-accent mx-2 w-[20%] h-full"></div>
                    <div className="bg-accent mx-2 w-[20%] h-full"></div>
                    <div className="bg-accent mx-2 w-[20%] h-full"></div>
                    <div className="bg-accent mx-2 w-[20%] h-full"></div>
                    <div className="bg-accent mx-2 w-[20%] h-full"></div>
             
                </div>
            </div>

            <div className="mx-auto w-[80%] grid grid-cols-5grid-rows-4 gap-2 h-[400px] mt-4">
                <div className="bg-accent col-span-5 row-span-1">Title: Why work with us</div>
                <div className="bg-accent col-start-1 col-span-3 row-start-2 row-span-3">Writing paragraph</div>
                <div className="bg-accent col-start-4 col-span-2 row-start-2 row-span-3">Image</div>
            </div>

            <div className="flex flex-col w-full items-center">
                <h2 className="text-4xl my-4">Lets Connect</h2>
                <div className="flex justify-center">
                        <div className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]">
                            <img src="" alt="" />
                            Insta
                        </div>        
                        <div className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]">
                            <img src="" alt="" />
                            Insta
                        </div>   
                        <div className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]">
                            <img src="" alt="" />
                            Insta
                        </div>
                        <div className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]">
                            <img src="" alt="" />
                            Insta
                        </div>
                        <div className="bg-white/20 rounded-xl m-1 flex justify-center items-center w-[45px] h-[45px]">
                            <img src="" alt="" />
                            Insta
                        </div>
                </div>

                <div className="w-[50%] h-[500px] mb-10 mt-5 bg-tertiary">
                    <form>
                        <input type="text" />
                        <input type="text" />
                        <button type="submit"></button>
                    </form>
                </div>
            </div>


            
            <Outlet />
        </main>
    )
}