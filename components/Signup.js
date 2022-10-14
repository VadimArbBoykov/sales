import {Box, Button, IconButton, Modal, Snackbar, TextField, Typography} from '@mui/material'
import styled from '@emotion/styled'
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';


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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signup = ({open, setOpen}) => {
  const [alert, setAlert] = useState(false)
  const [rePassAlert, setRePassAlert] = useState(false)

  const handleClick = () => {
    setAlert(true);
  };

  const handleRepassClick = () => {
    setRePassAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const handleRepassClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setRePassAlert(false);
  };

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [repass, setRepass] = useState('')

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const signUpUser = async (e) => {
    e.preventDefault()

    if(pass !== repass) {
      handleRepassClick()
      return
    }
    await setDoc(doc(db, 'users', `${email}`), {
      name, email, pass
    })
    await createUserWithEmailAndPassword(email, pass)
    if(error && !loading) {
      handleClick()
    } else {
      setName('')
      setEmail('')
      setPass('')
      setRepass('')
      setOpen(false)
    }   
  }

  return (
    <StyledModal
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box display={'flex'} flexDirection={'column'} gap={3.5} bgcolor={'#fff'} width={400} height={570} py={2} px={4}>
        <IconButton sx={{alignSelf: 'flex-end'}} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <form onSubmit={signUpUser}>
          <Box display={'flex'} flexDirection={'column'} gap={3}>
            <Typography textAlign={'center'} fontSize={'23px'} fontWeight={300}>Создать аккаунт</Typography>
            <TextField value={name} onChange={e => setName(e.target.value)} id="outlined-basic" label="Пожалуйста представьтесь" variant="outlined" required/>
            <TextField value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="Введите e-mail" variant="outlined" type={'email'} required/>
            <TextField inputProps={{minLength: 6}} value={pass} onChange={e => setPass(e.target.value)} id="outlined-basic" label="Придумайте пароль" type={'password'} variant="outlined" required/>
            <TextField inputProps={{minLength: 6}} value={repass} onChange={e => setRepass(e.target.value)} id="outlined-basic-repass" label="Повторите пароль" variant="outlined" type={'password'} required/>
            <StyledSignUpButton sx={{alignSelf: 'center'}} variant={'contained'} type={'submit'}>Зарегистрироваться</StyledSignUpButton>
          </Box>
        </form>
        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Попробуйте другой e-mail
          </Alert>
        </Snackbar>
        <Snackbar open={rePassAlert} autoHideDuration={6000} onClose={handleRepassClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
          <Alert onClose={handleRepassClose} severity="error" sx={{ width: '100%' }}>
            Повторите пароль
          </Alert>
        </Snackbar>
      </Box>
    </StyledModal>
  )
}

export default Signup