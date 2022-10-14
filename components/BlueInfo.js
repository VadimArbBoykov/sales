import React from 'react'
import { Box, Typography } from '@mui/material'

const BlueInfo = () => {
  return (
    <Box width={'100%'}>
      <Box py={10} minWidth={450} display={'flex'} textAlign={'center'} flexWrap={'wrap'} alignItems={'center'} width={'100%'} bgcolor={'#0275EB'}>
          <Box display={'flex'} flexDirection={'column'} sx={{width: {xs: '48%', sm: '25%'}}}>
            <Typography fontSize={'35px'} color={'#fff'} fontWeight={400}>7 882</Typography>
            <Typography fontSize={'14px'} color={'#fff'} sx={{opacity: 0.7}}>Отзывов на BestChange</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} sx={{width: {xs: '48%', sm: '25%'}}}>
            <Typography fontSize={'35px'} color={'#fff'} fontWeight={400}>224.30</Typography>
            <Typography fontSize={'14px'} color={'#fff'} sx={{opacity: 0.7}}>Perfect Money Trust Score</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} sx={{width: {xs: '48%', sm: '25%'}}}>
            <Typography fontSize={'35px'} color={'#fff'} fontWeight={400}>171</Typography>
            <Typography fontSize={'14px'} color={'#fff'} sx={{opacity: 0.7}}>Advanced Cash Trust Score</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} sx={{width: {xs: '48%', sm: '25%'}}}>
            <Typography fontSize={'35px'} color={'#fff'} fontWeight={400}>$2 млн</Typography>
            <Typography fontSize={'14px'} color={'#fff'} sx={{opacity: 0.7}}>Резервы</Typography>
          </Box>
      </Box>
    </Box>
  )
}

export default BlueInfo
