import React, { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';




function App() {

  const [images, setImages] = React.useState({
    icons: {},
    slides: []
  })
  const [filters, setFilters] = React.useState({})

  const {
    icons,
    slides
  } = images

  React.useEffect(() => {
    const getStates = async () => {
      const { data: [{ icons, slides }] } = await axios.get('http://localhost:9000/images')
      setImages({
        icons: icons,
        slides: slides
      })
      const { data: [{ filters }] } = await axios.get('http://localhost:9000/filters')
      setFilters(filters)
    }


    getStates()

  }, [])


  return (
    <BrowserRouter>
      <div className='App'>
        <Header
          icons={icons}
        />
        <MainPage
          slides={slides}
          filters={filters}
        />

        <Footer
          icons={icons}
        />
      </div>


    </BrowserRouter>

  );
}

export default App;
