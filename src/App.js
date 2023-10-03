import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import PropertyPage from './components/PropertyPage';


function App() {
  return (

    <Router>
      <div className="container bg-slate-200">
        <div className="container align-center py-7">
          <h2 className="text-center font-semibold text-5xl" style={{ margin: '20px 0px', marginTop: '30px' }}> Featured Listed Property</h2>
          <h6 className="text-center font-semibold text-1xl" style={{ margin: '0px 20px', marginTop: '20px' }}>Lorem, Libero doloremque, quae expedita nobis numquam accusantium. Corporis?</h6>
        </div>
        <Navbar category="paris"/>
        <Routes>
          <Route path="/" element={<Card category="paris"/>} />
          <Route path="/property/:id" element={<PropertyPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
