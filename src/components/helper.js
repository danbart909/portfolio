import React from 'react'
import { Box } from '@mui/material'

export const Row = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='row'
    fontSize='calc(14px + 6 * ((100vw - 335px) / 1265))'
    color='white'
    // sx={{ textShadow: '4px 4px 8px #000000' }}
  >{props.children}</Box>
}

export const Col = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='column'
    fontSize='calc(14px + 6 * ((100vw - 335px) / 1265))'
    color='white'
    sx={{ textShadow: '3px 3px 10px #000000' }}
  >{props.children}</Box>
}