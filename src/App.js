import './App.scss';
import personalImg from './img/personal-img.jpeg';
import weichert from './img/weichert.jpeg';
import businessCard from './img/business-card.jpeg'
import ReactDOM from "react-dom";
import Item from "./components/Item";
import React, { useState } from "react";


function App() {
  const [items, setItems] = useState()

  return (
    <div className='body'>
      <div className='header'>
          Joe Chen 新泽西地产经纪人
          M: 862-221-8627
      </div>
      <div className="top-wrap">
        <div className='nav-bar'>
          <div className='nav-item'>首页</div>
          <div className='nav-item'>客户评价</div>
          <div className='nav-item'>房产文章</div>
          <div className='nav-item'>学区分析</div>
        </div>
      </div>
      <div className='personal-description'>
        <div className='personal-left'>
          <img className='personal-img' src={personalImg} alt='Joe Chen Phone: 8622218627'></img>
          <p>Joe Chen</p>
          <p>手机：862-221-8627</p>
          <p>电邮：josephchenbusiness@gmail.com</p>
          <p>办公地址：310 Main St, Fort Lee, NJ 07024</p>
        </div>
        <div className='personal-right'>
          <p>
            Joe 是美国顶级房地产公司 Weichert 的一名全职经纪人，连续三年被新泽西房地产经纪人协会评为杰出经纪人金奖（Circle of Execellence Awards Gold Level)，覆盖新泽西中北部高端住宅地区。Weichert 是美国最大、发展最快、也是最值得信赖的房地产公司。
          </p>
          <p>
            除了房地产买卖之外，作为专职房产经纪的 Joe 每周都实地考察（Preview）几乎所有本地的新上市房产，对于每个房子的住宅结构框架、屋顶、电力、水暖、橱柜、园林等均心中有数，在最短的时间内为您提供最明智、有效的选择，为您看房、买房节约大量的精力。
          </p>
          <p>
            除了房地产买卖之外，作为专职房产经纪的 Joe 每周都实地考察（Preview）几乎所有本地的新上市房产，对于每个房子的住宅结构框架、屋顶、电力、水暖、橱柜、园林等均心中有数，在最短的时间内为您提供最明智、有效的选择，为您看房、买房节约大量的精力。
          </p>
          <p>
            除了房地产买卖之外，作为专职房产经纪的 Joe 每周都实地考察（Preview）几乎所有本地的新上市房产，对于每个房子的住宅结构框架、屋顶、电力、水暖、橱柜、园林等均心中有数，在最短的时间内为您提供最明智、有效的选择，为您看房、买房节约大量的精力。
          </p>
          <p>
            除了房地产买卖之外，作为专职房产经纪的 Joe 每周都实地考察（Preview）几乎所有本地的新上市房产，对于每个房子的住宅结构框架、屋顶、电力、水暖、橱柜、园林等均心中有数，在最短的时间内为您提供最明智、有效的选择，为您看房、买房节约大量的精力。
          </p>
          <p>
            除了房地产买卖之外，作为专职房产经纪的 Joe 每周都实地考察（Preview）几乎所有本地的新上市房产，对于每个房子的住宅结构框架、屋顶、电力、水暖、橱柜、园林等均心中有数，在最短的时间内为您提供最明智、有效的选择，为您看房、买房节约大量的精力。
          </p>
        </div>
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Item items={[

        ]} />
      </div>    
      <div className='businessCards'>
        <img src={weichert}></img>
        <img src={businessCard}></img>
      </div>
      <div className='footer'>
        买房，卖房，装修找Joe Chen - (862)221-8627 - 微信 joechen8627
      </div>
   
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App