import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import CarouselCard from "./CarouselCard";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Skeleton from '@mui/material/Skeleton';

const CarouselCont = styled(Box)`
  width:85%;
  height:auto;
  padding:35px;
`
const Homecont = styled(Stack)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:10px;
`
const products1 = [
  {
    name: '1',
  },
  {
    name: '2',
  },
  {
    name: '3',
  },
  {
    name: '4',
  },
  {
    name: '5',
  },
  {
    name: '6',
  },
  {
    name: '7',
  },
  {
    name: '8',
  },
  {
    name: '9',
  },
  {
    name: '10',
  },
  {
    name: '11',
  },
  {
    name: '12',
  }
];

const skeletonloading = [1,2,3,4,5,6,7,8];

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const PopularCarousel = () => {
  const Products = useSelector((state) => state.product);
  const { product } = Products.products;
  return (
    <Homecont width={'100%'}>
      <Box padding={'20px'} width={'93%'}>
        <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '600', color: 'black' }}>Popular Products</Typography>
      </Box>
      <CarouselCont>
        <Slider className="center"
          centerMode={true}
          infinite={true}
          centerPadding="5px"
          slidesToShow={2}
          speed={500}
          rows={2}
          slidesPerRow={2}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          {Products.loading && skeletonloading.map((items) => {return(<Skeleton variant="rounded" animation="wave" width={232} height={270} />)})}
          {!Products.loading && Products.error ? <div>Error: {Products.error}</div> : null}
          {!Products.loading && Products.products.product !== undefined ? (
            product.map((val, i) => {
              return (
                <Stack style={{ width: '250px', display: 'flex', gap: '5px' }} key={i.toString()}>
                  <CarouselCard val={val} style={{ margin: '0px 10px' }} />
                </Stack>
              )
            })
          ) : null}
        </Slider>
      </CarouselCont>
    </Homecont>
  )
}

export default PopularCarousel;
