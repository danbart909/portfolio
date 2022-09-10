import React from 'react'
import { Row, Col } from './helper'
import { TextField, Button, Link } from '@mui/material'
import { motion } from 'framer-motion'

export default function Contact() {

  return (
    <Col
      flex='2'
      m='0 0 0 3vw'
      border='2px solid rgb(50, 113, 25)'
    >
      <Col
        p='4vh'
        gap='4vh'
        alignItems='center'
      >
        <Row>I have accounts on LinkedIn and GitHub. I even have email, too!</Row>
        <Row
          width='75%'
          justifyContent='space-evenly'
        >
          <Link href="https://www.linkedin.com/in/d-bartlett/" target="_blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <i className="icon fab fa-linkedin fa-2x" style={{ color: 'black' }} role="link" />
            </motion.div>
          </Link>
          <Link href="https://github.com/danbart909" target="_blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <i className="icon fab fa-github fa-2x" style={{ color: 'black' }} role="link" />
            </motion.div>
          </Link>
          <Link href="mailto:danbart909@gmail.com" target="_blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <i className="icon fas fa-envelope fa-2x" style={{ color: 'black' }} role="link" />
            </motion.div>
          </Link>
        </Row>
        <Row>Or, you could just use the form below to send me an email directly.</Row>
      </Col>

      <Row
        // height='100%'
        component='form'
        action="https://formspree.io/xknqpjya"
        method="POST"
        justifyContent='center'
      >
        <Col
          component='fieldset'
          width='80%'
          gap='2vw'
          justifyContent='center'
          border='none'
        >
          <TextField
            label='name'
            name='name'
            required
          />
          <TextField
            label='email'
            name='email'
            required
            type='email'
          />
          <TextField
            label='form'
            name='content'
            placeholder="email goes here"
            required
            multiline
            rows='5'
          />
          <Button
            component='label'
            variant='outlined'
          >
            Send Email
            <input hidden type='submit' name='send' />
          </Button>
        </Col>
      </Row>
    </Col>
  );
}