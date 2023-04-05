import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {BannerShopButton, BannerContainer, BannerImage, BannerTitle, BannerDescription , BannerContent } from "../../styles/banner";
import { Typography} from "@mui/material";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
  
    return (
      <BannerContainer >
        <BannerImage src="/images/banner/banner.png" />
        <BannerContent>
          <Typography variant="h6">Huge Collection</Typography>
          <BannerTitle variant="h2">
            New FootWear
          </BannerTitle>
  
          <BannerDescription variant="subtitle">
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
            tempor incididunt ut labore et dolore magna
          </BannerDescription>
  
          <BannerShopButton color="primary">Shop Now</BannerShopButton>
        </BannerContent>
      </BannerContainer>
    );
  }