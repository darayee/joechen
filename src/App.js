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
import RealEstateLink1 from './components/RealEstateLinks/RealEstateLink1';
import RealEstateLink2 from './components/RealEstateLinks/RealEstateLink2';
import RealEstateLink3 from './components/RealEstateLinks/RealEstateLink3';
import RealEstateLink4 from './components/RealEstateLinks/RealEstateLink4';
import RealEstateLink5 from './components/RealEstateLinks/RealEstateLink5';
import SchoolDistrictLink1 from './components/SchoolDistrictLinks/SchoolDistrictLink1';
import SchoolDistrictLink2 from './components/SchoolDistrictLinks/SchoolDistrictLink2';
import SchoolDistrictLink3 from './components/SchoolDistrictLinks/SchoolDistrictLink3';


function App() {
  
  return (
    <div className='body'>

      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/customerreview' component={CustomerReview} exact></Route>
          <Route path='/realestate' component={RealEstate} exact></Route>
          <Route path='/schooldistrict' component={SchoolDistrict} exact></Route>
          <Route path='/about' component={SimpleMap} exact></Route>
          <Route path='/realestate/propertytax' component={RealEstateLink1} exact></Route>
          <Route path='/realestate/why' component={RealEstateLink2} exact></Route>
          <Route path='/realestate/process' component={RealEstateLink3}></Route>
          <Route path='/realestate/realtor' component={RealEstateLink4}></Route>
          <Route path='/realestate/septic' component={RealEstateLink5}></Route>
          <Route path='/schooldistrict/2021newjerseytophighschools' component={SchoolDistrictLink1} exact></Route>
          <Route path='/schooldistrict/2021newjerseytopkto12schools' component={SchoolDistrictLink2} exact></Route>
          <Route path='/schooldistrict/best-high-schools-in-nj' component={SchoolDistrictLink3} exact></Route>
        </Switch>
      </BrowserRouter>
    
      <Footer></Footer>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App
