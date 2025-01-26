import './App.css'
import Features from './components/Features'
import Hero from './components/Hero'
import HighLights from './components/HighLights'
import Model from './components/Model'
import NavBar from './components/NavBar'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className='bg-black'>
      <NavBar/> 
      <Hero/> 
      <HighLights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>

    </main>
  )
}

export default Sentry.withProfiler(App);
