// import Accordion from "../../components/Accordion";
import BannerMusic from "../../components/BannerMusic";

export default function Music() {

    return (
        <main className="mx-auto w-[80vw] pt-4 sm:pt-[77px] flex flex-col justify-center space-y-6">
    {/* Banner */}
    <BannerMusic pic="/Beats.webp" fit="fit" title="Music Producer" content="Whether I'm producing beats, writing, or studying the craft of the artists who inspire me, my focus always starts in the same place: making something I can feel. If the music connects with others and grows into something bigger, that’s a blessing. But the foundation is always authenticity." />

    {/* Top grid */}
<div className="mx-auto w-full max-w-[90vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 auto-rows-fr">

  {/* About Music */}
  <div className="bg-accent/60 p-8 flex flex-col justify-between col-span-1 sm:col-span-2 lg:row-span-2 border border-black shadow-xl rounded-none">

  {/* Header / Intro */}
  <div>
      <h2 className="text-4xl font-black uppercase mb-4 tracking-wider">
        My Music Vision
      </h2>

      <p className="text-lg leading-relaxed font-medium text-black/90">
        Music has always been more than background noise for me—it’s the part of life that
        sparks imagination. Even as a kid, the instrumentals were what stood out first.
        I’d find myself replaying songs not for the lyrics, but for the production, the
        textures, the way each element fit together like a story told through sound.
        <br /><br />
        I’ve always listened to music through a musician’s eyes: studying drum patterns,
        noticing subtle details in melodies, and feeling the emotion hidden in a beat.
        Now, creating my own instrumentals and experimenting with production has become
        one of the ways I express myself creatively.

      </p>


  </div>

  {/* Favorite Albums Section */}
  <div className="mt-12">
    <h3 className="text-xl font-bold uppercase mb-3 tracking-wide">
      Favorite Albums Right Now
    </h3>

    <p className="text-sm mb-4 text-black/70">
      These albums inspire my sound, energy, and approach to storytelling.
    </p>

    <div className="flex gap-5 flex-wrap">
      {/* Album Card */}
      <div className="w-[110px] h-[110px] border border-black bg-black/10 shadow-md transition-transform">
        <img 
          src="/Rap.png" 
          alt="Album Cover" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[110px] h-[110px] border border-black bg-black/10 shadow-md  transition-transform">
        <img 
          src="/JayZ.png" 
          alt="Album Cover" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[110px] h-[110px] border border-black bg-black/10 shadow-md  transition-transform">
        <img 
          src="/JID.png" 
          alt="Album Cover" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[110px] h-[110px] border border-black bg-black/10 shadow-md  transition-transform">
        <img 
          src="/Joey.jpg" 
          alt="Album Cover" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[110px] h-[110px] border border-black bg-black/10 shadow-md transition-transform">
        <img 
          src="/Jcole2.png" 
          alt="Album Cover" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[110px] h-[110px] border border-black bg-black/10 shadow-md transition-transform">
        <img 
          src="/JayZ2.jpg" 
          alt="Album Cover" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>


  {/* What I'm Listening To */}
  <div className="bg-accent/60 p-4 flex flex-col items-start justify-start border border-black/30 shadow-lg rounded-none lg:row-span-2">
    <h2 className="text-2xl font-bold uppercase mb-3 tracking-wide">
      What I'm Listening To
    </h2>
    <p className="text-md mb-3">
      I got Clipse Let God Sort Them Out on repeat. Pusha T and Malice reunite to deliver bars about their struggles with the streets and faith.
     </p>
    <img src="/images.jpeg" alt="Current playlist" className="object-cover w-full h-[200px] lg:h-full border" />
  </div>


</div>



            {/* Columns */}
            {/* <div className="bg-secondary mx-auto w-full max-w-[85vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 [&>*]:h-[200px] sm:[&>*]:h-[250px]">
                <div className="bg-secondary border border-accent p-4">
                    <h2>Thoughts on J.Cole</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>Reviewing JID album</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>How long can Clispse stay at the top for</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>Thoughts a trap music, is it pushed by the industry or is it what people want</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>Big Krit is back to making music, what can we expect</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                <div className="bg-secondary border border-accent p-4">
                    <h2>Who got next</h2>
                    <img src="/Banner.heic" alt="" />               
                </div>
                
            </div> */}

            {/* Fixed bottom bar */}
            {/* <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 w-[90%] sm:w-[60%] lg:w-[45%] flex justify-between items-center p-2">
                <div className="m-1 flex justify-center items-center w-full h-[50px] sm:h-[60px] border border-accent">
                Music
                </div>
            </div> */}
        </main>

    )
}