import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions"
import { IconButton } from "@mui/material";


export default function NavbarMobile({ matches }) {

  return (
    <AppbarContainer>
      <IconButton >
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        Fashion Feet
      </AppbarHeader>
      <IconButton >
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}