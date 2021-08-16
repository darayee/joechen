import RealEstateLink1 from './RealEstateLinks/RealEstateLink1';
import RealEstateLink2 from './RealEstateLinks/RealEstateLink2';
import RealEstateLink3 from './RealEstateLinks/RealEstateLink3';
import RealEstateLink4 from './RealEstateLinks/RealEstateLink4';
import RealEstateLink5 from './RealEstateLinks/RealEstateLink5';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RealEstateLinks from './RealEstateLinks/RealEstateLinks';

const RealEstate = () => {
    return (<>
        
        <BrowserRouter>
            <RealEstateLinks/>
            <Switch>
            <Route path='/realestate/propertytax' component={RealEstateLink1} exact></Route>
            <Route path='/realestate/why' component={RealEstateLink2}></Route>
            <Route path='/realestate/process' component={RealEstateLink3}></Route>
            <Route path='/realestate/realtor' component={RealEstateLink4}></Route>
            <Route path='/realestate/septic' component={RealEstateLink5}></Route>
            </Switch>
        </BrowserRouter>
    </>)
}

export default RealEstate;