import { Box } from '@mui/material'
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import BlueInfo from '../components/BlueInfo';
import Footer from '../components/Footer';
import HomeWhite from '../components/HomeWhite';
import Prize from '../components/Prize';

const CenteredBox = styled(Box)({
  // position: 'absolute',
  // top: '30px',
  // left: 0,
  // right: 0,
  // margin: 'auto',
  zIndex: 999,
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  gap: 20
})

const coinsNames = ['btc', 'eth', 'ltc', 'doge', 'dash', 'zec', 'trx', 'xlm', 'xmr', 'xtz', 'xrp']
const tetherName = ['usdt']

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const data = await res.json()
  const onlyCoins = await data.filter((item) => coinsNames.includes(item.symbol))
  const tetherCoin = await data.filter((item) => tetherName.includes(item.symbol))

  let erc = await JSON.parse(JSON.stringify(tetherCoin[0]))
  erc.name = 'Tether ERC20'
  erc.id = 'erc20'
  erc.symbol = 'erc20'

  let trc = await JSON.parse(JSON.stringify(tetherCoin[0]))
  trc.name = 'Tether TRC20'
  trc.id = 'trc20'
  trc.symbol = 'trc20'

  await onlyCoins.splice(2, 0, erc, trc)

  onlyCoins.map(coin => {
    if(coin.symbol === 'btc' || coin.symbol === 'eth') {
      coin.current_price += coin.current_price / 100 * 3
    }
  })

  return {
    props: {
      coins: onlyCoins,
    }
  }
}

export default function Home({coins}) {
  return (
    <>
      <Box position={'relative'} display={'flex'} justifyContent={'center'} pt={3} pb={8} minWidth={450}>
        <Box width={'100%'} height={300} bgcolor='darkness.main' textAlign={'center'} minWidth={450} sx={{position: 'absolute', top: 0, left: 0, display: {xs: 'none', md: 'flex'}}}></Box>
        <CenteredBox maxWidth={1200} minWidth={450}>
          {/* <Prize/> */}
          <HomeWhite coins={coins}/>
        </CenteredBox>
        {/* <Box sx={{position: 'absolute', top: {xs: 3500, lg: 2100}, right: 0, left: 0, marginX: 'auto'}}>
          
        </Box>    */}
      </Box>
      <BlueInfo/>
      <Footer/>
    </>
  )
}
