import React from 'react'
import style from './Home.module.css'
import { Header } from '../Header/Header'
import LeftSide from './../LeftSide/LeftSide'
import Main from '../Main/Main'
import RightSide from '../RightSide/RightSide'

export default function Home () {
  return (
    <>
      <main>
        <section className='bg-white'>
          <Header />
        </section>
        <section className={`${style.layout}`}>
          <LeftSide />
          <Main />
          <RightSide />
        </section>
      </main>
    </>
  )
}
