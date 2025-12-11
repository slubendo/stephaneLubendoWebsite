import AccordionCard from "./AccordionCard";




export default function Accordion() {

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-flow-col justify-center auto-cols-[50%] md:auto-cols-[33.33%] lg:auto-cols-[16.66%] ga-8 h-full">
        <AccordionCard />
        <AccordionCard />
        <AccordionCard />
        <AccordionCard />
        <AccordionCard />
      </div>
    </div>

    )
  }