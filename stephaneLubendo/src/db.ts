export const sideNav = {
    home: ["Feed", "Favorites", "Pictures", "News"],
    writing: ["Articles", "Blogs", "ShortStories", "Writing","Ramblings"],
    music: ["Feed", "Beats", "Samples", "Songs", "Latest"],
    me: ["About", "Interest", "Pictures", "NextUp"],
    tech: ["Portfolio", "About", "Projects", "Connect"]
}
export type SideNavKey = keyof typeof sideNav;  


export const postInfo = {
    title: "Fantasy Series  Building",
    content: `
    
Tyrek studied the man that sat down across from him, trying not to let his excitement show. The man looked strong, arrogant and going off the rings he had on his fingers rich. He’d been running this scam for a few weeks in this run down bar — this he thought could be the best mark yet. The man reached inside his coat and pulled out a small purse which he dropped on the table with a thump. Gold coins spilled out of the purse, a few hitting the floor. 

Okay this was definitely the best mark yet.

“Are you really that kid that’s been given grown men a hurting, I mean your look 10”
“13, actually and the only thing that’s been hurting is their purses. Oh and maybe their pride” replied Tyrek. The man laughed,
“I’m Rekin, if you can beat me you can keep the entire purse.” 

    `,
    createdBy:"Stephane",
    topic: "creative writing",
    picture: "/Banner.heic"
}

export type postInfoKey = keyof typeof postInfo;  
