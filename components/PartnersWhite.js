import { Typography, Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import WebIcon from '@mui/icons-material/Web';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const StyledPartners = styled(Box)({
  color: 'black',
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box display={'flex'} flexDirection={'column'} gap={0.5}>
          {children}
        </Box>
      )}
    </div>
  );
}

const PartnersWhite = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledPartners py={6} px={6}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography color={'#2d2d2d'} fontSize={'28px'} fontWeight={300}>Партнерам</Typography>
      </Box>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange} textColor="secondary">
            <Tab label="Реферальная программа" sx={{minWidth: 10, paddingX: 3, paddingY: 2, marginLeft: 'auto', textTransform: 'none'}}/>
            <Tab label="Кэшбэк" sx={{minWidth: 10, paddingX: 3, paddingY: 2, textTransform: 'none'}}/>
            <Tab label="Мониторингам" sx={{minWidth: 10, paddingX: 3, paddingY: 2, textTransform: 'none'}}/>
          </Tabs>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <Box display={'flex'} flexDirection={'column'} sx={{marginTop: 2}}>
              <Typography component={'span'} textAlign={'start'} color={'#787878'}>
                <Typography component={'p'} mb={'28px'}>
                  Посоветуйте наш сервис друзьям и партнерам и зарабатывайте вместе с нами! Ваша реферальная ссылка находится в личном кабинете, в разделе «Рефералы», скопируйте её и поделитесь с друзьями!
                </Typography>
                <Typography component={'p'} mb={'28px'}> 
                  Для вашего удобства в личном кабинете хранится история реферальных начислений, где отражено, сколько человек было зарегистрировано по Вашей рекомендации, а так же информация о Вашем кешбеке.            
                </Typography>
                <Typography component={'p'} mb={'56px'}>
                  Мы разработали поэтапную реферальную программу с хорошим вознаграждением:            
                </Typography>
                <Typography component={'p'} mb={'28px'}>
                Recommend our service to your friends and partners and earn with us! Your referral link is in your personal account, in the &quot;Referrals&quot; section, copy it and share with your friends!            
                </Typography>
                <Typography component={'p'} mb={'28px'}> 
                  For your convenience, the history of referral charges is stored in your personal account, which reflects how many people were registered on your recommendation, as well as information about your cashback.            
                </Typography>
                <Typography component={'p'} mb={'28px'}>
                  We have developed a phased referral program with good rewards:            
                </Typography>
              </Typography>
              
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography color={'#1c1c1c'} fontSize={'20px'} fontWeight={400}>Как это работает?</Typography>
              {/* FIRST ITEMS */}
              <Box display={'flex'} width={'100%'} mt={6} sx={{flexDirection: {xs: 'column', sm: 'row'}}} gap={2}>
                <Box display={'flex'} flex={1} gap={2} alignItems={'center'} sx={{flexDirection: {xs: 'row', sm: 'column', md: 'row'}}}>
                  <Box width={76} height={76} borderRadius={'50%'} bgcolor={'#EEF3F5'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <InsertLinkIcon fontSize='large' color='secondary' sx={{transform: 'rotate(139deg)'}}/>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography fontSize={'15px'} color={'#1c1c1c'} textAlign={'start'}>Скопируйте ссылку</Typography>
                    <Typography fontSize={'13px'} color={'#787878'} textAlign={'start'}>В разделе Личного кабинета - <br/>Реферальная программа</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} flex={1} gap={2} alignItems={'center'} sx={{flexDirection: {xs: 'row', sm: 'column', md: 'row'}}}>
                  <Box width={76} height={76} borderRadius={'50%'} bgcolor={'#EEF3F5'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <WebIcon fontSize='large' color='secondary'/>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography fontSize={'15px'} color={'#1c1c1c'} textAlign={'start'}>Разместите на сайте</Typography>
                    <Typography fontSize={'13px'} color={'#787878'} textAlign={'start'}>Также поделитесь с друзьями в соц.сетях</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} flex={1} gap={2} alignItems={'center'} sx={{flexDirection: {xs: 'row', sm: 'column', md: 'row'}}}>
                  <Box width={76} height={76} borderRadius={'50%'} bgcolor={'#EEF3F5'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <AttachMoneyIcon fontSize='large' color='secondary'/>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography fontSize={'15px'} color={'#1c1c1c'} textAlign={'start'}>Удобный вывод</Typography>
                    <Typography fontSize={'13px'} color={'#787878'} textAlign={'start'}>Выберите способ и вывод денег</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Typography color={'#1c1c1c'} fontSize={'20px'} fontWeight={400} mt={6} mb={6}>Накопительная система реферальных за обмен:</Typography>
              {/*FIRST CIRCLES */}
              <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={1}>
                <Box sx={{width: {xs: '100%', sm: 246}, height: {xs: 200, sm: 246}, borderRadius: {xs: 8, sm: '50%'}}} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} bgcolor={'#1F2339'} position={'relative'}>
                  <Typography fontSize={'14px'} color={'#fff'} sx={{opacity: 0.7}}>Реф. начисления:</Typography>
                  <Typography fontSize={'90px'} color={'#fff'} fontWeight={100}>0.25</Typography>
                  <Typography sx={{position: 'absolute', top: {xs: '60px', sm: '80px'}, right: {xs: '30px', sm: '10px'}}} fontSize={'33px'} color={'#fff'} fontWeight={100} component={'span'}>%</Typography>
                  <Typography fontSize={'14px'} color={'#fff'}>Start</Typography>
                  <Box sx={{position: 'absolute', bottom: 0, right: 0, boxShadow: 1, display: {xs: 'none', sm: 'flex'}}} width={85} height={85} bgcolor={'#fff'} borderRadius={'50%'} justifyContent={'center'} alignItems={'center'}>
                    <Typography component={'span'} textTransform={'uppercase'} color={'#262626'}>
                      <Typography component={'p'} fontSize={'10px'} fontWeight={700}>Доступен</Typography>
                      <Typography component={'p'} fontSize={'10px'} fontWeight={700}>При старте</Typography>
                    </Typography>
                  </Box>  
                </Box>
                <Box sx={{width: {xs: '100%', sm: 246}, height: {xs: 200, sm: 246}, borderRadius: {xs: 8, sm: '50%'}}} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} width={246} height={290} borderRadius={'50%'} bgcolor={'#EEF3F5'} position={'relative'}>
                  <Typography fontSize={'14px'} color={'#6a6a6a'} sx={{opacity: 0.7}}>Реф. начисления:</Typography>
                  <Typography fontSize={'90px'} color={'#6a6a6a'} fontWeight={100}>0.5</Typography>
                  <Typography sx={{position: 'absolute', top: {xs: '60px', sm: '80px'}, right: {xs: '30px', sm: '10px'}}} fontSize={'33px'} color={'#6a6a6a'} fontWeight={100} component={'span'}>%</Typography>
                  <Typography fontSize={'14px'} color={'#6a6a6a'}>Individual</Typography>  
                </Box>
                <Box sx={{width: {xs: '100%', sm: 246}, height: {xs: 200, sm: 246}, borderRadius: {xs: 8, sm: '50%'}}} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} width={246} height={290} borderRadius={'50%'} bgcolor={'#EEF3F5'} position={'relative'}>
                  <Typography fontSize={'14px'} color={'#6a6a6a'} sx={{opacity: 0.7}}>Реф. начисления:</Typography>
                  <Typography fontSize={'90px'} color={'#6a6a6a'} fontWeight={100}>0.65</Typography>
                  <Typography sx={{position: 'absolute', top: {xs: '60px', sm: '80px'}, right: {xs: '30px', sm: '10px'}}} fontSize={'33px'} color={'#6a6a6a'} fontWeight={100} component={'span'}>%</Typography>
                  <Typography fontSize={'14px'} color={'#6a6a6a'}>Individual</Typography>  
                </Box>
                <Box sx={{width: {xs: '100%', sm: 246}, height: {xs: 200, sm: 246}, borderRadius: {xs: 8, sm: '50%'}}} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} width={246} height={290} borderRadius={'50%'} bgcolor={'#EEF3F5'} position={'relative'}>
                  <Typography fontSize={'14px'} color={'#6a6a6a'} sx={{opacity: 0.7}}>Реф. начисления:</Typography>
                  <Typography fontSize={'90px'} color={'#6a6a6a'} fontWeight={100}>1</Typography>
                  <Typography sx={{position: 'absolute', top: {xs: '60px', sm: '80px'}, right: {xs: '100px', sm: '10px'}}} fontSize={'33px'} color={'#6a6a6a'} fontWeight={100} component={'span'}>%</Typography>
                  <Typography fontSize={'14px'} color={'#6a6a6a'}>Individual</Typography>  
                </Box>
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} mt={6}>
              <Typography component={'span'} textAlign={'start'} color={'#787878'}>
                <Typography component={'p'} mb={'28px'}>Обратите внимание! Реферальные начисляются с каждой транзакции.</Typography>
                <Typography component={'p'} mb={'56px'}>По поводу изменения партнёрского процента просим писать на наш email.</Typography>
                <Typography component={'p'} mb={'28px'}>Note! Referral charged with each transaction.</Typography>
              </Typography>  
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box display={'flex'} flexDirection={'column'} sx={{marginTop: 2}}>
              <Typography component={'span'} textAlign={'start'} color={'#787878'}>
                <Typography component={'p'} mb={'28px'}>
                  Каждый зарегистрировавшийся на сайте пользователь сможет получать кэшбэк за обмен!                
                </Typography>
                <Typography component={'p'} mb={'56px'}> 
                  Как рассчитывается скидка по накопительной системе кэшбэк?            
                </Typography>
                <Typography component={'p'} mb={'28px'}>
                  Each user who registers on the site will be able to receive cashback for the exchange!           
                </Typography>
                <Typography component={'p'} mb={'28px'}>
                  How is the discount on the accumulative cashback system calculated?            
                </Typography>
              </Typography>
              
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography color={'#1c1c1c'} fontSize={'20px'} fontWeight={400}>Как получить кешбэк?</Typography>
              {/* SECOND ITEMS */}
              <Box sx={{flexDirection: {xs: 'column', sm: 'row'}}} display={'flex'} width={'100%'} mt={6}>
                <Box display={'flex'} flex={1} gap={2} alignItems={'center'} sx={{flexDirection: {xs: 'row', sm: 'column', md: 'row'}}}>
                  <Box width={38} height={38} borderRadius={'50%'} bgcolor={'#EEF3F5'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography>1</Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography fontSize={'15px'} color={'#1c1c1c'} textAlign={'start'}>Регистрация</Typography>
                    <Typography fontSize={'13px'} color={'#787878'} textAlign={'start'}>Зарегистрируйтесь на сайте</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} flex={1} gap={2} alignItems={'center'} sx={{flexDirection: {xs: 'row', sm: 'column', md: 'row'}}}>
                  <Box width={38} height={38} borderRadius={'50%'} bgcolor={'#EEF3F5'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography>2</Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography fontSize={'15px'} color={'#1c1c1c'} textAlign={'start'}>Совершите обмен</Typography>
                    <Typography fontSize={'13px'} color={'#787878'} textAlign={'start'}>По любому актуальному направлению</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} flex={1} gap={2} alignItems={'center'} sx={{flexDirection: {xs: 'row', sm: 'column', md: 'row'}}}>
                  <Box width={38} height={38} borderRadius={'50%'} bgcolor={'#EEF3F5'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Typography>3</Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography fontSize={'15px'} color={'#1c1c1c'} textAlign={'start'}>Получите кешбэк*</Typography>
                    <Typography fontSize={'13px'} color={'#787878'} textAlign={'start'}>Сумма кешбэка зависит от суммы обмена</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Typography color={'#1c1c1c'} fontSize={'20px'} fontWeight={400} mt={6} mb={6}>Накопительная система кэшбэк за обмен:</Typography>
              {/* SECOND CIRCLES */}
              <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={1}>
                <Box sx={{width: {xs: '100%', sm: 295}, height: {xs: 200, sm: 290}, borderRadius: {xs: 8, sm: '50%'}}} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} bgcolor={'#1F2339'} position={'relative'}>
                  <Typography fontSize={'14px'} color={'#fff'} sx={{opacity: 0.7}}>Кэшбэк:</Typography>
                  <Typography fontSize={'90px'} color={'#fff'} fontWeight={100}>0</Typography>
                  <Typography sx={{position: 'absolute', top: {xs: '60px', sm: '90px'}, right: {xs: '100px', sm: '70px'}}} fontSize={'33px'} color={'#fff'} fontWeight={100} component={'span'}>%</Typography>
                  <Box width={160}>
                    <Typography fontSize={'14px'} color={'#fff'}>Бонусные начисления временно отключены</Typography> 
                  </Box>
                </Box>
                <Box sx={{width: {xs: '100%', sm: 295}, height: {xs: 200, sm: 290}, borderRadius: {xs: 8, sm: '50%'}}} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} width={295} height={290} borderRadius={'50%'} bgcolor={'#EEF3F5'} position={'relative'}>
                  <Typography fontSize={'14px'} color={'#6a6a6a'} sx={{opacity: 0.7}}>Кэшбэк:</Typography>
                  <Typography fontSize={'90px'} color={'#6a6a6a'} fontWeight={100}>0</Typography>
                  <Typography sx={{position: 'absolute', top: '100px', right: '90px'}} fontSize={'33px'} color={'#6a6a6a'} fontWeight={100} component={'span'}>%</Typography>
                  <Box width={160}>
                    <Typography fontSize={'14px'} color={'#6a6a6a'}>Бонусные начисления временно отключены</Typography> 
                  </Box>  
                </Box>
                <Box sx={{width: {xs: '100%', sm: 295}, height: {xs: 200, sm: 290}, borderRadius: {xs: 8, sm: '50%'}}} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} width={295} height={290} borderRadius={'50%'} bgcolor={'#EEF3F5'} position={'relative'}>
                  <Typography fontSize={'14px'} color={'#6a6a6a'} sx={{opacity: 0.7}}>Кэшбэк:</Typography>
                  <Typography fontSize={'90px'} color={'#6a6a6a'} fontWeight={100}>0</Typography>
                  <Typography sx={{position: 'absolute', top: '100px', right: '90px'}} fontSize={'33px'} color={'#6a6a6a'} fontWeight={100} component={'span'}>%</Typography>
                  <Box width={160}>
                    <Typography fontSize={'14px'} color={'#6a6a6a'}>Бонусные начисления временно отключены</Typography> 
                  </Box>   
                </Box>
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} mt={6}>
              <Typography component={'span'} textAlign={'start'} color={'#787878'}>
                <Typography component={'p'} mb={'56px'}>Обратите внимание! Кэшбэк начисляется от оборота с каждой Вашей транзакции.</Typography>
                <Typography component={'p'} mb={'28px'}>Note! Cashback is credited from the turnover from each of your transactions.</Typography>
              </Typography>  
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box display={'flex'} flexDirection={'column'} mt={6}>
              <Typography component={'span'} textAlign={'start'} color={'#787878'}>
                <Typography component={'p'} mb={'56px'}>Мы всегда рады новым партнёрам! Контактный e-mail support@btcsale.biz</Typography>
                <Typography component={'p'} mb={'28px'}>We are always glad to new partners! Contact e-mail support@btcsale.biz</Typography>
              </Typography>  
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </StyledPartners>
  )
}

export default PartnersWhite