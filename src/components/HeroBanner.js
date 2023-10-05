import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import HeroBnannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'100px',xs:'70px'},
        ml:{sm:'50px'}
        }}position="relative" p='20px'>

      <Typography color="#FF2625" fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{llg: '44px',xs:'40px'}}} mb="23px" mt="30px">
        Sweat, Smile <br/> and Achieve
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises 
      </Typography>
      <Button variant="contained" color="error" href='#exercises' sx={{backgroundColor:"#FF2625",padding:'10px'}}>Explore Exercises</Button>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1',display: { lg: 'block', xs: 'none' }, fontSize: '150px' }}>
      Exercise
      </Typography>
      <img src={HeroBnannerImage} alt="banner" className='hero-banner-img' /> 
    </Box>
  )
}

export default HeroBanner
