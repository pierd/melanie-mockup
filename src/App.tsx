import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Home from './pages/Home';
import Yoga from './pages/Yoga';
import Massage from './pages/Massage';
import Midwifery from './pages/Midwifery';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-off-white, #FAFAFA);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: var(--text-tertiary);
  color: white;
  margin-top: 4rem;
`;

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <ThemeToggle />
        <Router basename="/melanie-mockup">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/massage" element={<Massage />} />
            <Route path="/midwifery" element={<Midwifery />} />
          </Routes>
        </Router>
        <Footer>
          <p>&copy; {new Date().getFullYear()} Melanie's Wellness Services. All rights reserved.</p>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
