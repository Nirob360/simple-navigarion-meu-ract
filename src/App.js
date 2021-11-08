import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/page/About';
import Contact from './components/page/Contact';
import Home from './components/page/Home';
import Service from './components/page/Service';
import Shop from './components/page/Shop';
import GlobalStyle from './Global.style';

function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
