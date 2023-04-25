import React from 'react'
import About from './About/About'
import Contact from './Contact'
import Home from './Home/Home'
import Projects from './Projects/Projects'

const Main = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Main