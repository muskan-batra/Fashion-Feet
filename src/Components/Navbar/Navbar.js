import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material';
import NavbarMobile from './navbarMobile';
import NavbarDesktop from './navbarDesktop';
import React from 'react'
function Navbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
  <>
  {matches ? <NavbarMobile/> : <NavbarDesktop/>}
  </>
  )
}

export default Navbar