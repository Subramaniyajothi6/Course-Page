import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import CourseLayout from './components/CourseLayout'
import BuyCourseSection from './components/BuyCourseSection'
import FaqSection from './components/FaqSection'
import CoursePreviewSection from './components/CoursePreviewSection'
import CourseFooter from './components/CourseFooter'

const App = () => {
  return (
    <div>
      <div>

        <Navbar/>
        <Hero/>
        <IntroSection/>
        <CourseLayout/>
        <BuyCourseSection/>
        <FaqSection/>
        <CoursePreviewSection/>
        <CourseFooter/>

        

      </div>
    </div>
  )
}

export default App