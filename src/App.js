import classes from './App.module.scss';
import Header from './components/header';
import Listing from './components/listing';
import Filter from './components/filter';
import Footer from './components/footer';
import Data from './components/data.json';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <main className={classes.mainContainer}>
        <Filter />
        <Listing data={Data}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
