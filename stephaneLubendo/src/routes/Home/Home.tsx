// import Accordion from "../../components/Accordion";
import Banner from "../../components/Banner";
import { postInfo } from "../../db";


export default function Home() {

  return (
    <main className="w-[80vw] mx-auto pt-4 sm:pt-[calc(77px)] flex flex-col justify-center items-center">
      <Banner pic="/Banner5.HEIC" title="Software Engineer & Writer" content=" Technology is my craft but creativity is my fuel. Outside of engineering, I'm an aspiring writer and producer.
" />

      {/* <Accordion /> */}
      {/* <p className="w-[75%] text-black text-center bg-accent/40 border border-accent p-5 rounded-2xl text-3xl shadow-xl font-bold">
 Technology is my craft but creativity is my fuel. Outside of engineering, I'm an aspiring writer and producer.
       </p> */}
      <div className="bg-tertiary mx-auto mt-2 w-[65%] min-w-[85%] sm:min-w-[65%] md:min-w-[55%] grid grid-cols-1 gap-3 md:[&>*]:h-[325px] [&>*]:h-[315px] border-accent">
    <div className="mx-auto mt-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] flex flex-col gap-8">

    <div 
      className="bg-accent/40 border border-accent rounded-2xl p-8 shadow-xl shadow-black/20 backdrop-blur-sm hover:shadow-2xl transition-all"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-4">
        {postInfo.title}
      </h2>

      {/* Content */}
      <p className="text-white/90 text-lg leading-relaxed mb-6">
        {postInfo.content}
      </p>

      {/* Image */}
      {postInfo.picture && (
        <div className="w-full h-[350px] mb-6">
          <img 
            src="/LogoName.png" 
            alt="Post visual"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center text-base text-white/70 pt-4 border-t border-white/20">
        <span className="font-semibold">#{postInfo.topic}</span>
        <span>
          Posted by <span className="font-bold">{postInfo.createdBy}</span>
        </span>
      </div>
    </div>
    <div 
      className="bg-accent/40 border border-accent rounded-2xl p-8 shadow-xl shadow-black/20 backdrop-blur-sm hover:shadow-2xl transition-all"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-4">
        {postInfo.title}
      </h2>

      {/* Content */}
      <p className="text-white/90 text-lg leading-relaxed mb-6">
        {postInfo.content}
      </p>

      {/* Image */}
      {postInfo.picture && (
        <div className="w-full h-[350px] mb-6">
          <img 
            src="/statues.jpg" 
            alt="Post visual"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center text-base text-white/70 pt-4 border-t border-white/20">
        <span className="font-semibold">#{postInfo.topic}</span>
        <span>
          Posted by <span className="font-bold">{postInfo.createdBy}</span>
        </span>
      </div>
    </div>
    <div 
      className="bg-accent/40 border border-accent rounded-2xl p-8 shadow-xl shadow-black/20 backdrop-blur-sm hover:shadow-2xl transition-all"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-4">
        {postInfo.title}
      </h2>

      {/* Content */}
      <p className="text-white/90 text-lg leading-relaxed mb-6">
        {postInfo.content}
      </p>

      {/* Image */}
      {postInfo.picture && (
        <div className="w-full h-uto mb-6">
 
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center text-base text-white/70 pt-4 border-t border-white/20">
        <span className="font-semibold">#{postInfo.topic}</span>
        <span>
          Posted by <span className="font-bold">{postInfo.createdBy}</span>
        </span>
      </div>
    </div>
    <br className="mb-10" />


</div>
 

      </div>


 
    </main>
    )
}
