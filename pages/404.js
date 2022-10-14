import { Box } from '@mui/material'
import { styled } from '@mui/system';
import NotFoundWhite from '../components/NotFoundWhite';

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

const PageNotFound = () => {
  return (
    <>
    <Box width={'100%'} height={300} bgcolor='darkness.main' textAlign={'center'} position={'relative'} minWidth={400}>
        <CenteredBox maxWidth={1200} minWidth={400}>
          <NotFoundWhite/>
        </CenteredBox>
      </Box>
    <Box width={'100%'} height={600} bgcolor='#F5F5F7' textAlign={'center'}></Box>
    </>
  )
}

export default PageNotFound