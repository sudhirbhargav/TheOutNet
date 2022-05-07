import React from 'react'
import Footer from './Pages/Footer'
import { Men } from './Pages/Men'
import { Mendata } from './Pages/Mendata'
import { Mensample } from './Pages/Mensample'
import Navbar from './Pages/Navbar'
import One from './Pages/one'
import { Title } from './Pages/Title'
import { Women } from './Pages/Women'

export const Main = () => {
  return (
    <>
    {/* <Mendata/> */}
    {/* <One/> */}
    {/* <Women/> */}
    <Navbar/>
    <Title/>
    <Men/>
    <Mensample/>
    <Footer/>
    </>
  )
}
