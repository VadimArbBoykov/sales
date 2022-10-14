import { Typography, Box, IconButton, Collapse } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const StyledContacts = styled(Box)(({theme}) => ({
  color: 'black',
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  borderRadius: 10,
  flexDirection: 'row',
  gap: 20,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}))

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FaqWhite = () => {

  const [expanded, setExpanded] = useState(false);
  const [expandedSecond, setExpandedSecond] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandSecondClick = () => {
    setExpandedSecond(!expandedSecond);
  };

  return (
    <StyledContacts py={6} px={6}>
      <Box display={'flex'} flexDirection={'column'} gap={5} flex={1}>
        <Typography fontSize={'30px'} fontWeight={300} color={'#2d2d2d'}>Вопросы и ответы</Typography>
        <Box width={290}>
          <Typography fontSize={'14px'} color={'#878792'}>Здесь вы можете узнать ответы на наиболее часто задаваемые вопросы</Typography>
        </Box>
        <Box p={2} bgcolor={'#F7F8F9'} borderRadius={3}>
          <Typography fontSize={'16px'} fontWeight={500} color={'#303a43'}>Криптовалюта / Cryptocurrency</Typography>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={2} flex={2}>
        <Box display={'flex'} flexDirection={'column'} gap={2} width={'100%'} maxWidth={800}>
          <Box p={2} bgcolor={'#EFEFF0'} borderRadius={3} display={expanded ? 'none' : 'flex'} justifyContent={'space-between'}>
            <Box width={'95%'} position={'relative'}>
              <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'block', position: 'absolute', top: 0, left: 0, right: 0, marginX: 'auto'}}>Что такое количество подтверждений сети? / What is the number of network confirmations?</Typography>
            </Box>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
          <Collapse orientation='vertical' in={expanded} timeout="auto" unmountOnExit>
            <Box p={4} display={!expanded ? 'none' : 'flex'} flexDirection={'column'} bgcolor={'#EFEFF0'} borderRadius={3}>
              <Box width={'100%'} display={'flex'} justifyContent={'space-between'} mt={3} maxHeight={55}>
                <Box width={'95%'} position={'relative'}>
                  <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', position: 'absolute', top: 0, left: 0, right: 0, marginX: 'auto'}} fontSize={'18px'} color={'#222332'} fontWeight={500}>Что такое количество подтверждений сети? / What is the number of network confirmations?</Typography>
                </Box>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore> 
              </Box>
              <Box>
                <Typography component={'span'} color={'#000'}>
                  <Typography component={'p'} fontSize={'15px'} mt={'28px'} mb={'28px'}>
                    Подтверждение транзакции нужно для того, чтобы предотвратить повторный расход одних и тех же денежных средств. Как только отправитель переводит средства, транзакция попадает в сеть для исполнения и включения в блок. Именно процесс добавления транзакции в состав найденного блока называется подтверждением транзакции. Один блок включает в себя одно подтверждение. Как только Ваша транзакция получает подтверждение, криптовалюта становится доступна для дальнейшего использования.
                  </Typography>
                  <Typography component={'p'} fontSize={'15px'} mb={'112px'}>
                    Скорость подтверждения зависит от множества факторов, таких как: загруженность самой сети, размер комиссии указанной при переводе, скорость интернет соединения и т.д. В среднем, подтверждение транзакции длится от 30 минут до нескольких часов. Но иногда подтверждение можно ждать и от 2-х до 14 дней, если сеть перегружена. Вывод средств станет технически возможен, когда произойдет определенное количество подтверждений сетью (в зависимости от типа зачисляемой криптовалюты).
                  </Typography>
                  <Typography component={'p'} fontSize={'15px'} mb={'28px'}>
                    Confirmation of the transaction is necessary in order to prevent the repeated spending of the same funds. As soon as the sender transfers funds, the transaction enters the network for execution and inclusion in the block. It is the process of adding a transaction to the found block that is called transaction confirmation. One block includes one confirmation. As soon as your transaction is confirmed, the cryptocurrency becomes available for further use.
                  </Typography>
                  <Typography component={'p'} fontSize={'15px'} mb={'28px'}>
                    The confirmation speed depends on many factors, such as: the congestion of the network itself, the size of the commission indicated during the transfer, the speed of the Internet connection, etc. On average, confirmation of a transaction takes from 30 minutes to several hours. But sometimes you can wait for confirmation from 2 to 14 days if the network is overloaded. The withdrawal of funds will become technically possible when a certain number of confirmations by the network occur (depending on the type of the credited cryptocurrency).
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Collapse>
          <Box p={2} bgcolor={'#EFEFF0'} borderRadius={3} display={expandedSecond ? 'none' : 'flex'} justifyContent={'space-between'}>
            <Box width={'95%'} position={'relative'} >
              <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'block', position: 'absolute', top: 0, left: 0, right: 0, marginX: 'auto'}}>Что такое количество подтверждений сети? / What is the number of network confirmations?</Typography>
            </Box>
            <ExpandMore
              expand={expandedSecond}
              onClick={handleExpandSecondClick}
              aria-expanded={expandedSecond}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
          <Collapse orientation='vertical' in={expandedSecond} timeout="auto" unmountOnExit>
            <Box p={4} display={!expandedSecond ? 'none' : 'flex'} flexDirection={'column'} bgcolor={'#EFEFF0'} borderRadius={3}>
              <Box width={'100%'} display={'flex'} justifyContent={'space-between'} mt={3} maxHeight={55} alignItems={'center'}>
                <Box width={'95%'} position={'relative'}>
                  <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', position: 'absolute', top: 0, left: 0, right: 0, marginX: 'auto'}} fontSize={'18px'} color={'#222332'} fontWeight={500}>Сколько подтверждений нужно для оплаты на BTCSale? / How many confirmations do I need to pay at BTCSale?</Typography>
                </Box>
                <ExpandMore
                  expand={expandedSecond}
                  onClick={handleExpandSecondClick}
                  aria-expanded={expandedSecond}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore> 
              </Box>
              <Box>
                <Typography component={'span'} color={'#000'}>
                  <Typography component={'p'} fontSize={'15px'} fontWeight={700} mt={'28px'} mb={'28px'}>
                    Обменный пункт BTCSale установил следующее количество подтверждений: / The BTCSale exchanger has set the following number of confirmations:
                  </Typography>
                  <Typography component={'p'} fontSize={'15px'}>1 USDT (TRC-20)</Typography>
                  <Typography component={'p'} fontSize={'15px'}>2 BTC</Typography>
                  <Typography component={'p'} fontSize={'15px'}>10 XMR, BCH, DASH, LTC</Typography>
                  <Typography component={'p'} fontSize={'15px'}>15 DOGE</Typography>
                  <Typography component={'p'} fontSize={'15px'}>20 ETH, USDT(ERC-20)</Typography>
                  <Typography component={'p'} fontSize={'15px'}>22 ZEC</Typography>
                </Typography>
              </Box>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </StyledContacts>
  )
}

export default FaqWhite