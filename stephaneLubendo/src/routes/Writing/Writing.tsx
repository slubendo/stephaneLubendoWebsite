import { postInfo } from "../../db";

export default function Writing() {

    return (
<main className=" mx-auto justify-center items-center pt-4 sm:pt-[77px]">
<div className="mx-auto w-[80vw] grid gap-4 mb-4 
    grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9
    sm:auto-rows-min lg:grid-rows-4"
>
{/* MAIN LEFT ARTICLE */}
<div className="bg-accent/40 border border-black/10 rounded p-4 
    col-span-1 row-span-1 
    md:col-span-2 
    lg:col-span-2 lg:row-span-3">
    
  <h2 className="font-serif text-xl font-bold mb-2">
    Building Scalable APIs
  </h2>

  <p className="text-sm leading-relaxed">
    Explore the architecture behind scalable REST and GraphQL APIs, from efficient routing and database queries to caching strategies that keep applications fast and reliable.
  </p>
</div>

{/* MAIN CENTER ARTICLE */}
<div className="bg-accent/40 border border-black/10 rounded p-4 
    col-span-1 row-span-1  
    md:col-start-3 md:col-span-4 
    lg:col-start-3 lg:col-span-5 lg:row-span-3">

  <h2 className="font-serif text-2xl font-bold mb-2">
    Modern Frontend Workflows
  </h2>

<p className="text-sm leading-relaxed">
  Dive into contemporary frontend development, where building modern web applications goes beyond just writing code. This includes mastering frameworks like <strong>React</strong> and <strong>Next.js</strong>, leveraging state management solutions such as <strong>Redux</strong> or <strong>Zustand</strong> for efficient data flow, and implementing <strong>responsive, mobile-first designs</strong> that look great across devices. It also involves adopting modern tooling and workflows—from component libraries and CSS frameworks like <strong>Tailwind CSS</strong>, to bundlers like <strong>Vite</strong> and testing with <strong>Jest</strong> or <strong>Cypress</strong>—that streamline development and ensure maintainable, scalable code.
</p>
<br />

<p className="text-sm leading-relaxed">
  The goal is to create <strong>polished, high-performance user interfaces</strong> that are not only visually appealing but also robust, intuitive, and ready for real-world production. By combining strong design principles with modern engineering practices, frontend developers can deliver experiences that delight users while remaining maintainable and scalable over time.
</p>


  <div className="text-xs text-gray-700 mt-4 flex justify-between">
    <div>Frontend Development</div>
    <div>By Stephane Lubendo</div>
  </div>
</div>


{/* RIGHT SMALL ARTICLES (COLUMN 3) */}
<div className="bg-accent/40 border border-black/10 rounded p-4 
    col-span-1 md:col-span-2 
    lg:col-start-8 lg:col-span-2 row-span-1">
  <h2 className="font-serif font-semibold mb-1">Code & Coffee</h2>
  <p className="text-xs leading-snug">
    Developers around the city are gathering at local cafes to collaborate, share tips, and fuel their coding sessions with creativity—and caffeine.
  </p>
</div>

<div className="bg-accent/40 border border-black/10 rounded p-4 
    col-span-1 md:col-span-2 
    lg:col-start-8 lg:col-span-2 row-span-1">
  <h2 className="font-serif font-semibold mb-1">Open Source Momentum</h2>
  <p className="text-xs leading-snug">
    Contributions to open source projects are at an all-time high, connecting developers worldwide and accelerating innovation across industries.
  </p>
</div>

<div className="bg-accent/40 border border-black/10 rounded p-4 
    col-span-1 md:col-span-2 
    lg:col-start-8 lg:col-span-2 row-span-1">
  <h2 className="font-serif font-semibold mb-1">Next-Gen UI Trends</h2>
  <p className="text-xs leading-snug">
    Designers are embracing minimalism, motion, and responsive layouts to create interfaces that are not only beautiful but highly intuitive.
  </p>
</div>

<div className="bg-accent/40 border border-black/10 rounded p-4 
    col-span-1 md:col-span-2 
    lg:col-start-8 lg:col-span-2 row-span-1">
  <h2 className="font-serif font-semibold mb-1">Cloud Innovations</h2>
  <p className="text-xs leading-snug">
    New cloud technologies are making it easier than ever to deploy scalable applications, opening doors for startups and enterprises alike.
  </p>
</div>

{/* BOTTOM WIDE ARTICLE */}
<div className="bg-accent/40 border border-black/10 rounded p-4 
    col-span-1 md:col-span-4 
    lg:col-start-1 lg:col-span-7 lg:row-start-4 row-span-1">
    
  <h2 className="font-serif text-xl font-bold mb-2">The Developer’s Journey</h2>
  <p className="text-sm leading-relaxed">
    From learning basic syntax to mastering full-stack development, the path of a software engineer is filled with challenges, creativity, and constant growth. This article explores the milestones, lessons, and experiences that shape a modern developer.
  </p>
</div>


</div>

        <div className="bg-tertiary mx-auto mt-4 w-full max-w-[750px] space-y-4">

  {/* Post */}
  <div className="bg-accent/50 border border-accent px-6 py-5 grid grid-cols-1 gap-4">
    
    {/* Title Section */}
    <div>
      <h2 className="text-2xl font-bold uppercase tracking-wide">
        {postInfo.title}
      </h2>
      <p className="text-sm text-black/70 mt-1">{postInfo.topic}</p>
    </div>

    {/* Image Section */}
    {postInfo.picture && (
      <div className="w-full h-[260px] bg-black/10 overflow-hidden">
        <img 
          src="mistborn.webp" 
          alt="Post visual"
          className="w-full h-full object-contain"
        />
      </div>
    )}

    {/* Content Section */}
    <div>
    <p>
      In <strong>Mistborn</strong>, Brandon Sanderson delivers a story as sharp and cunning as Tyrek sizing up his mark in a dimly lit bar. From the first page, the novel throws you into a world of intrigue and danger, where a young, underestimated protagonist navigates a society built on greed and power. Like Tyrek spotting the man with the golden coins, Vin—Sanderson’s heroine—must read the people around her, anticipate their moves, and outsmart enemies far stronger than she appears.
    </p>

    <p>
      The story is full of clever twists, daring heists, and high-stakes confrontations that keep you on edge. Sanderson’s world-building is impeccable: the magic system feels tangible, the politics are layered, and every confrontation carries weight. If you enjoy seeing clever underdogs manipulate their way through a ruthless world, <strong>Mistborn</strong> delivers thrills, strategy, and a touch of humor in all the right places.
    </p>

    </div>

    {/* Footer Info */}
    <div className="flex justify-between items-center pt-4 border-t border-black/20">
      <span className="text-sm font-semibold uppercase tracking-wide">
        {postInfo.createdBy}
      </span>
      <span className="text-xs text-black/60">{new Date().toDateString()}</span>
    </div>
  </div>

  {/* Duplicate for demo (you can loop this in real code) */}
  <div className="bg-accent/50 border border-accent px-6 py-5 grid grid-cols-1 gap-4">
    <div>
      <h2 className="text-2xl font-bold uppercase tracking-wide">{postInfo.title}</h2>
      <p className="text-sm text-black/70 mt-1">{postInfo.topic}</p>
    </div>

    {postInfo.picture && (
      <div className="w-full h-[350px] bg-black/10 overflow-hidden">
        <img 
          src="cold.jpg" 
          alt="Post visual"
          className="w-full h-full object-contain"
        />
      </div>
    )}

    <div>
      <p>
        In <strong>Best Served Cold</strong>, Joe Abercrombie throws you straight into a world of cunning, revenge, and ruthless opportunists, much like Tyrek sizing up his mark in a dimly lit tavern. The novel follows Monza Murcatto, a skilled and underestimated operative navigating a treacherous landscape where greed and betrayal rule every interaction. Like Tyrek watching the man with gold coins, Monza must read her enemies, anticipate their moves, and strike when the timing is perfect.
      </p>

      <p>
        Abercrombie’s tale is packed with sharp dialogue, morally gray characters, and a plot that twists and turns with deadly precision. Every act of revenge comes with consequences, every alliance is tenuous, and every victory is hard-earned. Fans of dark, cunning fantasy will find themselves drawn into a story that’s as thrilling and unpredictable as a high-stakes game of wits—and just as satisfying when justice is finally served.
      </p>
    </div>

    <div className="flex justify-between items-center pt-4 border-t border-black/20">
      <span className="text-sm font-semibold uppercase tracking-wide">{postInfo.createdBy}</span>
      <span className="text-xs text-black/60">{new Date().toDateString()}</span>
    </div>
  </div>
  
</div>

</main>

    )
}

