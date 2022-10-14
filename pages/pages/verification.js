import { Box } from '@mui/material'
import { styled } from '@mui/system';
import VerificationWhite from '../../components/VerificationWhite';

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

const Verification = () => {
  return (
    <>
    <Box width={'100%'} height={300} bgcolor='darkness.main' position={'relative'} minWidth={450}>
      <CenteredBox maxWidth={1200} minWidth={450}>
        <VerificationWhite/>
      </CenteredBox>
    </Box>
    <Box width={'100%'} height={600} bgcolor='#F5F5F7' textAlign={'center'}></Box>
    </>
  )
}

export default Verification
