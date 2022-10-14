import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import Best from '../assets/footer/best.png'
import Bits from '../assets/footer/bitsmedia.png'
import Broker from '../assets/footer/btcbroker.png'
import Cash from '../assets/footer/cashback.png'
import Change from '../assets/footer/changeinfo.png'
import Chexch from '../assets/footer/chexch.png'
import Em from '../assets/footer/em.png'
import Emon from '../assets/footer/emon.png'
import Eobmen from '../assets/footer/eobmen.png'
import Global from '../assets/footer/global.png'
import Green from '../assets/footer/green.png'
import Kurs from '../assets/footer/kurs.png'
import Kurses from '../assets/footer/kurses.png'
import Kursoff from '../assets/footer/kursoff.png'
import Monitoring from '../assets/footer/monitoring.png'
import Ok from '../assets/footer/okchanger.png'
import Perfect from '../assets/footer/perferct.png'
import Pro from '../assets/footer/proobmen.png'
import Punkt from '../assets/footer/punkt.png'
import Rate from '../assets/footer/rateex.png'
import Top from '../assets/footer/topchange.png'
import Well from '../assets/footer/well.png'

const Footer = () => {
  return (
    <Box width={'100%'} mt={3} p={2}>
      <Box maxWidth={1200} minWidth={400} sx={{marginX: 'auto'}} display={'flex'} justifyContent={'center'} flexWrap={'wrap'} alignItems={'flex=start'} width={'100%'}>
        <Box onClick={() => window.open('https://www.bestchange.ru/btcsale-exchanger.html', '_blank')}  width={88} height={33}  m={0.5} ml={6} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Best} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://kurs.expert/ru/obmennik/btcsale-biz/feedbacks.html', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Cash} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://bits.media/exchanger/btcsale', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Bits} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://ru.exchangersmonitor.com/exchanger-btcsale.biz.html', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Em} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://www.okchanger.ru/exchangers/BTCSale', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Ok} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://kursoff.com/exchange/BTCSale', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Kursoff} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://bestexchangers.ru/ru/detail.html?xobmen=845', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Green} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://e-mon.ru/exchanger/521', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Emon} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://kurs.com.ua/forums/topic/4999-btcsalebiz/', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Kurs} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://pro-obmen.ru/btcsale', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Pro} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://btcbroker.ru/exchangers/btcsale', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Broker} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://changeinfo.ru/review/BTCSale', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Change} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://topchange.top/exchangers/btcsale/', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Top} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://rateex.ru/exchanger_btcsale/', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Rate} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://bitcoinmarket.global/exchanger.php?id=424', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Global} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://wellcrypto.io/ru/exchangers/btcsale/', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Well} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://kurses.com.ua/exchangers/btcsale.biz', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Kurses} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://glazok.org/exchange/?details=927', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Monitoring} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://chexch.com/reviews/btcsale/', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Chexch} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://cryptobrokers.ru/btcsale-info/', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Punkt} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://eobmen-obmen.ru/btcsale-detali', '_blank')} width={88} height={33}  m={0.5} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Eobmen} alt={'Partner'}/>
        </Box>
        <Box onClick={() => window.open('https://perfectmoney.com/business-partners.html', '_blank')} width={88} height={33}  m={0.5} mr={6} sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>
          <Image src={Perfect} alt={'Partner'}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer