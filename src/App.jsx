import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginScreen from "./pages/login/Login"
import RegisterScreen from './pages/register/Register';
import HomeScreen from './pages/home/Home';
import WellcomeScreen from './pages/home/Welcome';

function App() {
  return(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/wellcome" element={<WellcomeScreen />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
