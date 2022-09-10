import React from 'react'
// import { Row } from './helper'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

export default function Buttons(view) {
  const x = view.view

  const topHover = x === 'home' ? {backgroundColor: 'rgb(25, 51, 113)'} : {backgroundColor: 'rgb(113, 25, 25)'}
  const botHover = x === 'contact' ? {backgroundColor: 'rgb(25, 51, 113)'} : {backgroundColor: 'rgb(50, 113, 25)'}

  return (
    <>
      <Link
        to={x === 'home' ? '/projects' : '/'}
        style={{ textDecoration: 'none' }}
      >
        <motion.div
          style={{
            padding: '2vw 5vw',
            border: x === 'home' ? '3px solid rgb(25, 51, 113)' : '3px solid rgb(113, 25, 25)',
            color: x === 'home' ? 'rgb(25, 51, 113)' : 'rgb(113, 25, 25)'
          }}
          whileHover={{
            ...topHover,
            color: 'white'
            // scale: [1, 1.2, 1.4, 1, 1],
            // rotate: [0, 0, 270, -270, 0],
            // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 1,
            // ease: "easeInOut",
            // times: [0, 0.2, 0.5, 0.8, 1],
            // repeat: Infinity,
            // repeatDelay: 1
          }}
        >{x === 'home' ? 'Projects' : 'Home'}</motion.div>
      </Link>
      <Link
        to={x === 'contact' ? '/projects' : '/contact'}
        style={{ textDecoration: 'none' }}
      >
        <motion.div
          style={{
            padding: '2vw 5vw',
            border: x === 'contact' ? '3px solid rgb(25, 51, 113)' : '3px solid rgb(50, 113, 25)',
            color: x === 'contact' ? 'rgb(25, 51, 113)' : 'rgb(50, 113, 25)'
          }}
          whileHover={{
            ...botHover,
            color: 'white'
          }}
          transition={{ duration: 1 }}
        >{x === 'contact' ? 'Projects' : 'Contact'}</motion.div>
      </Link>
    </>
  )
}