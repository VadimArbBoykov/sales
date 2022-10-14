import React, {useRef, useState} from 'react'
import {Box, Button, IconButton, Modal, TextField, Typography} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled'
import Rating from '@mui/material/Rating';

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

const StyledButton = styled(Box)({
  backgroundColor: '#50556D',
  borderRadius: '50px',
  '&:hover': {
    cursor: 'pointer'
  }
})

const ReviewModal = ({open, setOpen, alert,handleClick}) => {

  const ref = useRef()

  const [total, setTotal] = useState(0)
  const [speed, setSpeed] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    setOpen(false)
    handleClick()
    setTotal(0)
    setSpeed(0)
  }

  return (
    <StyledModal
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box display={'flex'} flexDirection={'column'} gap={4} bgcolor={'#fff'} width={650} minHeight={750} py={2} px={4}>
        <IconButton sx={{alignSelf: 'flex-end'}} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <Box display={'flex'} flexDirection={'column'} textAlign={'center'} alignSelf={'center'} gap={3} width={335}>
          <Typography textAlign={'center'} fontSize={'30px'} fontWeight={300}>Добавить отзыв</Typography>
          <Typography textAlign={'center'} fontSize={'14px'} color={'#4d4d4d'}>Здесь вы можете написать отзыв о сервисе</Typography>
          <form onSubmit={handleSubmit}>
            <Box display={'flex'} flexDirection={'column'} gap={4}>
              <TextField label="Имя" placeholder='Укажите Имя' variant="outlined" required/>
              <TextField label="E-mail адрес" placeholder='Укажите e-mail адрес' variant="outlined" required/>
              <TextField label="Отзыв" multiline rows={4}/>
              <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                <Box display={'flex'} flexDirection={'column'} gap={2}>
                  <Typography textAlign={'center'} fontSize={'14px'} color={'#4d4d4d'}>Общая оценка</Typography>
                  <Box display={'flex'}>  
                    <Rating
                      name="simple-controlled"
                      value={total}
                      onChange={(event, newValue) => {
                        setTotal(newValue);
                      }}
                    />
                  </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={2}>
                  <Typography textAlign={'center'} fontSize={'14px'} color={'#4d4d4d'}>Скорость обработки</Typography>
                  <Box display={'flex'}>  
                    <Rating
                      name="simple-controlled"
                      value={speed}
                      onChange={(event, newValue) => {
                        setSpeed(newValue);
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <StyledButton onClick={() => ref.current.click()}>
                <Typography color={'#fff'} sx={{opacity: 0.74}} fontWeight={300} fontSize={'14px'} py={2}>ДОБАВИТЬ</Typography>
              </StyledButton>
              <Button ref={ref} sx={{display: 'none'}} type={'submit'}></Button>
            </Box>
          </form>
        </Box>
      </Box>
    </StyledModal>
  )
}

export default ReviewModal