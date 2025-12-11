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
      {postInfo.title}
    </h2>

    <p className="text-sm leading-relaxed">
      {postInfo.content}
    </p>
  </div>

  {/* MAIN CENTER ARTICLE */}
  <div className="bg-accent/40 border border-black/10 rounded p-4 
      col-span-1 row-span-1  
      md:col-start-3 md:col-span-4 
      lg:col-start-3 lg:col-span-5 lg:row-span-3">

    <h2 className="font-serif text-2xl font-bold mb-2">
      {postInfo.title}
    </h2>

    <p className="text-sm leading-relaxed mb-4">
      {postInfo.content}
    </p>

    <div className="text-xs text-gray-700 mt-4 flex justify-between">
      <div>{postInfo.topic}</div>
      <div>{postInfo.createdBy}</div>
    </div>
  </div>

  {/* RIGHT SMALL ARTICLES (COLUMN 3) */}
  <div className="bg-accent/40 border border-black/10 rounded p-4 
      col-span-1 md:col-span-2 
      lg:col-start-8 lg:col-span-2 row-span-1">
    <h2 className="font-serif font-semibold mb-1">Story 3.1</h2>
    <p className="text-xs leading-snug">Short news blurb goes here.</p>
  </div>

  <div className="bg-accent/40 border border-black/10 rounded p-4 
      col-span-1 md:col-span-2 
      lg:col-start-8 lg:col-span-2 row-span-1">
    <h2 className="font-serif font-semibold mb-1">Story 3.2</h2>
    <p className="text-xs leading-snug">Short news blurb goes here.</p>
  </div>

  <div className="bg-accent/40 border border-black/10 rounded p-4 
      col-span-1 md:col-span-2 
      lg:col-start-8 lg:col-span-2 row-span-1">
    <h2 className="font-serif font-semibold mb-1">Story 3.3</h2>
    <p className="text-xs leading-snug">Short news blurb goes here.</p>
  </div>

  <div className="bg-accent/40 border border-black/10 rounded p-4 
      col-span-1 md:col-span-2 
      lg:col-start-8 lg:col-span-2 row-span-1">
    <h2 className="font-serif font-semibold mb-1">Story 3.4</h2>
    <p className="text-xs leading-snug">Short news blurb goes here.</p>
  </div>

  {/* BOTTOM WIDE ARTICLE */}
  <div className="bg-accent/40 border border-black/10 rounded p-4 
      col-span-1 md:col-span-4 
      lg:col-start-1 lg:col-span-7 lg:row-start-4 row-span-1">
      
    <h2 className="font-serif text-xl font-bold mb-2">Bottom Story</h2>
    <p className="text-sm leading-relaxed">
      Additional newspaper-style article content can go here.
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
      <p className="leading-relaxed text-lg">
        {postInfo.content}
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
      <p className="leading-relaxed text-lg">{postInfo.content}</p>
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

