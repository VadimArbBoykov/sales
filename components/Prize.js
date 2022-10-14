import { Typography, Box, Button } from '@mui/material'
import { styled } from '@mui/system';

const StyledPrize = styled(Box)({
  color: 'white',
  backgroundColor: '#1A202F',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10
})

const StyledButton = styled(Button)({
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: 'lightgray'
  },
})

const Prize = () => {
  return (
    <StyledPrize px={3} py={2}>
      <Typography fontSize={'14px'}>Хочешь выиграть <Typography variant='span' color='#3dd94b'>5 000.00</Typography> руб?</Typography>
      <StyledButton variant='contained' sx={{marginLeft: 'auto'}}>
        <Typography fontSize={'14px'} textTransform='none'>Участвовать!</Typography>
      </StyledButton>
    </StyledPrize>
  )
}

export default Prize