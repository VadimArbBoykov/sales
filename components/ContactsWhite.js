import { Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BestChange from '../assets/bestchange.png'
import Image from 'next/image'

const StyledContacts = styled(Box)(({theme}) => ({
  color: 'black',
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: 20,
  borderRadius: 10,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}))

const ContactsWhite = () => {
  return (
    <StyledContacts py={6} px={6}>
      <Box flex={1} display={'flex'} flexDirection={'column'} gap={4}>
        <Typography fontSize={'30px'} fontWeight={300} color={'#2d2d2d'}>Контакты</Typography>
        <Box p={3} display={'flex'} flexDirection={'column'} bgcolor={'#F7F8F9'} gap={4}>
          <Typography fontSize={'20px'} fontWeight={700} color={'#303a43'}>Техническая поддержка</Typography>
          <Box display={'flex'} gap={2}>
            <EmailOutlinedIcon/>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography fontSize={'14px'} color={'#787878'}>Email (сотрудничество и пожелания, просматриваем раз в сутки)</Typography>
              <Typography color={'#337AB7'} sx={{textDecoration: 'underline'}}>support@btcsale.biz</Typography>
            </Box>
          </Box>
          <Box display={'flex'} gap={2}>
            <AccessTimeOutlinedIcon/>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography fontSize={'14px'} color={'#787878'}>График работы</Typography>
              <Typography fontSize={'16px'} fontWeight={500} color={'#000'}>07:00 - 03:00 GMT +3</Typography>
            </Box>
          </Box>
          <Box display={'flex'} gap={2}>
            <SupportAgentOutlinedIcon/>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography fontSize={'14px'} color={'#787878'}>Контакты</Typography>
              <Typography fontSize={'16px'} fontWeight={500} color={'#000'}>Для оперативного решения вопросов используйте онлайн-чат!</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box flex={2} display={'flex'} flexDirection={'column'} gap={4}>
        <Typography fontSize={'30px'} fontWeight={300} color={'#2d2d2d'}>Мониторинги</Typography>
        <Box display={'flex'} flexDirection={'column'} py={3} px={4} bgcolor={'#F7F8F9'} gap={4}>
          <Box display={'flex'} justifyContent={'space-between'} mt={3}>
            <Image src={BestChange} alt='BestChange'/>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={40} height={40} bgcolor={'#0275EB'} borderRadius={'50%'}>
              <KeyboardArrowRightIcon 
                onClick={() => window.open('https://www.bestchange.ru/btcsale-exchanger.html', '_blank')}
                color='white' 
                sx={{'&:hover': {cursor: 'pointer'}}}
              />
            </Box>
          </Box>
          <Box display={'flex'} flexWrap={'wrap'} gap={2} mt={2}> 
            <Box
              onClick={() => window.open('https://exchangesumo.com/exchanger/946/BTCSale/', '_blank')} 
              display={'flex'} 
              justifyContent={'space-between'} 
              p={2} 
              bgcolor={'#ECEEF2'} 
              borderRadius={2} 
              sx={{
                width: {xs: '100%', sm: '100%', md: '48%'},
                transition: '0.25s',
                '&:hover': {
                  cursor: 'pointer', 
                  bgcolor: '#0275EB', 
                  '& .boxText' : {
                    color: '#fff'
                  },
                  '& .boxArrow' : {
                    color: '#fff'
                  }
                }
              }}> 
                <Typography className='boxText'>ExchangeSumo</Typography>
                <KeyboardArrowRightIcon className='boxArrow'/>
            </Box>
            <Box 
              onClick={() => window.open('https://kurs.expert/ru/obmennik/btcsale-biz/feedbacks.html', '_blank')} 
              display={'flex'} 
              justifyContent={'space-between'} 
              p={2}
              bgcolor={'#ECEEF2'} 
              borderRadius={2} 
              sx={{
                width: {xs: '100%', sm: '100%', md: '48%'},
                transition: '0.25s',
                '&:hover': {
                  cursor: 'pointer', 
                  bgcolor: '#0275EB', 
                  '& .boxText' : {
                    color: '#fff'
                  },
                  '& .boxArrow' : {
                    color: '#fff'
                  }
                }
              }}>
              <Typography className='boxText'>КурсЕксперт</Typography>
              <KeyboardArrowRightIcon className='boxArrow'/>
            </Box>
            <Box 
              onClick={() => window.open('https://bitcoinmarket.global/exchanger.php?id=424', '_blank')} 
              display={'flex'} 
              justifyContent={'space-between'} 
              p={2}
              bgcolor={'#ECEEF2'} 
              borderRadius={2} 
              sx={{
                width: {xs: '100%', sm: '100%', md: '48%'},
                transition: '0.25s',
                '&:hover': {
                  cursor: 'pointer', 
                  bgcolor: '#0275EB', 
                  '& .boxText' : {
                    color: '#fff'
                  },
                  '& .boxArrow' : {
                    color: '#fff'
                  }
                }
              }}>
              <Typography className='boxText'>BitcoinMarket</Typography>
              <KeyboardArrowRightIcon className='boxArrow'/>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledContacts>
  )
}

export default ContactsWhite