import React, { useState } from 'react'
import { Row } from './helper'
import { motion } from 'framer-motion'

export default function Top(view) {
  const [rotate, setRotate] = useState(false)

  const titleValues = [
    { y: -150, x: 0 },
    { y: 75, x: 0 },
    { y: 0, x: -125 }
  ]

  const titleValues2 = { rotate: rotate ? -180 : 180 }

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min
  }

  return (
    <Row
      height='12vh'
      p='0 0 2vw 2vw'
      m='0 0 2vw 0'
      alignItems='flex-end'
      backgroundColor='black'
      color='white'
      borderBottom='1px solid'
    >
      <motion.div
        layout
        initial={titleValues[randomNum(0, 2)]}
        animate={{ y: 0, x: 0 }}
        whileTap={titleValues2}
        onAnimationComplete={() => setRotate(!rotate)}
        transition={{ rotate: { duration: .5 } }}
      >
        {view.view === 'home' ? 'My Name is Dan Bartlett' :
        view.view === 'projects' ? 'Projects' : 'Contact' }
      </motion.div>
    </Row>
  )
}