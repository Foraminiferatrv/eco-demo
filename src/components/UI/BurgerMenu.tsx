import { useState } from "react"

import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from "@mui/icons-material/Close"


function BurgerMenu() {
  const [open, setOpen] = useState(false)


  return (
    <div>
      <IconButton
        aria-label="open-drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        componentsProps={{
          root: {
            className: "bg-bg-1 w-2/3 "
          }
        }}
      >
        <IconButton>
          <CloseIcon />
        </IconButton>
      </SwipeableDrawer>
    </div>
  )
}

export default BurgerMenu