import {Box, Button, IconButton, Modal, Snackbar, TextField, Typography} from '@mui/material'
import styled from '@emotion/styled'
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

const StyledSignUpButton = styled(Button)({
  background: '#777B8E',
  color: '#DFDFE3',
  width: 200,
  textTransform: 'none',
  '&:hover': {
    cursor: 'pointer',
    background: '#565866',
  }
})

const GoogleButton = styled(Button)({
  color: '#fff',
  background: '#DB4537',
  width: 180,
  textTransform: 'none',
  '&:hover': {
    cursor: 'pointer',
    background: '#DB2515',
  }
})

const StyledLineEffect = styled(Box)({
  position: 'relative',
  '&::before': {
    content: `""`,
    display: 'block',
    width: '100%',
    height: '9px',
    borderBottom: '1px solid #dee2e7',
    position: 'absolute',
    top: 0,
    left: 0
  },
  '&::after': {
    content: `""`,
    display: 'table',
    clear: 'both'
  }
})

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Signin = ({open, setOpen}) => {
  const [inp, setInp] = useState('')
  const [pass, setPass] = useState('')

  const [alert, setAlert] = useState(false)

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleClick = () => {
    setAlert(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const signInUser = async () => {
    await signInWithEmailAndPassword(inp, pass)
    if(error) {
      handleClick()
    }
  }

  const signInGoogle = () => {
    signInWithGoogle()
    setOpen(false)
  }

  return (
    <StyledModal
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box display={'flex'} flexDirection={'column'} gap={4} bgcolor={'#fff'} width={400} height={570} py={2} px={4}>
        <IconButton sx={{alignSelf: 'flex-end'}} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <Typography textAlign={'center'} fontSize={'23px'} fontWeight={300}>Войти в Личный кабинет</Typography>
        <TextField value={inp} onChange={e => setInp(e.target.value)} id="outlined-basic" label="Введите e-mail адрес" variant="outlined" required/>
        <TextField value={pass} onChange={e => setPass(e.target.value)} id="outlined-basic" label="Введите пароль" variant="outlined" type={'password'} required/>
        <StyledSignUpButton onClick={signInUser} sx={{alignSelf: 'center'}} variant={'contained'}>Авторизация</StyledSignUpButton>
        <StyledLineEffect textAlign={'center'}>
          <Typography display={'inline-block'} position={'relative'} fontSize={'14px'} zIndex={100} sx={{backgroundColor: '#fff', p: '0 5px'}}>ИЛИ</Typography>
        </StyledLineEffect>
        <GoogleButton onClick={signInGoogle} sx={{alignSelf: 'center'}} variant={'contained'}>Google</GoogleButton>
        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Неверный логин или пароль!
          </Alert>
        </Snackbar>
      </Box>
    </StyledModal>
  )
}

export default Signin