export default function Me() {

    
    return (
    <main className="flex mx-auto w-full max-w-[85vw] md:max-w-[95vw] justify-center items-center pt-4 sm:pt-[75px]">
        <div className="bg-primary mx-auto w-full grid gap-6 md:gap-4 p-8 md:p-4 mt-4 mb-10 border border-accent grid-cols-1  md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:h-[70vh] lg:h-[90vh]">
            {/* Image */}
            <div className="flex justify-center items-center col-span-1 md:col-span-1">
                <div className="bg-cover bg-center w-9/10 h-[250px] md:w-[90%] md:h-[55%] lg:h-[65%] rounded"
                    style={{ backgroundImage: "url('https://picsum.photos/600/800')" }}
                ></div>
            </div>

            {/* Content */}
            <div className="flex justify-center items-center col-span-1 md:col-span-1 row-span-1 md:pr-4">
            <div className="bg-accent w-9/10 h-[250px] md:w-[100%] md:h-[65%] lg:h-[75%] rounded"></div>
            </div>
        </div>
    </main>
     
 )
}   