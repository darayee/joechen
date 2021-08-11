import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Item = ({
  items
}) => {
  return <Carousel breakPoints={breakPoints}>
    <img src={'%PUBLIC_URL%/img/construction1.jpeg'} alt="Chen's Constrctuon"></img>
    <img src={'./img/construction2.jpeg'} alt="Chen's Constrctuon"></img>
    
  </Carousel>
}

export default Item
