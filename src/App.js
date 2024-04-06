
import './App.css';
import Accordian from "./components/accordian";
import RandomColor from "./components/random_color";
import starRating from './components/star_rating'

function App() {
  return (
    <div className="App">
      {/* accordion component */}
      { /*<Accordian/> */ }

      {/* random color compoenent */}

      {/* <RandomColor/> */}

      {/* star rating component */}

      <starRating numOfStar={10} />


    </div>
  );
}

export default App;
