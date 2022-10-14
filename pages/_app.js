import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import {CacheProvider} from '@emotion/react'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
import theme from '../styles/theme'
import createEmotionCache from '../utils/createEmotionCache'
import CircularProgress from '@mui/material/CircularProgress';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [user, loading, error] = useAuthState(auth);

  const [open, setOpen] = useState(false)

  const handleOpen = (boolean) => {
    setOpen(boolean)
  }

  if(loading) {
    return (
      <>
        <Head>
          <title>BTCSale - Криптовалютный обменник</title>
          <meta name="description" content="BTCSale - Криптовалютный обменник" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <CircularProgress color={'primary'} size={60}/>
            </Box>
          </ThemeProvider>
        </CacheProvider>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>BTCSale - Криптовалютный обменник</title>
        <meta name="description" content="BTCSale - Криптовалютный обменник" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Box height={'100vh'} sx={{position: 'absolute', top: 0, left: 0}}>
            <Sidebar
              open={open}
              handleOpen={handleOpen}
            />
          </Box>
          <Layout handleOpen={handleOpen}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp
