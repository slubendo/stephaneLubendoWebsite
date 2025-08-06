// import Accordion from "../../components/Accordion";
import Banner from "../../components/Banner";

export default function Music() {

    return (
    <main className="mx-auto pt-[calc(75px)] flex flex-col justify-center">
        <Banner width={80} height={50}/>
        <div className="mx-auto min-w-[80vw] max-w-[80vw] grid grid-cols-3 grid-rows-4 gap-2 w-full h-[400px] mb-4">
            <div className="bg-accent col-start-1 row-span-2">Div 1</div>
            <div className="bg-accent col-start-2 row-span-2">Div 2</div>
            <div className="bg-accent col-start-3 row-start-1 row-span-4">Div 3</div>
            <div className="bg-accent col-span-2 row-start-3 row-span-2">Div 4</div>
        </div>

        <div className="bg-secondary mx-auto min-w-[80vw] max-w-[80vw] grid grid-cols-3 gap-3 [&>*]:h-[275px]">
            <div className="bg-secondary border border-accent p-4">Column 1</div>
            <div className="bg-secondary border border-accent p-4">Column 1</div>
            <div className="bg-secondary border border-accent p-4">Column 1</div>
            <div className="bg-secondary border border-accent p-4">Column 1</div>
            <div className="bg-secondary border border-accent p-4">Column 1</div>
            <div className="bg-secondary border border-accent p-4">Column 1</div>
            <div className="bg-secondary border border-accent p-4">Column 1</div>
            <div className="bg-secondary border border-accent p-4">Column 1</div>
            <div className="bg-secondary border border-accent p-4">Column 1</div>      
        </div>

        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60  min-w-[45%] max-w-[45%] flex justify-between items-center p-2">
            <div className="m-1 flex justify-center items-center w-full h-[60px] border border-accent">
                Music
            </div>
        </div>


    </main>
    )
}