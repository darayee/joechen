import { Link } from 'react-router-dom';

const RealEstateLinks = () => {
    return (
        <div className='realEstateLinks'>
            <Link className='realEstateLink' to='/realestate/propertytax'>新泽西地税简介</Link><hr></hr>
            <Link className='realEstateLink' to='/realestate/why'>为什么选择在新泽西买房</Link><hr></hr>
            <Link className='realEstateLink' to='/realestate/process'>新泽西买房的关键步骤</Link><hr></hr>
            <Link className='realEstateLink' to='/realestate/realtor'>买房卖房是否要请地产经纪</Link><hr></hr>
            <Link className='realEstateLink' to='/realestate/septic'>浅谈septic</Link>
        </div>
        
    )
}

export default RealEstateLinks;