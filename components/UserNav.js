import React from 'react'
import { Box, Typography } from '@mui/material'
import BallotIcon from '@mui/icons-material/Ballot';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useRouter } from 'next/router';

const UserNav = ({page}) => {

  const router = useRouter()
  return (
    <Box display={'flex'} flexDirection={'column'} sx={{width: {xs: '100%', lg: 288}}} gap={4}>
      <Box sx={{display: {xs: 'none', lg: 'flex'}}} flexDirection={'column'} alignItems={'center'} gap={2}>
        <Typography color={'#fff'} sx={{opacity: 0.5}} fontWeight={300} fontSize={'13px'}>Всего Бонусов</Typography>
        <Typography component={'p'} color={'#fff'}>
          <Typography component={'span'} fontSize={'25px'} mr={'10px'}>$</Typography>
          <Typography component={'span'} fontSize={'40px'} fontWeight={500}>0.00</Typography>
        </Typography>
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Box width={'10px'} height={'10px'} bgcolor={'#FF6336'} borderRadius={50}></Box>
            <Typography color={'#fff'} sx={{opacity: 0.4}} fontWeight={300} fontSize={'12px'}>$0.00 Кэшбэк</Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Box width={'10px'} height={'10px'} bgcolor={'#FFC81B'} borderRadius={50}></Box>
            <Typography color={'#fff'} sx={{opacity: 0.4}} fontWeight={300} fontSize={'12px'}>$0.00 Кэшбэк</Typography>
          </Box>
        </Box>  
      </Box>
      <Box width={'100%'} p={1} gap={1} display={'flex'} flexWrap={'wrap'} bgcolor={'#1B1C28'} borderRadius={3}>
        <Box onClick={() => router.push('/personal/application')} bgcolor={page === 'application' ? '#0275EB' : 'transparent'} sx={{opacity: page === 'application' ? 1 : 0.53, '&:hover': {cursor: 'pointer'}}} borderRadius={3} width={'48%'} height={100} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} color={'#fff'}>
          <BallotIcon sx={{fontSize: '40px'}}/>
          <Typography fontWeight={300} fontSize={'13px'}>Транзакции</Typography>
        </Box>
        <Box onClick={() => router.push('/personal/statistics')} bgcolor={page === 'statistics' ? '#0275EB' : 'transparent'} sx={{opacity: page === 'statistics' ? 1 : 0.53, '&:hover': {cursor: 'pointer'}}} borderRadius={3} width={'48%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} color={'#fff'}>
          <QueryStatsIcon sx={{fontSize: '40px'}}/>
          <Typography fontWeight={300} fontSize={'13px'}>Статистика</Typography>
        </Box>
        <Box onClick={() => router.push('/personal/settings')} bgcolor={page === 'settings' ? '#0275EB' : 'transparent'} sx={{opacity: page === 'settings' ? 1 : 0.53, '&:hover': {cursor: 'pointer'}}} borderRadius={3} width={'48%'} height={100} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} color={'#fff'}>
          <SettingsIcon sx={{fontSize: '40px'}}/>
          <Typography fontWeight={300} fontSize={'13px'}>Настройки</Typography>
        </Box>
        <Box onClick={() => router.push('/personal/referral')} bgcolor={page === 'referral' ? '#0275EB' : 'transparent'} sx={{opacity: page === 'referral' ? 1 : 0.53}} width={'48%'} display={'flex'} borderRadius={3} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} color={'#fff'}>
          <HandshakeIcon sx={{fontSize: '40px'}}/>
          <Typography fontWeight={300} fontSize={'13px'}>Рефералы</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default UserNav