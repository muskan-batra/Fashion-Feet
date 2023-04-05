import {Routes , Route} from 'react-router-dom'
import './App.css';
import { Container, Button } from '@mui/material/';
import {ThemeProvider} from '@mui/material/';
import theme from './theme'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Promotions from './Components/promotions';
function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
    <Container 
    maxWidth = "xl"
    sx={{background : "#fff"}}>
      {/* <Button variant='contained'>
        Test
      </Button> */}
      
    </Container>
    
    </ThemeProvider>
    < Navbar />
    <Banner />
    < Promotions/>
    </>



    // <Routes>

    // <Route path="/" element={<Home />} />
    // <Route path="/menu" element={<Menu />} />
    // <Route path="/about" element={<About />} />
    // <Route path="/contact" element={<Contact />} />
    // </Routes>
    
  );
}

export default App;
