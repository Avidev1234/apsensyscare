import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import CarouselCard from "./CarouselCard";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

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
const products = [
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

  return (
    <Homecont width={'100%'}>
      <Box padding={'20px'} width={'93%'}>
        <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '600', color: 'black' }}>Popular Products</Typography>
      </Box>
      <CarouselCont>
        <Slider className= "center"
        centerMode= {true}
        infinite= {true}
        centerPadding= "5px"
        slidesToShow= {2}
        speed= {500}
        rows= {2}
        slidesPerRow= {2}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        >
        {
          products.map((val, i) => {
            try {
              return (
                <Stack  style={{ width: '250px',display:'flex',gap:'5px' }} key={i.toString()}>
                  <CarouselCard val={val} style={{margin:'0px 10px'}}/>
                </Stack>
              )

            } catch (err) {
              console.log(err)
            }
          })
        }
      </Slider>
    </CarouselCont>
    </Homecont >
  )
}

export default PopularCarousel;
