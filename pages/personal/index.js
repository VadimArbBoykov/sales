import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  
  router.push('/personal/application')

  return (
    <div></div>
  )
}

export default Index