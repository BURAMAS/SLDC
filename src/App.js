import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BookPage from './pages/BookPage';
import BookPageCommercial from  './pages/BookPageCommercial'
import Gallery from './pages/GalleryPage'
import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='/contact-us' element={<ContactPage/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/book-now' element={<BookPage/>}/>
        <Route path='/commercial' element={<BookPageCommercial/>}/>


        </Routes>
      </Router>

    </div>
    </ThemeProvider>
  );
}

export default App;
