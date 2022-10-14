import React, { useEffect, useState } from 'react';
import { Typography, Box, Avatar, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/system';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRouter } from 'next/router';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import getTime from '../utils/getTime';
import { useTimer } from '../hooks/useTimer';

const StyledOrder = styled(Box)({
  color: 'black',
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10
})

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const OrderWhite = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false)

  const [paymentInfo, setPaymentInfo] = useState(JSON.parse(sessionStorage.getItem("Payment")))

  console.log(paymentInfo);

  const [remaining, end] = useTimer(paymentInfo?.deadline, Date.parse(new Date()))
  
  const M = remaining.minutes < 10 ? `0${remaining.minutes}` : remaining.minutes
  const S = remaining.seconds < 10 ? `0${remaining.seconds}` : remaining.seconds

  useEffect(() => {
    const checkPayment = () => {
      if(paymentInfo === null) {
        router.push('/404')
      }
    }
    checkPayment()
  }, [])

  useEffect(() => {
    const setTheTimeout = () => {
      sessionStorage.setItem('Payment', JSON.stringify({...paymentInfo, timeout: true}))
      setPaymentInfo(JSON.parse(sessionStorage.getItem("Payment")))
    }
    if(end) {
      setTheTimeout()
    }
  }, [end])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const copyText = (val) => {
    navigator.clipboard.writeText(val)
    handleClick()
  }

  const doThePayment = () => {
    sessionStorage.setItem('Payment', JSON.stringify({...paymentInfo, isPaid: true}))
    setPaymentInfo(JSON.parse(sessionStorage.getItem("Payment")))
  }

  const cancelThePayment = () => {
    router.push('/')
    sessionStorage.setItem('Payment', JSON.stringify({...paymentInfo, timeout: true}))
  }
  return (
    <StyledOrder py={6} px={6}>

      {/* IF PAYMENT IS PAID */}
      <Box display={paymentInfo?.isPaid ? 'flex' : 'none'} flexDirection={'column'} alignItems={'center'} gap={5}>
        <Typography fontSize={'25px'} color={'#2d2d2d'} fontWeight={300}>Заявка №{paymentInfo?.paymentNumber} принята в обработку.</Typography>
        <ThumbUpIcon sx={{fontSize: '80px', color: '#00CC86'}}/>
        <Typography fontSize={'18px'} color={'#878792'} fontWeight={300}>Отслеживать её статус Вы можете в своём личном кабинете. Пожалуйста убедитесь, что вы не только нажали на кнопку &quot;Я оплатил&quot;, но и действительно перевели к нам средства.</Typography>
        <Typography fontSize={'18px'} color={'#878792'} fontWeight={300}>По всем вопросам или в случае задержки обмена, обращайтесь в техническую поддержку.</Typography>
      </Box>

      {/* IF PAYMENT IS NOT PAID */}
      <Box display={paymentInfo?.isPaid ? 'none' : 'flex'} flexDirection={'column'} gap={5}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography fontSize={'25px'} fontWeight={300} color={'#2d2d2d'}>Ожидается оплата</Typography>
          <Typography fontSize={'22px'} fontWeight={300} color={'#878792'}>№{paymentInfo?.paymentNumber}</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography display={paymentInfo?.timeout ? 'none' : 'flex'} fontSize={'17px'} component={'p'}>
            <Typography component={'span'} color={'#878792'}>Оплатите заявку в течении&nbsp;</Typography>
            <Typography component={'span'} color={'#222332'} fontWeight={600}>00:{M}:{S}</Typography> 
          </Typography>
          <Typography display={paymentInfo?.timeout ? 'flex' : 'none'} fontSize={'17px'} component={'p'}>
            <Typography component={'span'} color={'#878792'}>Оплатите заявку в течении&nbsp;</Typography>
            <Typography component={'span'} color={'error'} fontWeight={600}>00:00:00</Typography> 
          </Typography>
          <Box p={2} display={'flex'} gap={3} justifyContent={'center'} alignItems={'center'} bgcolor={'#F4F5F7'} width={'100%'} borderRadius={3} py={2}>
            <Box display={'flex'} alignItems={'center'} gap={2}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                <Typography fontSize={'10px'} color={'#807f7f'}>ВЫ ОТПРАВЛЯЕТЕ</Typography>
                <Typography textTransform={'uppercase'}>{paymentInfo?.giveAmount} {paymentInfo?.giveCoin.symbol}</Typography>
                <Typography fontSize={'13px'} color={'#b5b0b0'}>{paymentInfo?.giveCoin.name}</Typography>
              </Box>
              <Avatar src={paymentInfo?.giveCoin.image} sx={{display: {xs: 'none', sm: 'flex'}}}/>
            </Box>
            <KeyboardArrowRightIcon fontSize='large' sx={{color: '#D7D7D7', display: {xs: 'none', sm: 'block'}}}/>
            <Box display={'flex'} alignItems={'center'} gap={2}>
              <Avatar src={paymentInfo?.takeCoin.image} sx={{display: {xs: 'none', sm: 'flex'}}}/>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography fontSize={'10px'} color={'#807f7f'}>ВЫ ПОЛУЧАЕТЕ</Typography>
                <Typography textTransform={'uppercase'}>{paymentInfo?.takeAmount} {paymentInfo?.takeCoin.symbol}</Typography>
                <Typography fontSize={'13px'} color={'#b5b0b0'}>{paymentInfo?.takeCoin.name}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={paymentInfo?.timeout ? 'none' : 'flex'} flexDirection={'column'} gap={1}>
          <Typography fontSize={'18px'} fontWeight={500} color={'#2b2b2e'}>Для оплаты заявки переведите <Typography fontSize={'18px'} fontWeight={500} color={'#2b2b2e'} textTransform={'uppercase'} component={'span'}>{paymentInfo?.giveCoin.symbol}:</Typography></Typography>
          <Box py={2} px={3} display={'flex'} justifyContent={'space-between'} bgcolor={'#222332'} borderRadius={3}>
            <Typography fontSize={'19px'} fontWeight={600} color={'#fff'}>{paymentInfo?.giveAmount}</Typography>
            <ContentCopyIcon sx={{color: '#fff', '&:hover': {cursor: 'pointer'}}} onClick={() => copyText(paymentInfo?.giveAmount)}/>
          </Box>
        </Box>
        <Box display={paymentInfo?.timeout ? 'none' : 'flex'} flexDirection={'column'}>
          <Typography fontSize={'18px'} fontWeight={500} color={'#2b2b2e'}>Адрес <Typography fontSize={'18px'} fontWeight={500} color={'#2b2b2e'} textTransform={'uppercase'} component={'span'}>{paymentInfo?.giveCoin.symbol}:</Typography></Typography>
          <Box py={2} px={3} display={'flex'} justifyContent={'space-between'} bgcolor={'#222332'} borderRadius={3} width={'100%'} >
            <Box width={'90%'} position={'relative'}>
              <Typography fontSize={'15px'} fontWeight={600} color={'#fff'} sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'block', position: 'absolute', top: 0, left: 0, right: 0, marginX: 'auto'}}>{paymentInfo?.walletAddress}</Typography>
            </Box>
            <ContentCopyIcon sx={{color: '#fff', '&:hover': {cursor: 'pointer'}}} onClick={() => copyText(paymentInfo?.walletAddress)}/>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Скопировано в буфер обмена!
          </Alert>
        </Snackbar>
        {paymentInfo?.timeout ? (
          <Box p={2} bgcolor={'#F4F5F7'} borderRadius={3}>
            <Typography fontSize={'16px'} color={'#878792;'}>К сожалению время на оплату заявки истекло. Если вы ее оплатили — обратитесь, пожалуйста, в нашу поддержку и мы поможем решить проблему.</Typography>
          </Box>
        ) : (
          <Box p={2} bgcolor={'#F4F5F7'} borderRadius={3}>
            <Typography fontSize={'16px'} color={'#878792;'}>После оплаты обязательно нажмите кнопку &quot;Я оплатил&quot;, чтобы заявка создалась:</Typography>
          </Box>
        )}  

        {paymentInfo?.timeout ? (
          <Button sx={{
            display: 'flex', 
            flex: 1, 
            bgcolor: '#F3F4F5', 
            transition: '0.2s' ,
            '&:hover': {
              bgcolor: '#0670E6', 
              '& .btnText': {
                color: '#fff'
              }
            }          
          }} variant={'contained'} onClick={() => router.push('/')}>
            <Typography className='btnText' textTransform={'none'} fontSize={'20px'} fontWeight={400} color={'#878792'}>
              На главную
            </Typography>
          </Button>
        ) : (
          <Box display={'flex'} gap={4}>
            <Button onClick={doThePayment} sx={{
              display: 'flex', 
              flex: 1, 
              bgcolor: '#000', 
              transition: '0.2s' ,
              '&:hover': {
                bgcolor: '#0670E6', 
                color: '#fff'
              }}} variant={'contained'}>
                <Typography textTransform={'none'} fontSize={'20px'} fontWeight={400} color={'#fff'}>
                  Я оплатил
                </Typography>
              </Button>
            <Button onClick={cancelThePayment} sx={{
              display: 'flex', 
              flex: 1, 
              bgcolor: '#fff', 
              transition: '0.2s' ,
              '&:hover': {
                bgcolor: '#0670E6', 
                '& .btnText': {
                  color: '#fff'
                }
              }          
            }} variant={'contained'}>
              <Typography className='btnText' textTransform={'none'} fontSize={'20px'} fontWeight={400} color={'#000'}>
                Отменить
              </Typography>
            </Button>
          </Box>
        )}
        
      </Box>
    </StyledOrder>
  )
}

export default OrderWhite