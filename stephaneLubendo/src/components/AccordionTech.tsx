import AccordionCard from "./AccordionCard";




export default function AccordionTech() {

  return (
    <div className="w-full m-6">
    <div className="w-full  m-6">
  <div className="grid grid-flow-col justify-center auto-cols-[50%] md:auto-cols-[33.33%] lg:auto-cols-[16.66%] gap-8 h-full">
    {[
      { pic: "/ChatNet.png", website: "https://github.com/slubendo/ChatNet", github: "yes" },
      { pic: "/MarkITDown.png", website: "https://github.com/slubendo/Markdown-Editor", github: "yes" },
      { pic: "/ProspectiveAI.jpeg", website: "https://github.com/slubendo/DevelopmentProspective", github: "yes" },
      { pic: "/vacation.png", website: "https://github.com/slubendo/Vacation-SST", github: "yes" },
      { pic: "/CloudRecipe.png", website: "https://github.com/slubendo/CloudRecipe", github: "yes" },
    ].map((project, i) => (
      <div
        key={i}
        className="transition-transform bg-center duration-300 ease-in-out hover:scale-105"
      >
        <AccordionCard 
          pic={project.pic} 
          website={project.website} 
          github={project.github} 
          title="" 
        />
      </div>
    ))}
  </div>
</div>
</div>
  )
  }