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

         <div className="bg-tertiary mx-auto mt-2 w-[50%] min-w-[85%] sm:min-w-[65%] md:min-w-[55%] grid grid-cols-1 gap-3 md:[&>*]:h-[325px] [&>*]:h-[315px] border-accent">
           <div className="border-t border-accent bg-accent/50  px-9 py-6">
                <h2>{postInfo.title}</h2>
                <p>{postInfo.content}</p>
                <div>
                  {/* <img src={postInfo.picture} alt="" /> */}
                </div>
                <div>
                  <div>{postInfo.topic}</div>
                  <div>{postInfo.createdBy}</div>
                </div>
            </div>

             <div className="border-t border-accent bg-accent/50 px-9 py-6">
                <h2>{postInfo.title}</h2>
                <p>{postInfo.content}</p>
                <div>
                  {/* <img src={postInfo.picture} alt="" /> */}
                </div>
                <div>
                  <div>{postInfo.topic}</div>
                  <div>{postInfo.createdBy}</div>
                </div>
            </div>

              <div className="border-t border-accent bg-accent/50 px-9 py-6">
                <h2>{postInfo.title}</h2>
                <p>{postInfo.content}</p>
                <div>
                  {/* <img src={postInfo.picture} alt="" /> */}
                </div>
                <div>
                  <div>{postInfo.topic}</div>
                  <div>{postInfo.createdBy}</div>
                </div>
            </div>
         
      </div>
</main>

    )
}

