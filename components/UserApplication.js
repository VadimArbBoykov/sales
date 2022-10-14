import React from 'react'
import { Box, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const UserApplication = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'} gap={3}>
      <Box sx={{display: {xs: 'none', lg: 'flex'}}} width={'100%'} gap={2}>
        <Box display={'flex'} flex={1} justifyContent={'space-between'} alignItems={'center'} bgcolor={'#0A0E15'} borderRadius={3} py={2} px={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography color={'#E07C80'} fontSize={'31px'} fontWeight={300}>0</Typography>
            <Typography color={'#919396'} fontSize={'14px'} fontWeight={300}>При старте</Typography>
          </Box>
          <CheckIcon sx={{color: '#E07C80'}}/>
        </Box>
        <Box display={'flex'} flex={1} justifyContent={'space-between'} alignItems={'center'} bgcolor={'#0A0E15'} borderRadius={3} py={2} px={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography color={'#CECA36'} fontSize={'31px'} fontWeight={300}>0</Typography>
            <Typography color={'#919396'} fontSize={'14px'} fontWeight={300}>От 0$</Typography>
          </Box>
          <CheckIcon sx={{color: '#CECA36'}}/>
        </Box>
        <Box display={'flex'} flex={1} justifyContent={'space-between'} alignItems={'center'} bgcolor={'#0A0E15'} borderRadius={3} py={2} px={3}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography color={'#60BD70'} fontSize={'31px'} fontWeight={300}>0</Typography>
            <Typography color={'#919396'} fontSize={'14px'} fontWeight={300}>От 0$</Typography>
          </Box>
          <CheckIcon sx={{color: '#60BD70'}}/>
        </Box>
      </Box>
      <Box sx={{display: {xs: 'none', lg: 'flex'}}} justifyContent={'space-evenly'} bgcolor={'#fff'} borderRadius={3} py={3}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography fontSize={'30px'} fontWeight={300}>0</Typography>
          <Typography color={'#a9a9a9'} fontSize={'12px'}>Обменов</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography fontSize={'30px'} fontWeight={300}>$0.00</Typography>
          <Typography color={'#a9a9a9'} fontSize={'12px'}>Сумма обменов</Typography>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} bgcolor={'#fff'} borderRadius={3} p={3} gap={3}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography component={'div'} color={'#afafaf'} fontSize={'14px'} fontWeight={400}>№</Typography>
          <Typography component={'div'} color={'#afafaf'} fontSize={'14px'} fontWeight={400}>Отдаю</Typography>
          <Typography component={'div'} color={'#afafaf'} fontSize={'14px'} fontWeight={400}>Получаю</Typography>
          <Typography component={'div'} color={'#afafaf'} fontSize={'14px'} fontWeight={400}>Дата</Typography>
          <Typography component={'div'} color={'#afafaf'} fontSize={'14px'} fontWeight={400}>Статус</Typography>
        </Box>
        <Typography alignSelf={'center'} component={'div'} mt={2} color={'#989898'}>Нет данных</Typography>
        <Typography alignSelf={'flex-start'} component={'div'} color={'#afafaf'} fontSize={'12px'} fontWeight={400}>0 всего</Typography>
      </Box>
    </Box>
  )
}

export default UserApplication