import { Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import LockIcon from '@mui/icons-material/Lock';
import {useRouter} from 'next/router'

const StyledContacts = styled(Box)(({theme}) => ({
  color: 'black',
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  borderRadius: 10,
  flexDirection: 'row',
  gap: 20,
  // [theme.breakpoints.down('md')]: {
  //   flexDirection: 'column',
  // }
}))

const NotFoundWhite = () => {
  const router = useRouter()
  return (
    <StyledContacts py={6} sx={{paddingX: {xs: 5, sm: 5, md: 25}}}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={4}>
        <LockIcon sx={{fontSize: '60px', color: '#8E909F'}}/>
        <Typography fontSize={'36px'} fontWeight={300}>Внимание! Страница не найдена!</Typography>
        <Typography fontSize={'15px'} color={'#717171'}>Возможно эта страница удалена или вы ошиблись с набором адреса страницы. Перейдите на главную страницу и воспользуйтесь навигационным меню.</Typography>
        <Button onClick={() => router.push('/')} sx={{width: 180}}><Typography color={'#1A237E'} fontSize={'14px'} textTransform={'none'}>Перейти на главную</Typography></Button>
      </Box>
    </StyledContacts>
  )
}

export default NotFoundWhite