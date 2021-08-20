import { Link } from 'react-router-dom';

const SchoolDistrict = () => {
    return (
        <div className='schoolDistrictLinks'>
            <Link className='schoolDistrictLink' to='/schooldistrict/2021newjerseytophighschools'>2021 Best Private High Schools in New Jersey</Link><hr></hr>
            <Link className='schoolDistrictLink' to='/schooldistrict/2021newjerseytopkto12schools'>2021 Best Private K-12 Schools in New Jersey</Link><hr></hr>
            <Link className='schoolDistrictLink' to='/schooldistrict/best-high-schools-in-nj'>Best High Schools in New Jersey</Link>
        </div>
    )
}

export default SchoolDistrict;