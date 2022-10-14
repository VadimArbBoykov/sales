import {Box, Avatar, Typography} from '@mui/material'
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';


const Currency = ({src, name, selected, receive, reserves}) => {

  const StyledCurrency = styled(Box)({
    display: 'flex',
    textAlign: 'center',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: selected ? '#EEEFF7' : '#F5F5F5', 
      cursor: 'pointer'
    },
    backgroundColor: selected ? '#EEEFF7' : 'none'
  })

  return (
    <StyledCurrency py={1.5} px={2}>
      <Avatar src={src} sx={{width: '25px', height: '25px', marginRight: 2}}/>
      <Typography fontSize={'15px'}>{name}</Typography>
      {receive &&
        <Typography sx={{marginLeft: 'auto'}} color={'#b6b6b6'} fontSize={'13px'}>{reserves}</Typography>
      }
      {selected && !receive && 
        <CheckIcon sx={{marginLeft: 'auto'}}/>
      }
    </StyledCurrency>
  )
}

export default Currency