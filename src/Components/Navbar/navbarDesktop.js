import React from 'react'
import { Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {AppbarContainer , AppbarHeader , MyList} from '../../styles/appbar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Actions from './Actions'

function navbarDesktop({matches}) {

 

  return (
    <div>
<AppbarContainer>
<AppbarHeader>Fashion Feet</AppbarHeader>
<MyList type = "row">
  <ListItemText primary = "Home" />
  <ListItemText primary = "Categories" />
  <ListItemText primary = "Product" />
  <ListItemText primary = "Contact" />

  {/* search icon */}
  <ListItemButton>

  <ListItemIcon>
    <SearchIcon/>
  </ListItemIcon>

  </ListItemButton>
{/* cartIcon */}

  <ListItemButton
  sx={{justifyContent :" center",
  }}
  >

<ListItemIcon 
sx = {{
  display : 'flex',
  justifyContent : 'center'
}}
>
  <ShoppingCartIcon/>
</ListItemIcon>

</ListItemButton>
<Divider orientation = "vertical" flexItem />

{/* fvrticon */}

<ListItemButton 
 sx={{justifyContent :" center",
  }}
  >

<ListItemIcon
sx = {{
  display : 'flex',
  justifyContent : 'center'
}}
>
  <FavoriteIcon/>
</ListItemIcon>

</ListItemButton>

<Divider orientation = "vertical" flexItem />
{/* person icon */}

<ListItemButton 
 sx={{justifyContent :" center",
}}
>


<ListItemIcon
sx = {{
  display : 'flex',
  justifyContent : 'center'
}}
>
  <PersonIcon/>
</ListItemIcon>

</ListItemButton>

<Divider orientation = "vertical" flexItem />

<Actions matches={matches} />

</MyList>
</AppbarContainer>


    </div>
  )
}

export default navbarDesktop