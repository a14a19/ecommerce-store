import classes from './App.module.scss';
import Header from './components/header';
import Listing from './components/listing';
import Filter from './components/filter';
import Footer from './components/footer';
import Data from './components/data.json';
import { useState } from 'react';

function App() {

  const [ card, setCard] = useState(Data)

  const [ range, setRange] = useState(2000)

  const [ rating, setRating] = useState(5)

  const [ search, setSearch] = useState('')

  return (
    <div className={classes.App}>
      <Header setSearch={setSearch}/>
      <main className={classes.mainContainer}>
        <Filter setRange={setRange} range={range} setRating={setRating} rating={rating}/>
        <Listing data={card} range={range} search={search} rating={rating}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
