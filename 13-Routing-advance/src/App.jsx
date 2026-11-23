import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Women from './pages/Women'
import Men from './pages/Men'


const App = () => {
  return (
    <div className='flex flex-col min-h-screen text-white bg-black text-4xl'>
      <Navbar/>
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/course/:id' element={<CourseDetails/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>  
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
