import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';

const StyledReview = styled(Box)(({theme}) => ({
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 4,
  display: 'flex',
  gap: 10,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}))

const Review = ({name, text, minus = 0}) => {

  let date = new Date()
  const previous = new Date(date.getTime())
  previous.setDate(date.getDate() - minus)

  let day = previous.getDate()
  let month = previous.toLocaleString('ru', {month: 'short'})
  let year = previous.getFullYear()

  return (
    <StyledReview>
      <Box display={'flex'} flexDirection={'column'} gap={3} flex={3} p={3} sx={{borderRight: {xs: 'none', sm: '1px solid #E9E9E9'}, borderBottom: {xs: '1px solid #E9E9E9', sm: 'none'}}}> 
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
          <Typography fontSize={'16px'} fontWeight={500}>{name}</Typography>
          <Typography fontSize={'12px'} color={'#b6b6b6'}>{day} {month} {year}</Typography>
        </Box>
        <Box>
          <Typography fontSize={'14px'}>{text}</Typography>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={3} flex={1} px={2} py={2}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography fontSize={'12px'} fontWeight={500}>Общая оценка</Typography>
          <Box display={'flex'}>
            <StarIcon color='gold' fontSize='19px'/>
            <StarIcon color='gold' fontSize='19px'/>
            <StarIcon color='gold' fontSize='19px'/>
            <StarIcon color='gold' fontSize='19px'/>
            <StarIcon color='gold' fontSize='19px'/>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography fontSize={'12px'} fontWeight={500}>Скорость обработки</Typography>
          <Box display={'flex'}>
            <StarIcon color='gold' fontSize='19px'/>
            <StarIcon color='gold' fontSize='19px'/>
            <StarIcon color='gold' fontSize='19px'/>
            <StarIcon color='gold' fontSize='19px'/>
            <StarIcon color='gold' fontSize='19px'/>
          </Box>
        </Box>
      </Box>
    </StyledReview>
  )
}

export default Review