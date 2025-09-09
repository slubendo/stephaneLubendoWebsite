// import Accordion from "../../components/Accordion";
import Banner from "../../components/Banner";

export default function Music() {

    return (
        <main className="mx-auto pt-4 sm:pt-[75px] flex flex-col justify-center space-y-6">
            {/* Banner */}
            <Banner />

            {/* Top grid */}
            <div className="mx-auto w-full max-w-[85vw] grid grid-cols-1 [&>*]:h-[200px] sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-2 h-auto lg:h-[400px] mb-4 lg:mb-8">
                <div className="bg-accent row-span-1 lg:row-span-2">Div 1</div>
                <div className="bg-accent row-span-1 lg:row-span-2">Div 2</div>
                <div className="bg-accent row-span-1 col-span-1 sm:row-start-3 sm:col-start-1 lg:col-span-1 lg:row-span-1">Div 3</div>
                <div className="bg-accent col-span-1 sm:col-span-2 row-span-1 lg:row-span-2">Div 4</div>
                <div className="bg-accent row-span-1 lg:col-span-1 lg:row-span-1">Div 5</div>
            </div>

            {/* Columns */}
            <div className="bg-secondary mx-auto w-full max-w-[85vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 [&>*]:h-[200px] sm:[&>*]:h-[250px]">
                <div className="bg-secondary border border-accent p-4">Column 1</div>
                <div className="bg-secondary border border-accent p-4">Column 2</div>
                <div className="bg-secondary border border-accent p-4">Column 3</div>
                <div className="bg-secondary border border-accent p-4">Column 4</div>
                <div className="bg-secondary border border-accent p-4">Column 5</div>
                <div className="bg-secondary border border-accent p-4">Column 6</div>
                <div className="bg-secondary border border-accent p-4">Column 7</div>
                <div className="bg-secondary border border-accent p-4">Column 8</div>
                <div className="bg-secondary border border-accent p-4">Column 9</div>      
            </div>

            {/* Fixed bottom bar */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 w-[90%] sm:w-[60%] lg:w-[45%] flex justify-between items-center p-2">
                <div className="m-1 flex justify-center items-center w-full h-[50px] sm:h-[60px] border border-accent">
                Music
                </div>
            </div>
        </main>

    )
}