
import './App.css'
import { AuroraHero } from './components/AuroraHero '
import { BouncyCardsFeatures } from './components/BouncyCardsFeatures'
import { DragCloseDrawerExample } from './components/DragCloseDrawerExample '
import ExampleWrapper from './components/ExampleWrapper '
import Header from './components/Header'

import Navbar from './components/Navbar'
import { RevealBento } from './components/RevealBento'

import { TextParallaxContentExample } from './components/TextParallaxContentExample'
import VerticalAccordion from './components/VerticalAccordion'



function App() {


  return (
   <>
  <Navbar />
  <Header />
    <AuroraHero />
    <BouncyCardsFeatures />

    <TextParallaxContentExample />
    <ExampleWrapper />
    <VerticalAccordion />
    <RevealBento />
    <DragCloseDrawerExample />
   </>
  )
}

export default App
