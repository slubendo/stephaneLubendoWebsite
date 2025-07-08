import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './routes/Home/HomeLayout'
import Feed from './routes/Home/Feed'
import Home from './routes/Home/Home'
import Favorites from './routes/Home/Favorites'
import Pictures from './routes/Home/Pictures'
import WritingLayout from './routes/Writing/WritingLayout'
import Writing from './routes/Writing/Writing'
import Stories from './routes/Writing/Stories'
import Articles from './routes/Writing/Articles'
import Blogs from './routes/Writing/Blogs'
import WritingFavorites from './routes/Writing/WritingFavorites'
import TechLayout from './routes/Tech/TechLayout'
import Tech from './routes/Tech/Tech'
import ProjectLayout from './routes/Tech/Project/ProjectLayout'
import Projects from './routes/Tech/Project/Projects'
import Project from './routes/Tech/Project/Project'
import TechExperience from './routes/Tech/TechExperience'
import TechService from './routes/Tech/TechService'
import TechLatest from './routes/Tech/TechLatest'
import TechAbout from './routes/Tech/TechAbout'
import TechContact from './routes/Tech/TechContact'
import MusicLayout from './routes/Music/MusicLayout'
import Music from './routes/Music/Music'
import Productions from './routes/Music/Productions'
import Raps from './routes/Music/Raps'
import MusicFavorites from './routes/Music/MusicFavorites'
import Samples from './routes/Music/Samples'
import MusicService from './routes/Music/MusicService'
import MusicExperience from './routes/Music/MusicExperience'
import MerchLayout from './routes/Merch/MerchLayout'
import MeLayout from './routes/Me/MeLayout'
import Me from './routes/Me/Me'
import Passions from './routes/Me/Passions'
import WhatIDo from './routes/Me/WhatIDo'
import WhatsNext from './routes/Me/WhatsNext'
import MeContact from './routes/Me/MeContact'
import AdminLayout from './routes/Me/Admin/AdminLayout'
import Admin from './routes/Me/Admin/Admin'
import Login from './routes/Me/Admin/Login'
import CRUD from './routes/Me/Admin/CRUD'
import Todo from './routes/Me/Admin/Todo'
import Plan from './routes/Me/Admin/Plan'
import Merch from './routes/Merch/Merch'
import Clothes from './routes/Merch/Clothes'
import Accessories from './routes/Merch/Accessories'
import Other from './routes/Merch/Other'


function App() {

  return (
   <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="pictures" element={<Pictures />} />
        </Route>
        <Route path="/writing" element={<WritingLayout />}>
          <Route index element={<Writing />} />
          <Route path="shortStories" element={<Stories />} />
          <Route path="articles" element={<Articles />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="favorites" element={<WritingFavorites />} />
        </Route>
        <Route path="/tech" element={<TechLayout />}>
          <Route index element={<Tech />} />
          <Route path="project" element={<ProjectLayout />}>
            <Route index element={<Projects />} />
            <Route path=':projectName' element={<Project />} />
          </Route>
          <Route path="experience" element={<TechExperience />} />
          <Route path="services" element={<TechService />} />
          <Route path="techLatest" element={<TechLatest />} />
          <Route path="about" element={<TechAbout />} />
          <Route path="contact" element={<TechContact />} />
        </Route>
        <Route path="/music" element={<MusicLayout />}>
          <Route index element={<Music/>} />
          <Route path="production" element={<Productions />} />
          <Route path="rap" element={<Raps />} />
          <Route path="favorites" element={<MusicFavorites />} />
          <Route path="samples" element={<Samples />} />
          <Route path="services" element={<MusicService />} />
          <Route path="experience" element={<MusicExperience />} />
        </Route>
        <Route path="/me" element={<MeLayout />}>
          <Route index element={<Me />} />
          <Route path="passions" element={<Passions />} />
          <Route path="whatIDo" element={<WhatIDo />} />
          <Route path="whatsNext" element={<WhatsNext />} />
          <Route path="contact" element={<MeContact />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Admin/>} />
            <Route path="login" element={<Login />} />
            <Route path="crud" element={<CRUD/>} />
            <Route path="todo" element={<Todo />} />
            <Route path="plan" element={<Plan />} />
          </Route>
        </Route>
          <Route path="/merch" element={<MerchLayout />}>
          <Route index element={<Merch />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="other" element={<Other />} />
        </Route>
        <Route path="*" element={<div>404: Page not found</div>} />
      </Routes>
    </main>
   </BrowserRouter>
  )
}

export default App
