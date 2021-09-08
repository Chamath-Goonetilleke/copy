import './App.css';
import {Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Component/Layout/Navbar'
import Footer from './Component/Layout/Footer';
import slideImages from './Component/HomePage/slideImages';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route  path="/"  component={slideImages}/>
      <Footer/>
    </div>
  );
}

export default App;
