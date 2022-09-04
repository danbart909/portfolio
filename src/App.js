import React, { useState } from 'react'
import { Row, Col } from './components/helper'
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [view, setView] = useState('home')

  const HomeButtons = () => {
    return <>
      <Link
        to='/projects'
        style={{ textDecoration: 'none' }}
      >
        <Row
          p='2vw 5vw'
          border='3px solid blue'
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
        borderBottom='1px solid'
      >
        {view === 'home' ? 'Dan Bartlett' :
        view === 'projects' ? 'Projects' :
        view === 'contact' ? 'Contact' : null}
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

