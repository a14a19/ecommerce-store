import classes from './App.module.scss';
import Header from './components/header';
import Listing from './components/listing';
import Filter from './components/filter';
import Footer from './components/footer';
import Search from './components/search';
import About from './components/about';
import Data from './components/data.json';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const option = {
  all: 'All',
  sm: 'smartphones',
  lp: 'laptops',
  fg: 'fragrances',
  sc: 'skincare',
  gc: 'groceries',
  hd: 'home-decoration'
}

function App() {

  const [card, setCard] = useState(Data)
  const [range, setRange] = useState(2000)
  const [rating, setRating] = useState(5)
  const [select, setSelect] = useState('')

  const selectActive = (e) => {
    console.log(e);
    setSelect(e)
    setCard(Data.filter(data => data.category === e))
  }

  const rangeActive = (e) => {
    setRange(e)
    setCard(Data.filter(data => data.price <= e))
  }

  const ratingActive = (e) => {
    setRating(e)
    setCard(Data.filter(data => data.rating <= e))
  }

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact path='/'
            element={
              <main className={classes.mainContainer}>
                <Filter 
                  range={range} 
                  rating={rating} 
                  option={option} 
                  selectActive={selectActive} 
                  rangeActive={rangeActive} 
                  ratingActive={ratingActive}
                />
                <Listing 
                  data={card} 
                  range={range} 
                  select={select} 
                  rating={rating} 
                  setCard={setCard} 
                />
              </main>
            }
          />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
