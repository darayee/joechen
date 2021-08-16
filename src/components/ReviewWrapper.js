import quotes from '../img/quotes.jpeg'

const ReviewWrapper= ({reviews}) => {
    return (
        reviews.map((review, index) => {
            
            return <div key={index} className='reviewWrapper'>
                        <div className='reviewLine1'>
                            <img src={quotes} width='10%'></img>
                            <h3 className='reviewTitle'>{review.reviewTitle}</h3>
                        </div>
                        <img className='reviewImg' src = {review.img} width='20%' height='20%'></img>
                        <div className='reviewContent'>{review.reviewContent}</div>
                    </div>
    console.log(reviews);
        })
    )
}

export default ReviewWrapper;

