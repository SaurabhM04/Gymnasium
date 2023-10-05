import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/Logo1.png'
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="logo1" width='200px' height='100px'/>
        <Typography variant='h5' pb='40px' mt='20px'>
        Made with ❤️ by Saurabh Mishra
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
