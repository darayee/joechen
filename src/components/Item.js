import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Item = ({
  imgs
}) => {
  return <Carousel breakPoints={breakPoints}>
    {
      imgs.map((img, idx) => {
        return <img key={idx} src={img.src} alt="Chen's Constrctuon" height={250}/>
      })
    }
  </Carousel>
}

export default Item
