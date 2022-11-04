import React from 'react'
import { Row, Col } from './components/helper'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Top from './components/Top'
import Buttons from './components/Buttons'

export default function App() {
  return (
    <Col
      height='100vh'
    >
      <Routes>
        <Route path='/' element={<Top view={'home'} />} />
        <Route path='projects' element={<Top view={'projects'} />} />
        <Route path='contact' element={<Top view={'contact'} />} />
      </Routes>
      <Row
        height='100%'
        p='4vh 0'
        style={{ background: `linear-gradient(225deg, #f107a3, #a21561, #7b2ff7)` }}
      >
        <Col
          flex='2'
          m='0 0 0 3vw'
          border='2px solid white'
          boxShadow='0 0 20px rgba(0, 0, 0, .35)'
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </Col>
        <Col
          flex='1'
          justifyContent='space-evenly'
          alignItems='center'
        >
          <Routes>
            <Route path='/' element={<Buttons view='home' />} />
            <Route path='projects' element={<Buttons view='projects' />} />
            <Route path='contact' element={<Buttons view='contact' />} />
          </Routes>
        </Col>
      </Row>
    </Col>
  );
}

