import React from 'react'
import { Box, Button, Typography, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/system';
import { useState } from 'react';
import Review from '../components/Review'
import ReviewModal from '../components/ReviewModal';

const CenteredBox = styled(Box)({
  position: 'absolute',
  top: '30px',
  left: 0,
  right: 0,
  margin: 'auto',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 30,
})

const StyledButton = styled(Button)(({theme}) => ({
  display: 'flex',
  backgroundColor: 'white',
  color: 'black',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'lightgray'
  },
}))

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const names = [
  'Юпитер-У', 
  'Владлен', 
  'Кулаков А', 
  'Arina',
  'Aleksandr',
  'Дима',
  'Стрелец',
  'Виталий',
  'Escobar',
  'Андрей',
  'Михаил',
  'Ruslan',
  'Павел',
  'Леонид',
  'Иван',
  'More',
  'Алихан',
  'Алиса',
  'Азалия',
  'Valery',
  'Александра',
  'Svetlana',
  'Good.boy.228.007',
  'Alizade',
  'Принглс',
  'Алисия',
  'Vagarsh',
  'Аслан',
  'Andro',
  '6Ix9Ine',
  'Adam',
  'мастер',
  'Smerch',
  'Gorbi',
  'Dmitri',
  'Кирилл',
  'Виктор',
  'Лиза',
  'Kirill',
  'Mr',
  'Nesquik',
  'Любовь',
  'Ништяк',
  'Татарин',
  'Максим',
  'Эдвард',
  'Илья',
  'Eva',
  'Alixan',
  'Гранд',
  'Viacheslav',
  'Ayder',
  'Evgeny',
  'Белуга',
  'Ярик',
  'Данила',
  'Пётр',
  'Ludmila',
  'Андрей Викторович Тихонов'
]

const revs = [
  'Превосходный обменник, всё сделали быстро и качественно!', 
  'Лучший сервис. Спасибо за обмен', 
  'Сегодня первый раз воспользовался этим сервисом\nПолёт нормальный, биток пришёл на бинанс в течение 10 минут ;-)', 
  'Топовый обменник',
  'На юмани за пару сек. Рекомендую однозначно',
  'Хорошая консультация, удобный сайт, быстрый обмен !!!\nМне понравились ребята) Буду с вами',
  'Спасибо большое за оперативность',
  'Обмен без лишних движений, четко и быстро.',
  'Курс зафиксировали на момент сделки, отправили деньги спустя 5 минут, после перевода',
  'Меняю только тут',
  'Классный обменник. Спасибо вам за вашу работу',
  'Меняю только тут',
  'Обменяли быстро. Без обмана',
  'Eth -> btc\nЛегко и быстро. Рекомендую',
  'Оперативненько, молодцы ребята',
  'Всё очень быстро. без проблем. рекомендую.',
  'Все прошло отлично!',
  'Быстрый обмен, хороший курс, служба поддержки ответила на вопрос очень оперативно.',
  'Все круто, перевод за 5 минут!',
  'Отличный стабильный обменник, всё быстро приходит не каких задержек интуитивно понятный',
  'Хорошая консультация, удобный сайт, быстрый обмен !!!\nМне понравились ребята) Буду с вами)',
  'Быстрый вывод. Без задержек. Без лишней комиссии. Постоянно пользуюсь данной платформой. Рекомендую',
  'Cамый лучший сервис. Курс отличный',
  'Отличный обменник. Хороший курс, быстрый обмен, отличная работа тех поддержки?',
  'Как всегда быстро и качественно!',
  'Очень быстро и без обмана. Ребята спасибо. Рекомендую',
  'Отличный сайт, обменный был быстрым, рекомендую!',
  'Молниеносный обмен. Спасибо за оперативность',
  'Лучший топовый обменник, рекомендую',
  'Обмен за 5 минут\nСпасибо большое',
  'Большое спасибо! Все как всегда;надежно,быстро и по хорошему курсу!',
  'Очень понравился, спасибо',
  'Спасибо за ваш сервис, всё быстро и хорошо.',
  'Отличный обменник ! Быстро!',
  'Все работает, оперативно. В чате на все вопросы отвечают. Рекомендую.',
  'Реальный сайт, только что перевел деньги, все работает,',
  'Прекрасный сайт. Очень выручает. Быстро и удобно 👍',
  'Очень удобный и хороший сервис. Всё быстро и качественно. Пользовался неоднократно и буду продолжать пользоваться. Советую всем',
  'Очень удобно и быстро 🤑',
  'Перевод прошел быстро. Спасибо',
  'Реально обменяли за 10 минут встретил такое первый раз, будем проверять еще.',
  'Все быстро, своевременно. Спасибо вам',
  'Пользуюсь услугами вашими уже несколько раз.Всё-быстро,честно и профессионально.Спасибо вам огромное!',
  'Обмен прошел моментально! Отлично!',
  'Честно сказать боялся связываться с обменником. Но зря. Уже перевел несколько раз. Все хорошо и как надо!',
  'Ребята, спасибо огромное. Сработано четко,быстро и без обмана.(если кто-то боится)',
  'Спасибо за вашу работу. Вы очень помогаете. Быстро , удобно.',
  'Большое спасибо, что вы есть. Все быстро, своевременно.',
  'Большая, огромная вам благодарность!!! Всегда быстро до минуты, хороший курс, спасибо большое за работу и помощь!!!',
  'Отличный обменник, даже несмотря что иногда в других есть чуть выгоднее курс, всего пользуюсь btcsale, так как знаю что деньги придут в течении минуты на карту, за исключением одного раза',
  'Спасибо! Четко, быстро и надежно!',
  'Даже не знаю с чем сравнить, обменник Пуля! Благодарю, все супер быстро! Ребята меняйте здесь смело! Всем очень рекомендую!',
  'Ребята, вы - лучшие! Быстро! Честно!',
  'Спасибо огромное, очень довольна, что воспользовалась Вашими услугами, всё надёжно и оперативно, обязательно воспользуюсь ещё, курс хороший 👍',
  'Практически моментальный перевод средств, отлично работает сайт!',
  'Отличный обменник. Все быстро и понятно. Обмен в 2 клика.',
  'Спасибо за порядочность,честность и оперативность.Работа обменника-на высочайшем уровне.',
  'Отличний обменник. Нет заморочку с регистрацией. Спасибо за помогти в нинешней ситуации оченят виручили.',
]

