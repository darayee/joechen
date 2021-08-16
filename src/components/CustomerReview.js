import construction1 from '../img/construction1.jpeg'
import construction2 from '../img/construction2.jpeg'
import construction3 from '../img/construction3.jpeg'
import construction4 from '../img/construction4.jpeg'
import ReviewWrapper from './ReviewWrapper'



const reviews = [
    {
        img: construction1,
        reviewTitle: 'He managed to handle most of them',
        reviewContent: 'I’m a remote seller and Jason was my seller agent. He’s super helpful all throughout the process, 2 open houses, many property showings, many help on COO inspections and on cleanup the houses in&out.  I had tenants in the house when selling, so there are many difficulties of showing but he managed  to handle most of them. The contractor he recommended was also very nice and helpful.'
    },
    {
        img: construction2,
        reviewTitle: 'Lead us visit houses more than 30 times',
        reviewContent: 'As a patient buyer, I really meet the patient agent to support us to buy the right townhouse at the right time. Our mortgage rate is the lowest in the 2016, also the house is really nice, perfectly within our budget. Thanks a lot for Jason to lead us visit houses more than 30 times, be patient to solve any issues in each stage of the house purchase'
    },
    {
        img: construction3,
        reviewTitle: 'Help and expertise was very useful',
        reviewContent: 'It was my first time selling a house, so Chengwu’s help and expertise was very useful. It was great since he is very knowledgeable, and made selling my house a breeze. His suggestions and advice were extremely appreciated. I will definitely be referring him to friends and family!'
    },
    {
        img: construction4,
        reviewTitle: 'Great negotiation skills',
        reviewContent: 'He’s familiar with local real estate market such that he knows exactly what we want and provided professional suggestion for each house. He showed great negotiation skills to win over benefit for us. No matter when he responds any question as soon as possible. All in all, he’s a trustworthy agent.'
    }

]

const CustomerReview = () => {
    
    return <div className='reviews'>
    {
         <ReviewWrapper reviews={reviews}/>
               
    }
    </div>
    
}

export default CustomerReview;