import './App.scss';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomerReview from './components/CustomerReview';
import Home from './components/Home';
import RealEstate from './components/RealEstate';
import SchoolDistrict from './components/SchoolDistrict';
import Footer from './components/Footer';
import Header from './components/Header'
import SimpleMap from './components/SimpleMap'


function App() {
  
  return (
    <div className='body'>

      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/customerreview' component={CustomerReview}></Route>
          <Route path='/realestate' component={RealEstate}></Route>
          <Route path='/schooldistrict' component={SchoolDistrict}></Route>
          <Route path='/about' component={SimpleMap}></Route>
        </Switch>
      </BrowserRouter>
    
      <Footer></Footer>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App
