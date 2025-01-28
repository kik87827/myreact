
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CodingList from './routes/CodingList';
import ComponentGuide from './routes/ComponentGuide';
import About from './routes/About';
import Work from './routes/Work';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="middle-wrap">
          <Routes>
            <Route path="/" element={<div>메인</div>} />
            <Route path="/codinglist" element={<CodingList />} />
            <Route path="/component" element={<ComponentGuide />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
