import React from 'react'
import { Box } from '@mui/material'

export const Row = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='row'
    fontSize='calc(14px + 6 * ((100vw - 335px) / 1265))'
  >{props.children}</Box>
}

export const Col = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='column'
    fontSize='calc(14px + 6 * ((100vw - 335px) / 1265))'
  >{props.children}</Box>
}