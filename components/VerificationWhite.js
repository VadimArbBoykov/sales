import { Typography, Box, IconButton, Collapse } from '@mui/material';
import { styled } from '@mui/system';

const StyledVerification = styled(Box)(({theme}) => ({
  color: 'black',
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  borderRadius: 10,
  // [theme.breakpoints.down('md')]: {
  //   flexDirection: 'column',
  // }
}))

const VerificationWhite = () => {
  return (
    <StyledVerification py={8} px={6}>
      <Typography component={'span'} color={'#1c1c1c'}>
        <Typography component={'p'} fontSize={'15px'} mb={'24px'}>1. Вам необходимо авторизоваться на нашем сайте.</Typography>
        <Typography component={'p'} fontSize={'15px'} mb={'24px'}>2. На заднем фоне (за картой) должен быть виден монитор с открытой вкладкой сайта. Так же допускаются фотки где наш сайт открыт на телефоне.</Typography>
        <Typography component={'p'} fontSize={'15px'} mb={'24px'}>3. На фотографии должен читаться номер карты (если он есть), С КОТОРОЙ БУДЕТ ОПЛАТА.</Typography>
        <Typography component={'p'} fontSize={'15px'} mb={'24px'}>4. Если у Вас интернет-карта, то необходимо сделать фото интернет-банкинга с номером карты на фоне экрана с открытым нашим сайтом!</Typography>
        <Typography component={'p'} fontSize={'15px'} mb={'24px'}>5. Ваши загруженные фотографии обрабатываются в порядке очереди, примерные сроки от 5 минут до часа, но обычно это происходит быстро.</Typography>
        <Typography component={'p'} fontSize={'15px'} mb={'24px'}>6. Если деньги не списываются, то это ошибка не на нашей стороне.</Typography>
        <Typography component={'p'} fontSize={'15px'} mb={'24px'}>7. Курс будет пересчитан на актуальный, если верификация продлится дольше 15 минут.</Typography>
        <Typography component={'p'} fontSize={'15px'} mb={'24px'}>8. ПОСЛЕ ПРОХОЖДЕНИЯ ВЕРИФИКАЦИИ ВАС ПЕРЕАДРЕСУЕТ НА ОПЛАТУ ЛИБО НЕОБХОДИМО БУДЕТ СОЗДАТЬ НОВУЮ ЗАЯВКУ.</Typography>
      </Typography>
    </StyledVerification>
  )
}

export default VerificationWhite