import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';
import {useRouter} from 'next/router'

const StyledSidebar = styled(Box)({
  backgroundColor: '#202233',
  width: '260px',
  height: '100%',
  position: 'fixed',
  zIndex: 9999,
  color: 'white'
})

const Sidebar = ({open, handleOpen}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const isCurrentRoute = (path) => {
    if (currentRoute === path) return {bgcolor: '#1A77F2', opacity: 1}
    return {bgcolor: 'none', opacity: 0.6}
  }

  const navigateTo = (path) => {
    router.push(path)
    handleOpen(false)
  }
  
  return (
    <Slide 
      in={!!open}
      direction='right'
    >
      <StyledSidebar overflow='scroll' sx={{'&::-webkit-scrollbar': {width: '0px'}}}>
        <Box display={'flex'} m={3} alignItems={'center'}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handleOpen(false)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" fontWeight={300} fontSize={28}>
            BTCSale
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} flex={1}>
          <Box onClick={() => navigateTo('/')} display={'flex'} p={3} gap={2} textAlign={'center'} sx={{opacity: isCurrentRoute('/').opacity, '&:hover': {opacity: 1, cursor: 'pointer'}, bgcolor: isCurrentRoute('/').bgcolor}}>
            <ArrowForwardIosIcon fontSize='small'/>
            <Typography fontSize={'16px'} fontWeight={300}>Главная</Typography>
          </Box>
          <Box onClick={() => navigateTo('/partners')} display={'flex'} p={3} gap={2} textAlign={'center'} sx={{opacity: isCurrentRoute('/partners').opacity, '&:hover': {opacity: 1, cursor: 'pointer'}, bgcolor: isCurrentRoute('/partners').bgcolor}}>
            <ArrowForwardIosIcon fontSize='small'/>
            <Typography fontSize={'16px'} fontWeight={300}>Партнёрам</Typography>
          </Box>
          <Box onClick={() => navigateTo('/contacts')} display={'flex'} p={3} gap={2} textAlign={'center'} sx={{opacity: isCurrentRoute('/contacts').opacity, '&:hover': {opacity: 1, cursor: 'pointer'}, bgcolor: isCurrentRoute('/contacts').bgcolor}}>
            <ArrowForwardIosIcon fontSize='small'/>
            <Typography fontSize={'16px'} fontWeight={300}>Контакты</Typography>
          </Box>
          <Box onClick={() => navigateTo('/faq')} display={'flex'} p={3} gap={2} textAlign={'center'} sx={{opacity: isCurrentRoute('/faq').opacity, '&:hover': {opacity: 1, cursor: 'pointer'}, bgcolor: isCurrentRoute('/faq').bgcolor}}>
            <ArrowForwardIosIcon fontSize='small'/>
            <Typography fontSize={'16px'} fontWeight={300}>Вопросы и ответы</Typography>
          </Box>
          <Box onClick={() => navigateTo('/pages/verification')} display={'flex'} p={3} gap={2} textAlign={'center'} sx={{opacity: isCurrentRoute('/pages/verification').opacity, '&:hover': {opacity: 1, cursor: 'pointer'}, bgcolor: isCurrentRoute('/pages/verification').bgcolor}}>
            <ArrowForwardIosIcon fontSize='small'/>
            <Typography fontSize={'16px'} fontWeight={300}>Верификация карт</Typography>
          </Box>
          <Box onClick={() => navigateTo('/reviews')} display={'flex'} p={3} gap={2} textAlign={'center'} sx={{opacity: isCurrentRoute('/reviews').opacity, '&:hover': {opacity: 1, cursor: 'pointer'}, bgcolor: isCurrentRoute('/reviews').bgcolor}}>
            <ArrowForwardIosIcon fontSize='small'/>
            <Typography fontSize={'16px'} fontWeight={300}>Отзывы</Typography>
          </Box>
        </Box>
      </StyledSidebar>
    </Slide>
  )
}

export default Sidebar