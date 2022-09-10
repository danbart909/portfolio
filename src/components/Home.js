import React from 'react'
import { Row, Col } from './helper'
import { Link } from '@mui/material'

export default function Home() {

  return (
    <Col
      flex='2'
      m='0 0 0 3vw'
      gap='4vw'
      border='2px solid rgb(113, 25, 25)'
    >
      <Row p='1vw'>I am a full-stack web developer and mobile app developer specializing in React and React Native, and a graduate of the Thinkful Full Stack Web Developer program. I have projects built using HTML, CSS, Javascript, React, React Native, Node.js, Express.js, Knex.js, and postgreSQL. I'm interested in learning how to solve problems through code as efficiently as possible, either solo or while collaborating with a team. My willingness to put forth the effort necessary to overcome any challenge makes me a valuable addition to any programming team.</Row>
      <Row p='1vw'>Download my Resume:
        <Link m='0 0 0 1vw' href='/danbartlettresume.docx'>.docx</Link>
      </Row>
    </Col>
  );
}