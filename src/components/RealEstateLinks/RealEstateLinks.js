import { Link } from 'react-router-dom';

const RealEstateLinks = () => {
    return (<>
        <Link className='realEstateLinks' to='propertytax'>新泽西地税简介</Link>
        <Link className='realEstateLinks' to='why'>为什么选择在新泽西买房</Link>
        <Link className='realEstateLinks' to='process'>新泽西买房的关键步骤</Link>
        <Link className='realEstateLinks' to='realtor'>买房卖房是否要请地产经纪</Link>
        <Link className='realEstateLinks' to='septic'>浅谈septic</Link>

    </>)
}

export default RealEstateLinks;