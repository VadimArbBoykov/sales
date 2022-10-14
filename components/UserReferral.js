import React from 'react'
import { Box, Typography } from '@mui/material'

const UserReferral = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'} gap={3}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
        <Typography color={'#ffffff45'} fontSize={'16px'} fontWeight={300}>Отправьте эту ссылку вашим друзьям</Typography>
        <Box width={'100%'} bgcolor={'#111622'} borderRadius={3} textAlign={'center'} py={2}>
          <Typography color={'#fff'} fontSize={'16px'} fontWeight={300}>https://btcsale.biz/?ref=PNv16</Typography>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} bgcolor={'#fff'} borderRadius={3} width={'100%'} p={3}>
        <Typography component={'div'} alignSelf={'flex-start'} color={'#1c1c1c'} fontSize={'25px'} fontWeight={300}>Настройки</Typography>
        <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} gap={1} width={'100%'}>
          <Typography color={'#48525b'} fontSize={'14px'} fontWeight={500}>Реферальное имя</Typography>
          <Box bgcolor={'transparent'} borderRadius={1} border={'2px solid #DADBE0'} width={'100%'} p={1}>
            <Typography color={'#48525b'} fontSize={'14px'} fontWeight={400}>PNv16</Typography>
          </Box>
          <Box width={'100%'}>
            <Typography component={'p'}>
              <Typography component={'span'} color={'#FF0000'} fontSize={'14px'}>Внимание!!! !!!&nbsp;</Typography>
              <Typography component={'span'} color={'#999'} fontSize={'14px'} lineHeight={1.4}>Имя пользователя имеет смысл указать в случае, если вы желаете изменить реферальный хэш. После сохранения старый хэш не получится вернуть.</Typography>
            </Typography>
          </Box>
          
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} bgcolor={'#fff'} borderRadius={3} width={'100%'} p={3} gap={4}>
        <Typography component={'div'} alignSelf={'flex-start'} color={'#1c1c1c'} fontSize={'25px'} fontWeight={300}>Статистика</Typography>
        <Box display={'flex'} alignSelf={'center'} justifyContent={'space-between'}>
          <Box display={'flex'} flexDirection={'column'} flex={1}>
            <Typography fontSize={'30px'} fontWeight={300}>0.25</Typography>
            <Typography color={'#a9a9a9'} fontSize={'12px'}>Процент</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} flex={1}>
            <Typography fontSize={'30px'} fontWeight={300}>0</Typography>
            <Typography color={'#a9a9a9'} fontSize={'12px'}>Кол-во переходов (сегодня)</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} flex={1}>
            <Typography fontSize={'30px'} fontWeight={300}>0</Typography>
            <Typography color={'#a9a9a9'} fontSize={'12px'}>Всего рефералов</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} flex={1}>
            <Typography fontSize={'30px'} fontWeight={300}>0.00</Typography>
            <Typography color={'#a9a9a9'} fontSize={'12px'}>Бонусы</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UserReferral