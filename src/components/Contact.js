import React from 'react'
import { Row, Col } from './helper'
import { TextField, Button, Link, createTheme, ThemeProvider } from '@mui/material'
import { motion } from 'framer-motion'

export default function Contact() {

  const theme = createTheme({
    palette: {
      primary: { main: '#ffffff' },
      secondary: { main: '#ffffff' },
      text: { primary: '#ffffff' },
    }
  })

  return (
    <>
      <Col
        m='4vh 0'
        gap='3vh'
        alignItems='center'
      >
        <Row
          p='0 10vw'
          textAlign='center'
        >I have accounts on LinkedIn and Github, but for communication I would prefer email. I even have a form below to make it easy on you.</Row>
        <Row
          width='75%'
          p='2vh 0 0 0'
          justifyContent='space-evenly'
        >
          <Link href="https://www.linkedin.com/in/d-bartlett/" target="_blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <i className="icon fab fa-linkedin fa-2x" style={{ color: 'white' }} role="link" />
            </motion.div>
          </Link>
          <Link href="https://github.com/danbart909" target="_blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <i className="icon fab fa-github fa-2x" style={{ color: 'white' }} role="link" />
            </motion.div>
          </Link>
          <Link href="mailto:danbart909@gmail.com" target="_blank">
            <motion.div whileHover={{ scale: 1.3 }}>
              <i className="icon fas fa-envelope fa-2x" style={{ color: 'white' }} role="link" />
            </motion.div>
          </Link>
        </Row>
      </Col>

      <ThemeProvider theme={ theme }>
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
            gap='1vw'
            justifyContent='center'
            border='none'
          >
            <Row
              justifyContent='space-between'
            >
              <Col
                gap='.5vw'
                width='48%'
              >
                <Row>Name</Row>
                <TextField
                  // label='Name'
                  name='name'
                  required
                  sx={{
                    backgroundColor: 'black',
                    borderRadius: 2,
                    border: '1px solid #ffffff'
                  }}
                />
              </Col>
              <Col
                gap='.5vw'
                width='48%'
              >
                <Row>Email Address</Row>
                <TextField
                  // label='Email'
                  name='email'
                  type='email'
                  required
                  sx={{
                    backgroundColor: 'black',
                    borderRadius: 2,
                    border: '1px solid #ffffff'
                  }}
                />
              </Col>
            </Row>
            <Col gap='.5vw'>
              <Row>Your Message</Row>
              <TextField
                // label='Form'
                name='content'
                // placeholder="Type Your Email Here"
                required
                multiline
                rows='8'
                sx={{
                  backgroundColor: 'black',
                  borderRadius: 2,
                  border: '1px solid #ffffff'
                }}
              />
            </Col>
            <Button
              component='label'
              variant='outlined'
              sx={{
                borderColor: 'white',
                color: 'white',
                margin: '2vh 0 0 0',
                '&:hover': {
                  backgroundColor: 'black'
                }
              }}
            >
              Send Email
              <input hidden type='submit' name='send' />
            </Button>
          </Col>
        </Row>
      </ThemeProvider>
    </>
  );
}