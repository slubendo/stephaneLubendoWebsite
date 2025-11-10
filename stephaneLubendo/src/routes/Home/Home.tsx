import Accordion from "../../components/Accordion";
import Banner from "../../components/Banner";


export default function Home() {

  return (
    <main className="mx-auto pt-4 sm:pt-[calc(75px)] flex flex-col justify-center items-center">
      <Banner/>

      <Accordion />
      <div className="bg-tertiary mx-auto mt-2 min-w-[85%] sm:min-w-[65%] md:min-w-[55%] grid grid-cols-1 gap-3 md:[&>*]:h-[325px] [&>*]:h-[315px] border-accent">
           <div className="border-t border-accent px-9 py-6">Column 1</div>
           <div className="border-t border-accent px-9 py-6">Column 1</div>
           <div className="border-t border-accent px-9 py-6">Column 1</div>
           <div className="border-t border-accent px-9 py-6">Column 1</div>
           <div className="border-t border-accent px-9 py-6">Column 1</div>
           <div className="border-t border-accent px-9 py-6">Column 1</div>
           <div className="border-t border-accent px-9 py-6">Column 1</div>
           <div className="border-t border-accent px-9 py-6">Column 1</div>
      </div>


 
    </main>
    )
}