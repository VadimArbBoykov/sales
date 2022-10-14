import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase'
import { useRouter } from 'next/router'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import UserNav from '../../components/UserNav';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const CenteredBox = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '30px',
  left: 0,
  right: 0,
  margin: 'auto',
  backgroundColor: 'transparent',
  display: 'flex',
  gap: 24,
  flexDirection: 'row',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    padding: 20
  }
}))

const Settings = () => {
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter()

  if(!user) {
    router.push('/')
    return
  }
  return (
    <>
    <Box width={'100%'} height={300} bgcolor='darkness.main' position={'relative'} minWidth={450}>
        <CenteredBox maxWidth={1200} minWidth={450}>
          <UserNav page={'settings'}/>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} bgcolor={'#fff'} borderRadius={3} sx={{height: {xs: 350, lg: 'auto'}}}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <SettingsSuggestIcon sx={{fontSize: '100px', color: '#252948'}}/>
              <Typography color={'rgba(37,42,72,.71)'} fontSize={'14px'}>Настройки активируются после первого успешного обмена</Typography>
            </Box>
          </Box>
        </CenteredBox>
      </Box>
    <Box width={'100%'} height={600} bgcolor='#F5F5F7' textAlign={'center'}></Box>
    </>
  )
}

export default Settings