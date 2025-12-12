// import Accordion from "../../components/Accordion";
import Banner from "../../components/Banner";
import { postInfo } from "../../db";


export default function Home() {

  return (
    <main className="w-[80vw] mx-auto pt-4 sm:pt-[calc(77px)] flex flex-col justify-center items-center">
      <Banner pic="/Banner5.HEIC" title="Software Engineer & Writer" content=" Technology is my craft but creativity is my fuel. Outside of engineering, I'm an aspiring writer and producer.
" />


  <div className="bg-tertiary mx-auto mt-2 w-[65%] min-w-[85%] sm:min-w-[65%] md:min-w-[55%] grid grid-cols-1 gap-3 md:[&>*]:h-[325px] [&>*]:h-[315px] border-accent">
    <div className="mx-auto mt-4 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] flex flex-col gap-8">

    <div 
      className="bg-accent/40 border border-accent rounded-2xl p-8 shadow-xl shadow-black/20 backdrop-blur-sm hover:shadow-2xl transition-all"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-4">
      Tech, Literature and Music Creator
      </h2>

      {/* Content */}
      <p className="text-white/90 text-lg leading-relaxed mb-6">
  I am a creator who works with technology, literature, and music. My work in software development focuses on building tangible tech solutions, websites and apps. Beyond code, I explore ideas and stories through writing, and craft music that resonates with listeners.
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
      Exploring Japan: A Journey of Contrasts and Connections
      </h2>

      {/* Content */}
        <article className="prose lg:prose-xl mx-auto my-8 p-4">

      <p className="text-white/90 text-lg leading-relaxed mb-6">
            Traveling to Japan was an experience that completely opened my eyes. From the moment I landed in Tokyo, I was struck by the way tradition and modernity coexist seamlessly. Towering skyscrapers, neon lights, and bustling train stations exist side by side with centuries-old temples, serene gardens, and centuries-old tea houses. It’s a culture that feels both fast-paced and deeply respectful of its history.
          </p>

      <p className="text-white/90 text-lg leading-relaxed mb-6">
            Food was another highlight. From sushi bars in Tokyo to street food in Osaka, every meal was an adventure. The care in presentation, the freshness of the ingredients, and the respect for culinary tradition stood out to me. Yet, despite the differences, I found comfort in universal pleasures—ramen that warms the soul, shared snacks with new friends, and the joy of discovering something new around every corner.
          </p>

      <p className="text-white/90 text-lg leading-relaxed mb-6">
            Ultimately, Japan felt like a mirror reflecting both differences and similarities. The culture is unique, full of rituals, symbols, and customs that are unlike anywhere else. Yet, at the heart of it, the people are human—curious, kind, and creative—just like everywhere else in the world. Traveling there wasn’t just a sightseeing trip; it was an exploration of how culture shapes behavior, priorities, and the ways we connect with one another.
          </p>

      <p className="text-white/90 text-lg leading-relaxed mb-6">
            Japan left me with a sense of awe, a notebook full of memories, and a deeper appreciation for the ways cultures can differ while still sharing the same fundamental human experiences. I can’t wait to return and discover even more of its contrasts, connections, and quiet surprises.
          </p>
        </article>


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
        Looking Beyond Career Goals: Living Life on Your Own Terms
      </h2>

      {/* Content */}
        <article className="prose lg:prose-xl mx-auto my-8 p-4">
      <p className="text-white/90 text-lg leading-relaxed mb-6">
            In a world that constantly measures success by promotions, salaries, and job titles, it’s easy to get caught up in chasing career goals without asking a bigger question: what kind of life do I want to live? While professional achievements are important, they’re only one part of a larger picture. True fulfillment comes from aligning your work with your passions, values, and the experiences you want to have outside the office.
          </p>

      <p className="text-white/90 text-lg leading-relaxed mb-6">
            Pursuing life on your own terms doesn’t mean abandoning ambition—it means expanding your perspective. It means making room for hobbies, travel, relationships, and personal growth, even when they don’t fit neatly into a resume. It means asking yourself what excites you, what challenges you, and what moments you want to remember when you look back on your life.
          </p>

      <p className="text-white/90 text-lg leading-relaxed mb-6">
            Often, the most memorable experiences come from stepping off the conventional path. Learning a new skill, exploring a different culture, or simply taking time to slow down can provide insights and inspiration that no promotion or award ever could. By broadening your focus beyond career metrics, you create a life that feels rich, intentional, and fully yours.
          </p>

      <p className="text-white/90 text-lg leading-relaxed mb-6">
            At the end of the day, pursuing life on your own terms is about choice and balance. It’s about recognizing that while career goals can guide you, they shouldn’t define you. By prioritizing experiences, relationships, and personal growth alongside professional milestones, you can build a life that’s not just successful, but meaningful and fulfilling in ways that matter most to you.
          </p>

      <p className="text-white/90 text-lg leading-relaxed mb-6">
            Remember, your life is a story you’re writing every day. Make it one worth remembering—not just for the job titles you’ve held, but for the moments, adventures, and connections that make it uniquely yours.
          </p>
        </article>


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
