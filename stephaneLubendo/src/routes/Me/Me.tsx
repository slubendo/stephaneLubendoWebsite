export default function Me() {
  return (
    <main className="flex mx-auto w-[80vw] max-w-[85vw] md:max-w-[95vw] justify-center items-center pt-4 sm:pt-[70px]">
      <div className="bg-primary mx-auto w-full grid gap-6 md:gap-4 p-8 md:p-6 mt-4 mb-10 border border-accent grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:h-[70vh] lg:h-[85vh]">

        {/* Left Side – Image */}
        <div className="flex justify-center items-center col-span-1 md:col-span-1">
          <div
            className="bg-cover bg-center shadow-lg border border-black/30 w-[90%] h-[260px] sm:h-[320px] md:h-[70%] lg:h-[80%] rounded-none"
            style={{ backgroundImage: "url(/Banner3.HEIC)" }}
          ></div>
        </div>

        {/* Right Side – Content */}
        <div className="flex justify-center items-center col-span-1 md:col-span-1 md:pr-4">
          <div className="bg-accent/80 border border-black/20 shadow-md p-6 w-[90%] md:w-full h-auto md:h-[70%] lg:h-[80%] rounded-none flex flex-col justify-between">

            <div>
              <h2 className="text-3xl font-serif font-black uppercase tracking-wide mb-4">
                More About Me
              </h2>
              <p className="text-base font-serif md:text-lg leading-relaxed text-black/90">
                I'm a professional Software Engineer with a deep passion for building thoughtful,
                functional, and beautifully crafted digital experiences. Technology is my craft but
                creativity is my fuel. Outside of engineering, I'm an aspiring writer and producer,
                constantly exploring stories, ideas, and the art of bringing concepts to life.
                <br /><br />
                This site is more than a portfolio. It’s a reflection of my growth, my interests,
                and the journey I'm shaping for myself. Taking
                imagination, tech and storytelling into something uniquely my own.
                <br /><br />
                As I grow, this space will grow with me: more projects, more writing, more ideas,
                and a clearer voice in both tech and storytelling.
              </p>
            </div>


          </div>
        </div>


      </div>

      
    </main>
  );
}
