import Navbar from "./Navbar"
import { useState } from 'react';
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

const Layout = ({children, handleOpen}) => {

  return (
    <>
      <Navbar handleOpen={handleOpen}/>
      <Box >{children}</Box>
      {/* overflow={open ? 'hidden' : 'scroll'} sx={{'&::-webkit-scrollbar': {width: '0px'}}} */}
    </>
  )
}

export default Layout