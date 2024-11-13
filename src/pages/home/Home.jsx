import React from 'react'
import Slider from '../../components/slider/Slider'
import cl from './Home.module.css'

export default function Home() {
  return (
    <>
      <Slider />
      <div className={cl.container_slider}>
      </div>
    </>
  )
}
