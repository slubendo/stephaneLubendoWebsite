export const sideNav = {
    home: ["Feed", "Favorites", "Pictures", "News"],
    writing: ["Articles", "Blogs", "ShortStories", "Writing","Ramblings"],
    music: ["Feed", "Beats", "Samples", "Songs", "Latest"],
    me: ["About", "Interest", "Pictures", "NextUp"],
    tech: ["Portfolio", "About", "Projects", "Connect"]
}
export type SideNavKey = keyof typeof sideNav;  
