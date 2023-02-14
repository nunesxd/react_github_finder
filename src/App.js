import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';


function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />

          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/notfound' element={<NotFound />} />
              <Route exact path='/*' element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