const shuffled = names.sort(() => 0.5 - Math.random())
const revShuffled = revs.sort(() => 0.5 - Math.random())

let selected = shuffled.slice(0, 20)
let revSelected = revShuffled.slice(0, 20)

const Reviews = () => {
  const [open, setOpen] = useState(false)
  const [alert, setAlert] = useState(false)

  const handleClick = () => {
    setAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  return (
    <>
    <Box width={'100%'} height={300} bgcolor='darkness.main' position={'relative'} minWidth={450}>
      <CenteredBox maxWidth={800} minWidth={450}>
        <Box>
          <StyledButton variant='contained' onClick={() => setOpen(true)}>
            <Typography fontWeight={400} fontSize={'14px'} color={'#212121'}>Написать отзыв</Typography>
          </StyledButton>
        </Box>
        <Review 
          name={selected[0]}
          text={revSelected[0]}
          minus={0}
        />
        <Review 
          name={selected[1]}
          text={revSelected[1]}
          minus={0}
        />
        <Review 
          name={selected[2]}
          text={revSelected[2]}
          minus={0}
        />
        <Review 
          name={selected[3]}
          text={revSelected[3]}
          minus={0}
        />
        <Review 
          name={selected[4]}
          text={revSelected[4]}
          minus={1}
        />
        <Review 
          name={selected[5]}
          text={revSelected[5]}
          minus={1}
        />
        <Review 
          name={selected[6]}
          text={revSelected[6]}
          minus={1}
        />
        <Review 
          name={selected[7]}
          text={revSelected[7]}
          minus={2}
        />
        <Review 
          name={selected[8]}
          text={revSelected[8]}
          minus={2}
        />
        <Review 
          name={selected[9]}
          text={revSelected[9]}
          minus={2}
        />
        <Review 
          name={selected[10]}
          text={revSelected[10]}
          minus={2}
        />
        <Review 
          name={selected[11]}
          text={revSelected[11]}
          minus={3}
        />
        <Review 
          name={selected[12]}
          text={revSelected[12]}
          minus={3}
        />
        <Review 
          name={selected[13]}
          text={revSelected[13]}
          minus={4}
        />
        <Review 
          name={selected[14]}
          text={revSelected[14]}
          minus={4}
        />
        <Review 
          name={selected[15]}
          text={revSelected[15]}
          minus={5}
        />
        <Review 
          name={selected[16]}
          text={revSelected[16]}
          minus={5}
        />
        <Review 
          name={selected[17]}
          text={revSelected[17]}
          minus={6}
        />
        <Review 
          name={selected[18]}
          text={revSelected[18]}
          minus={6}
        />
        <Review 
          name={selected[19]}
          text={revSelected[19]}
          minus={7}
        />
        
        <ReviewModal open={open} setOpen={setOpen} alert={alert} handleClick={handleClick}/>
        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Отзыв отправлен на модерацию!
          </Alert>
        </Snackbar>
      </CenteredBox>
    </Box>
    <Box width={'100%'} height={600} bgcolor='#F5F5F7' textAlign={'center'}></Box>
    </>
  )
}

export default Reviews