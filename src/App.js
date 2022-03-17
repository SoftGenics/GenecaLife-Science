import NavbarMenu from "./Components/NavbarMenu/NavbarMenu";
import Whatsapp from "./Components/WhatsApp/Whatsapp";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import ScrollToTop from './Components/ScrollToTop'
import Faq from './Components/Faq/FAQ-ANS'
import OilSeeds from "./Components/Pages/OilSeeds";
import HerbsAndSpices from "./Components/Pages/HerbsAndSpices";
import MedicinalPlants from "./Components/Pages/MedicinalPlants";
import AgroSeeds from "./Components/Pages/AgroSeeds";
import GingerGarlic from "./Components/Pages/GingerGarlic";
import HoneyJaggerySugar from "./Components/Pages/HoneyJaggerySugar";
import FoodProducts from "./Components/Pages/FoodProducts";
import Flour from "./Components/Pages/Flour";
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavbarMenu />
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/oil-seeds" element={<OilSeeds />} />
      <Route path="/Herbs-and-seeds" element={<HerbsAndSpices />}/>
      <Route path="/Medicinal-plants-and-herbs" element={<MedicinalPlants />}/>
      <Route path="/Agro-Seeeds" element={<AgroSeeds />}/>
      <Route path="/Ginger-Garlic" element={<GingerGarlic />}/>
      <Route path="/Honey-Jaggery-Sugar-Product" element={<HoneyJaggerySugar />}/>
      <Route path="/Food-Products" element={<FoodProducts />}/>
      <Route path="/Flour" element={<Flour />}/>
    </Routes>
  </BrowserRouter>,
  <Whatsapp />
    </div>
  );
}

export default App;
