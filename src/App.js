import classes from './App.module.scss';
import Header from './components/header';
import Listing from './components/listing';
import Filter from './components/filter';
import Footer from './components/footer';
import Data from './components/data.json';
import { useState } from 'react';

function App() {

  const [ card, setCard] = useState(Data)

  const [ range, setRange] = useState(0)

  return (
    <div className={classes.App}>
      <Header />
      <main className={classes.mainContainer}>
        <Filter setRange={setRange} />
        <Listing data={card} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
