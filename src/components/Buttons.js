import React from 'react'
import { Row } from './helper'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'

export default function Buttons(view) {
  const x = view.view

  return (
    <>
      <Link
        to={x === 'home' ? '/projects' : '/'}
        style={{ textDecoration: 'none' }}
      >
        <Button>
          <Row
            border='3px solid white'
            height='15vh'
            width='15vw'
            justifyContent='center'
            alignItems='center'
            style={{ transition: '.5s' }}
            boxShadow='0 0 20px rgba(0, 0, 0, .35)'
            sx={{
              textShadow: '4px 4px 8px #000000',
              '&:hover': { backgroundColor: 'black' }
            }}
          >{x === 'home' ? 'Projects' : 'Home'}</Row>
        </Button>
      </Link>
      <Link
        to={x === 'contact' ? '/projects' : '/contact'}
        style={{ textDecoration: 'none' }}
      >
        <Button>
          <Row
            border='3px solid white'
            height='15vh'
            width='15vw'
            justifyContent='center'
            alignItems='center'
            style={{ transition: '.5s' }}
            boxShadow='0 0 20px rgba(0, 0, 0, .35)'
            sx={{
              textShadow: '4px 4px 8px #000000',
              '&:hover': { backgroundColor: 'black' }
            }}
          >{x === 'contact' ? 'Projects' : 'Contact'}</Row>
        </Button>
      </Link>
    </>
  )
}