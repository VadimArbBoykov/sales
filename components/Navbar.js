import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'
import WarningIcon from '@mui/icons-material/Warning';
import CheckIcon from '@mui/icons-material/Check';
import ru from '../assets/ru.png'
import { styled } from '@mui/system';
import Signin from './Signin';
import { useState } from 'react';
import Signup from './Signup';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from '../firebase'
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';

const StyledButton = styled(Button)(({theme}) => ({
  display: 'none',
  backgroundColor: 'white',
  color: 'black',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'lightgray'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const Navbar = ({handleOpen}) => {

  const router = useRouter()

  const [signUpOpen, setSignUpOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)

  const [user] = useAuthState(auth);

  const [values, snapshot] = useCollection(collection(db,'users'));

  const users = values?.docs.map(doc => ({id: doc.id, ...doc.data()}));

  const currentUser = users?.find(item => item.id === user?.email)

  const logOut = async () => {
    await signOut(auth)
    window.location.reload()
  }

  return (
    <>
    <Box>
      
      <Box display={'flex'} flexDirection={'column'} sx={{bgcolor: '#BF9F01', color: '#fff'}} minWidth={450}>
        <Box display={'flex'} mx={2} my={1.3}>
          <WarningIcon/>
          <Typography fontSize={'0.9rem'} ml={3}>Выплаты на украинские и молдавские кошельки QIWI не производятся!!! Мы не выплачиваем на карты банков Республики Беларусь и Казахстана!!!</Typography>
        </Box>
        <Box display={'flex'} mx={2} my={1.3}>
          <WarningIcon/>
          <Typography fontSize={'0.9rem'} ml={3}>Мы не поддерживаем сети Polygon, BSC, AVAX, ARBITRUM, OPTIMISM! </Typography>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} sx={{bgcolor: '#016000', color: '#fff'}} minWidth={450}>
        <Box display={'flex'} mx={2} my={1.3}>
          <CheckIcon/>
          <Typography fontSize={'0.9rem'} ml={3}>Если у Вас нет кнопки онлайн-чата в правом нижнем углу, то смените браузер или включите VPN, или отключите блокировщик рекламы.</Typography>
        </Box>
      </Box>
      <AppBar position={'relative'} sx={{px: 4, bgcolor: 'darkness.main', paddingTop: '25px', boxShadow: 'none', width: '100%', minWidth: 450}}>
        <Toolbar sx={{gap: 2}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{'&:hover': {cursor: 'pointer'}}} onClick={() => router.push('/')} variant="h5" fontWeight={300} fontSize={28} ml={-4}>
            BTCSale
          </Typography>
          <StyledButton variant='contained' onClick={() => window.open('https://t.me/btcsale_news', '_blank')}>
            Telegram channel
          </StyledButton>
          <Box textAlign={'center'} sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
            <Typography fontSize={10} variant='p' component='div' sx={{opacity: 0.6}}>График работы</Typography>
            <Typography fontSize={14} fontWeight={300} variant='p' component='div'>07:00 - 03:00 GMT +3</Typography>
          </Box>
          <Box textAlign={'center'} sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
            <Typography fontSize={10} variant='p' component='div' sx={{opacity: 0.6}}>Контакты</Typography>
            <Typography fontSize={14} fontWeight={300} variant='p' component='div'>Для оперативного решения вопросов используйте онлайн-чат!</Typography>
          </Box>
          <Box display={'flex'} gap={1} alignItems={'center'} marginLeft={'auto'}>
            {user ? (
              <>
                <Button onClick={() => router.push('/personal')} color="inherit"><Typography sx={{opacity: 0.6}}>{user.displayName || currentUser?.name || 'Пользователь 3814'}</Typography></Button>
                <Button onClick={logOut} color="inherit"><Typography sx={{opacity: 0.6}}>Выйти</Typography></Button>
              </>
            ) : (
              <>
                <Button onClick={() => setSignInOpen(true)} color="inherit"><Typography sx={{opacity: 0.6}}>Войти</Typography></Button>
                <Button onClick={() => setSignUpOpen(true)} color="inherit"><Typography sx={{opacity: 0.6}}>Регистрация</Typography></Button>
              </>
            )}
            <Box sx={{display: {xs: 'none', sm: 'none', md: 'flex'}}} gap={1}>
              <Box width={24} height={16}>
                <Image
                  src={ru}
                  alt='RU'
                />
              </Box>
              <Typography>RU</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Signin open={signInOpen} setOpen={setSignInOpen}/>
      <Signup open={signUpOpen} setOpen={setSignUpOpen}/>
    </Box>
    </>
  )
}

export default Navbar