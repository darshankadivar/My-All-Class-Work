import React from 'react'
import Navbar from './Component/Navbar'
import Sliderone from './Component/Sliderone'
import Card from './Component/Card'
import ViratFashionPage from './Component/ViratFashionPage'
import TrendingCategories from './Component/TrendingCategories'
import BestSellers from './Component/BestSellers'
import WeAreWrogn from './Component/WeAreWrogn'
import WrognWallpapers from './Component/Wallpapers'
import ServiceHighlights from './Component/ServiceHighlights'
import Footer from './Component/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Sliderone/>
      <Card/>
      <ViratFashionPage />
      <TrendingCategories />
      <BestSellers />
      <WeAreWrogn />
      <WrognWallpapers />
      <ServiceHighlights />
      <Footer />
    </div>
  )
}
