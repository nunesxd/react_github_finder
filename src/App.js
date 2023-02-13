import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <>
            <div className='container'>
              <h1>Tailwind CSS Text Testing</h1>
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
