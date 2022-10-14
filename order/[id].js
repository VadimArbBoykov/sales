import { Box } from '@mui/material'
import { styled } from '@mui/system';
import OrderWhite from '../../components/OrderWhite';

const CenteredBox = styled(Box)({
  position: 'absolute',
  top: '30px',
  left: 0,
  right: 0,
  margin: 'auto',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  gap: 20
})

const Order = () => {
  return (
    <>
    <Box width={'100%'} height={300} bgcolor='darkness.main' position={'relative'} minWidth={450}>
        <CenteredBox maxWidth={860} minWidth={450}>
          <OrderWhite/>
        </CenteredBox>
      </Box>
    <Box width={'100%'} height={600} bgcolor='#F5F5F7' textAlign={'center'}></Box>
    </>
  )
}

export default Order
