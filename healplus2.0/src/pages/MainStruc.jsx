import React from 'react'
import Searchbar from '../components/searchbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function MainStruc() {
  return (
    <>
        <Searchbar/>
        <Outlet/>
        <Navbar/>
    </>
  )
}
