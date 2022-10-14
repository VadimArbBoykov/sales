import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'
import { styled } from '@mui/system';
import UserNav from '../../components/UserNav';
import UserApplication from '../../components/UserApplication';

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

const Application = () => {
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
          <UserNav page={'application'}/>
          <UserApplication/>
        </CenteredBox>
      </Box>
    <Box width={'100%'} height={600} bgcolor='#F5F5F7' textAlign={'center'}></Box>
    </>
  )
}

export default Application
