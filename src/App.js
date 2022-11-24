import classes from './App.module.scss';
import Header from './components/header';
import Listing from './components/listing';
import Filter from './components/filter';
import Footer from './components/footer';
import Search from './components/search';
import Data from './components/data.json';

import About from './pages/about';
import Wishlist from './pages/wishlist';
import PageNotFound from './pages/PageNotFound';

import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const option = {
  sm: 'smartphones',
  lp: 'laptops',
  fg: 'fragrances',
  sc: 'skincare',
  gc: 'groceries',
  hd: 'home-decoration'
}

function App() {

  const [card, setCard] = useState(Data)
  const [change, setChange] = useState({ price: 2000, rating: 5, category: 'Products'})

  useEffect(() => {
      setCard(Data)
  }, [])
  
  const changeActive = (e) => {
    setChange(e)
    setCard(Data.filter((data) => data.category === e.category && data.price <= e.price && data.rating <= e.rating))
  }

  const searchResult = (e) => {
    console.log(e);
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
                  option={option} 
                  change={change}
                  setChange={setChange}
                  changeActive={changeActive}
                />
                <Listing data={card} change={change}/>
              </main>
            }
          />
          <Route exact path='/search' element={<Search searchResult={searchResult}/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/wishlist' element={<Wishlist />} />
          <Route exact path='*' element={< PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
