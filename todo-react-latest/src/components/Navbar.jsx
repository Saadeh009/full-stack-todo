import { AppBar, Avatar, Box, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
const Navbar = () => {
  return (
    <Box sx={{pt:10, paddingLeft: 0, position: 'relative', backgroundColor: 'background.default', color: 'primary.main', display: 'flex', justifyContent: 'space-between', alignItems: 'bottom', borderBottom: 1, borderColor: `rgba(244, 246, 250, 0.1)` }} elevation={0}>
      <Box>
        <Typography variant='h5' fontWeight={700}> TO DO APP </Typography>
        <Typography variant='body2' fontSize={12} sx={{py: 1, color: `rgba(244, 246, 250, 0.5)`}}> Stop Procrastinating , Start Organizing </Typography>
      </Box>
      <Avatar src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' />
    </Box>
  )
}

export default Navbar