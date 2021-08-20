import { Link } from 'react-router-dom';

const Header = () => {
    return (<>
      <div className='header' >
          Joe Chen 新泽西地产经纪人
          M: 862-221-8627
      </div>
      <div className="top-wrap">
        <div className='nav-bar'>
          <Link className='nav-item' to='/'>首页</Link>
          <Link className='nav-item' to='/customerreview'>客户评价</Link>
          <Link className='nav-item' to='/realestate'>房产文章</Link>
          <Link className='nav-item' to='/schooldistrict'>学区分析</Link>
          <Link className='nav-item' to='/about'>关于我们</Link>
        </div>
      </div>
    </>)
}

export default Header; 