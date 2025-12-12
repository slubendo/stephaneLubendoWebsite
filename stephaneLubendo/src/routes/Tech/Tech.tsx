import { Outlet } from "react-router-dom";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import AccordionTech from "../../components/AccordionTech";

export default function Tech() {

    const iconSize = 24;


    return (
<main className="flex flex-col mx-auto w-[80vw] justify-center items-center pt-[77px]">
  {/* First grid */}
 <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-4 min-h-[500px] mb-4">

  {/* MAIN ARTICLE - left side */}
  <div className="flex flex-col bg-accent/40 border border-black/10 rounded p-4 
      md:col-span-3 md:row-span-4 leading-relaxed">

    {/* Headline */}
    <h1 className="font-serif text-3xl font-bold mb-3">
      Full Stack Web Developer
    </h1>

    {/* Body Content */}
<div className="text-md font-light mb-6">

  I’m a dedicated <span className="font-medium">Full Stack Software Engineer</span> and 
  <span className="font-medium"> Quality Assurance Engineer</span> who loves turning ideas into reliable, user-focused digital products.
  <br /><br />

  I specialize in building full-featured web applications that are clean, scalable,  
  and thoughtfully designed from front to back.
  <br /><br />

  With experience across modern frontend frameworks, backend systems, databases,  
  and testing methodologies, I approach every project with a balance of creativity  
  and technical precision. I care deeply about clean architecture, maintainable code,  
  and solutions that hold up in the real world.
  <br /><br />

  My portfolio highlights a selection of applications I’ve built, each one  
  reflecting my commitment to problem solving, usability, and continuous learning.  
  These projects represent the work I’m most proud of and the growth I continue to chase  
  as an engineer.

</div>


    {/* Footer / Skills section */}

  </div>

  {/* RIGHT COLUMN — TOP IMAGE */}
  <div className="bg-accent/40 border border-black/10 rounded p-2 
      md:col-start-4 md:col-span-2 md:row-span-2 flex items-center justify-center">
    <img src="/Banner2.HEIC" alt="" className="w-full h-auto rounded" />
  </div>

  {/* RIGHT COLUMN — LOWER ARTICLE */}
  <div className="bg-accent/40 border border-black/10 rounded p-4 
      md:col-start-4 md:col-span-2 md:row-start-3 md:row-span-2 leading-relaxed">

    <h3 className="font-serif text-lg font-semibold mb-2">
  Favorite Pastimes
</h3>

<p className="text-sm font-light">
  When I’m not programming, I love spending time reading, exploring new places, and playing basketball.
  These keep me inspired, active, and always learning something new.
</p>


  </div>

</div>

  {/* Side by side frontend/backend */}
  <div className="flex justify-between w-full md:w-[80%]">
    <div className="flex flex-col md:flex-row w-full md:w-[80%] mx-auto gap-4">

{/* FRONTEND */}
<div className="bg-accent/40 flex-1 p-6 rounded-xl border border-black/10 flex flex-col min-h-[40vh]">
  <h2 className="font-serif text-2xl font-bold mb-4">Frontend</h2>

<p className="text-sm leading-relaxed mb-6">
  When it comes to frontend I enjoy building clean, responsive, and intuitive user interfaces.
  I’m passionate about crafting experiences that feel smooth, look modern, and function seamlessly across devices.
  My work blends strong design sense with solid engineering principles, ensuring every interface is both visually
  appealing and performance driven. 
</p>
<h3 className="font-serif text-xl font-semibold mb-3">Key Frontend Skills</h3>

<ul className="grid grid-cols-2 gap-x-6 list-disc ml-5 text-sm space-y-1 mb-6">
  <li>React + Hooks</li>
  <li>TypeScript</li>
  <li>JavaScript</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>Next.js</li>
  <li>Tailwind CSS</li>
  <li>TanStack</li>
  <li>Vite</li>
  <li>Zustand / Context API</li>
</ul>


</div>



{/* BACKEND */}

<div className="bg-accent/40 flex-1 p-6 rounded-xl border border-black/10 flex flex-col min-h-[40vh]">
  <h2 className="font-serif text-2xl font-bold mb-4">Backend</h2>

<p className="text-sm leading-relaxed mb-6">
  On the backend I implement reliable, scalable systems that make
  applications run smoothly behind the scenes. I focus on building clean APIs, efficient
  database structures, and robust server-side logic that supports real-world performance.
  Whether I’m optimizing queries, architecting features, or ensuring data integrity,
  I aim to create backend solutions that are fast, maintainable, and easy to understand.
</p>


  <h3 className="font-serif text-xl font-semibold mb-3">Key Backend Skills</h3>
<ul className="grid grid-cols-2 gap-x-6 list-disc ml-5 text-sm space-y-1 mb-6">
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>Python</li>
  <li>C#</li>
  <li>ASP.NET</li>
  <li>AWS</li>
  <li>REST API</li>
  <li>Drizzle</li>
  <li>SQL</li>
  <li>MongoDB</li>
  <li>Drizzle ORM</li>
</ul>





</div>


</div>

 </div>
<h2 className="text-2xl font-bold m-4">Technologies I work with</h2>


<div className="bg-accent/60 border shadow-lg rounded-xl p-4 mt-auto">
  <div className="grid grid-cols-8 gap-4 mt-ao">
    {[
      { src: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png", alt: "React" },
      { src: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png", alt: "TypeScript" },
      { src: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png", alt: "JavaScript" },
      { src: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png", alt: "HTML" },
      { src: "https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png", alt: "C#" },
      { src: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png", alt: "Node.js" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png", alt: "Python" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png", alt: "Laravel" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png", alt: "MongoDB" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png", alt: "AWS" },
      { src: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704", alt: "Next.js" },
      { src: "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png", alt: "MySQL" },
      { src: "https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png", alt: "PHP" },
      { src: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/wordpress.png", alt: "HTML" },
      { src: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png", alt: "CSS" },
      { src: "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png", alt: "Tailwind CSS" },
    ].map((icon, i) => (
      <img
        key={i}
        src={icon.src}
        alt={icon.alt}
        title={icon.alt}
        className="w-[60px] mx-auto transition-transform"
      />
    ))}
  </div>
  </div>




            
  {/* "Why work with us" section */}
<h2 className="text-2xl font-bold m-4">Past Projects</h2>

<div className="mx-auto w-full md:w-[80%] grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">

  {/* Trell-IT */}
  <div className="bg-accent/60 p-4 rounded-xl col-span-1 md:col-span-6">
    <h3 className="text-xl font-semibold mb-2">Trell-IT</h3>
    <p className="mb-3">
      Trell-IT is a modern kanban-style task management application inspired by Trello.  
      It features drag-and-drop boards, real-time updates, and a clean, intuitive UI.  
      Built with React, Zustand, and a modular backend, it provides a smooth workflow 
      for teams and individuals organizing daily tasks.
    </p>
<a
  href="https://trell-it.fly.dev"
  target="_blank"
  className="relative group block rounded-lg overflow-hidden max-h-[450px]"
>
  {/* Image */}
  <img
    src="/Trell-IT.png"
    alt="Trell-IT preview"
    className="w-full object-contain max-h-[450px] transition-transform duration-300 ease-in-out group-hover:scale-105"
  />

  {/* Eye icon overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  </div>
</a>

  </div>

  {/* TaskIT */}
  <div className="bg-accent/60 p-4 rounded-xl col-span-1 md:col-span-3">
    <h3 className="text-xl font-semibold mb-2">TaskIT</h3>
    <p className="mb-3">
      TaskIT is a lightweight productivity app focused on creating, tracking, and completing tasks efficiently.  
      Designed with simplicity in mind, it uses React and Tailwind for a snappy UI and stores user data reliably 
      with modern backend technologies.
    </p>
<a
  href="https://task-it-list.fly.dev"
  target="_blank"
  className="relative group block rounded-lg overflow-hidden max-h-[450px]"
>
  {/* Image */}
  <img
    src="/Task.png"
    alt="TaskIT preview"
    className="w-full object-contain max-h-[450px] transition-transform duration-300 ease-in-out group-hover:scale-105"
  />

  {/* Eye icon overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  </div>
</a>

  </div>

  {/* XYTweet */}
  <div className="bg-accent/60 p-4 rounded-xl col-span-1 md:col-span-3">
    <h3 className="text-xl font-semibold mb-2">XYTweet</h3>
    <p className="mb-3">
      XYTweet is a microblogging platform inspired by Twitter, built to experiment with social-feed designs, 
      authentication, and fast database queries.  
      It supports posting, liking, following feeds, and uses SQL/MySQL + Drizzle ORM on the backend.
    </p>
<a
  href="https://xy-tweet-xi.vercel.app"
  target="_blank"
  className="relative group block rounded-lg overflow-hidden max-h-[450px]"
>
  {/* Image */}
  <img
    src="/Twatter.png"
    alt="XYTweet preview"
    className="w-full object-contain max-h-[450px] transition-transform duration-300 ease-in-out group-hover:scale-105"
  />

  {/* Eye icon overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  </div>
</a>


  </div>

</div>

<h2 className="text-2xl font-bold m-4">Other Projects</h2>

  <AccordionTech />


  {/* Footer / contact form */}
  <div className="flex flex-col w-full items-center">
    <h2 className="text-4xl my-4">Lets Connect</h2>
 <div className="flex flex-wrap justify-center gap-2">
      
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/stephanelubendo/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/20 rounded-xl flex justify-center items-center w-[45px] h-[45px] hover:bg-white/40 transition"
      >
        <IoLogoLinkedin size={iconSize} color="white" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/slubendo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/20 rounded-xl flex justify-center items-center w-[45px] h-[45px] hover:bg-white/40 transition"
      >
        <IoLogoGithub size={iconSize} color="white" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/stephanelubendo/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/20 rounded-xl flex justify-center items-center w-[45px] h-[45px] hover:bg-white/40 transition"
      >
        <IoLogoInstagram size={iconSize} color="white" />
      </a>

      {/* Email */}
      <a
        href="mailto:stephane.lubendo@gmail.com"
        className="bg-white/20 rounded-xl flex justify-center items-center w-[45px] h-[45px] hover:bg-white/40 transition"
      >
        <AiOutlineMail size={iconSize} color="white" />
      </a>

    </div>

   <div className="w-full md:w-[40%] h-[300px] border border-accent p-2 rounded-2xl mb-50 mt-8 bg-tertiary relative">
          <form className="flex flex-col gap-4 p-4">
            <input
              type="text"
              className="p-2 rounded bg-accent/40 relative"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="p-2 rounded bg-accent/40 relative"
              placeholder="Email"
            />
            <textarea
              className="p-2 rounded bg-accent/40 relative min-h-20"
              placeholder="Content"
            />
            <button type="submit" className="bg-accent border p-2 rounded relative">
              Submit
            </button>
          </form>
    </div>

  </div>

  <Outlet />
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>

</main>

    )
}