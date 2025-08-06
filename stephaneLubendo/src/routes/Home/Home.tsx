import Accordion from "../../components/Accordion";
import Banner from "../../components/Banner";


export default function Home() {

  return (
    <main className="mx-auto pt-[calc(75px)] flex flex-col justify-center items-center">
      <Banner width={80} height={55}/>
      <div className="w-[80%]">

      <Accordion />
      </div>
      <div className="bg-tertiary mx-auto mt-2 min-w-[45%] max-w-[45%] min-h-[100vh] grid grid-cols-1 gap-3 [&>*]:h-[275px] border-accent">
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