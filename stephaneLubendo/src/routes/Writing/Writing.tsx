export default function Writing() {

    return (
<main className="flex mx-auto w-full max-w-[90vw] justify-center items-center pt-4 sm:pt-[75px]">
  <div className="mx-auto w-full grid gap-2 h-auto p-3 mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-6  lg:grid-cols-9 sm:auto-rows-min lg:grid-rows-4">

    <div className="bg-accent h-[180px] md:h-[360px] lg:h-auto col-span-1 row-span-1 md:col-span-2 lg:col-span-2 lg:row-span-3">
      Div 1
    </div>

    <div className="bg-accent h-[180px] md:h-[360px] lg:h-auto col-span-1 row-span-1  md:col-start-3 md:col-span-4 lg:col-start-3 lg:col-span-5 lg:row-span-3">
      Div 2
    </div>
    <div className="bg-accent h-[180px] col-span-1 md:col-span-2 lg:col-start-8 lg:col-span-2 row-span-1 lg:row-span-1">
      Div 3.1
    </div>
    <div className="bg-accent h-[180px] col-span-1 md:col-span-2 lg:col-start-8 lg:col-span-2 row-span-1 lg:row-span-1">
      Div 3.2
    </div>  
    <div className="bg-accent h-[180px] col-span-1 md:col-span-2 lg:col-start-8 lg:col-span-2 row-span-1 lg:row-span-1">
      Div 3.3
    </div>
    <div className="bg-accent h-[180px] col-span-1 md:col-span-2 lg:col-start-8 lg:col-span-2 row-span-1 lg:row-span-1">
      Div 3.4
    </div>

    <div className="bg-accent h-[180px] col-span-1 md:col-span-4 lg:col-start-1 lg:col-span-7 lg:row-start-4 row-span-1">
      Div 4
    </div>
  </div>
</main>

    )
}

