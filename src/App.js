import React, { useState, useEffect } from 'react'
import { Row, Col } from './components/helper'
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { useSpring, animated } from 'react-spring'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [view, setView] = useState('home')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/projects') setView('projects')
    else if (location.pathname === '/contact') setView('contact')
  }, [location.pathname])

  const animProps = [
    // useSpring({to: { opacity: 1 }, from: { opacity: 0 }, reset: true}),
    useSpring({to: { x: 0 }, from: { x: -500 }, reset: true}),
    useSpring({to: { y: 0 }, from: { y: 500 }, reset: true}),
    useSpring({to: { y: 0 }, from: { y: -500 }, reset: true})
  ]

  const randomNum = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;

  const HomeButtons = () => {
    return <>
      <Link
        to='/projects'
        style={{ textDecoration: 'none' }}
      >
        <Row
          p='2vw 5vw'
          border='3px solid blue'
          color='black'
          onClick={() => setView('projects')}
        >Projects</Row>
      </Link>
      <Link
        to='/contact'
        style={{ textDecoration: 'none' }}
      >
        <Row
          p='2vw 5vw'
          border='3px solid green'
          color='black'
          onClick={() => setView('contact')}
        >Contact</Row>
      </Link>
    </>
  }

  const ProjectsButtons = () => {
    return <>
      <Link
        to='/'
        style={{ textDecoration: 'none' }}
      >
        <Row
          p='2vw 5vw'
          border='3px solid red'
          color='black'
          onClick={() => setView('home')}
        >Home</Row>
      </Link>
      <Link
        to='/contact'
        style={{ textDecoration: 'none' }}
      >
        <Row
          p='2vw 5vw'
          border='3px solid green'
          color='black'
          onClick={() => setView('contact')}
        >Contact</Row>
      </Link>
    </>
  }

  const ContactButtons = () => {
    return <>
      <Link
        to='/'
        style={{ textDecoration: 'none' }}
      >
        <Row
          p='2vw 5vw'
          border='3px solid red'
          color='black'
          onClick={() => setView('home')}
        >Home</Row>
      </Link>
      <Link
        to='/projects'
        style={{ textDecoration: 'none' }}
      >
        <Row
          p='2vw 5vw'
          border='3px solid blue'
          color='black'
          onClick={() => setView('projects')}
        >Projects</Row>
      </Link>
    </>
  }

  return (
    <>
      <Row
        height='12vh'
        p='0 0 2vw 2vw'
        m='0 0 2vw 0'
        alignItems='flex-end'
        backgroundColor='black'
        color='white'
        borderBottom='1px solid'
      >
        <animated.div style={animProps[randomNum]}>
          {view === 'home' ? 'My name is Dan Bartlett' :
          view === 'projects' ? 'Projects' :
          view === 'contact' ? 'Contact' : null}
        </animated.div>
      </Row>
      <Row
        height='75vh'
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Col
          flex='1'
          justifyContent='space-evenly'
          alignItems='center'
        >
          <Routes>
            <Route path='/' element={<HomeButtons />} />
            <Route path='projects' element={<ProjectsButtons />} />
            <Route path='contact' element={<ContactButtons />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

