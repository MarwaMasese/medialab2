import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Form from './pages/Form/Form'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
             <Route 
              path="/about" 
              element={<About/>}
            />
            <Route 
              path="/create" 
              element={<Form/>}
            />
            <Route 
              path="/service" 
              element={<Services/>}
            />
            <Route 
              path="/contact" 
              element={<Contact/>}
            />
            <Route 
              path="/testimonial" 
              element={<Testimonial/>}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

