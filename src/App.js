
import './App.css';
import Accordian from "./components/accordian";
import RandomColor from "./components/random_color";
import StarRating from './components/star_rating'
import ImageSlider from './components/image_slider';
import QRCode from './components/qr_code_generator';
import LightDarkMode from './components/light_dark_mode';

function App() {
  return (
    <div className="App">
      {/* accordion component */}
      { /*<Accordian/> */ }

      {/* random color compoenent */}

      {/* <RandomColor/> */}

      {/* star rating component */}

      {/* <StarRating numOfStar={10} /> */}

      {/* image slider component */}

      { /*<ImageSlider url ={} page={'1'}/>*/}
      {/* QR code generator */}

      {/* <QRCode/> */}

      <LightDarkMode/>



    </div>
  );
}

export default App;
