import construction1 from '../img/construction1.jpeg'
import construction2 from '../img/construction2.jpeg'
import construction3 from '../img/construction3.jpeg'
import construction4 from '../img/construction4.jpeg'
import construction5 from '../img/construction5.jpeg'
import construction6 from '../img/construction6.jpeg'
import construction7 from '../img/construction7.jpeg'
import construction8 from '../img/construction8.jpeg'
import weichert from '../img/weichert.jpeg';
import businessCard from '../img/business-card.jpeg'
import Item from "./Item";


const imgs = [
    {
      src : construction1
    },
    {
      src:  construction2
    },
    {
      src:  construction3
    },
    {
      src:  construction4
    },
    {
      src:  construction5
    },
    {
      src:  construction6
    },
    {
      src:  construction7
    },
    {
      src:  construction8
    }
  ]

const Footer = () => {
    return(
        <>
        <hr className="seperator" />
        <div className="carousel-wrapper">
            <Item imgs={imgs} />
        </div>    
        <div className='businessCards'>
            <img src={weichert}></img>
            <img src={businessCard}></img>
        </div>
        <div className='footer'>
            买房，卖房，装修找Joe Chen - (862)221-8627 - 微信 joechen8627
        </div>          
        </>
    )
}

export default Footer;