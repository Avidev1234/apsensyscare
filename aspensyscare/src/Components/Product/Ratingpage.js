import styled from '@emotion/styled';
import { Box, Button, CardContent, Collapse, Divider, Typography, Modal } from '@mui/material';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { style } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik'

const stylemod = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: 350,
  bgcolor: 'background.paper',
  // borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

const Rattingcont = styled(Box)`
    color:#916fda;
    font-size:50px;
    border-radius:3px;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    margin-left:15px;
    @media (max-width: 768px) {
    flex-direction:column;
    gap:0px;
};
`
const ContBox = styled(Box)`
  width:100%;
  height:auto;
`
const RatingBox = styled(Box)`
  width:31%;
  height:auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width:100%;
};
`
const RatingButton = styled(Button)(() => (
  {
    textTransform: 'none',
    fontSize: '12px',
    backgroundColor: '#916fda',
    color: 'white',
    fontWeight: '600',
    marginRight: '10px',
    padding: '0.5rem 2.5rem',
    '&:hover': {
      backgroundColor: '#916fda',
    }
  }
))
const TopReviews = styled(Box)`

width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
${'' /* background-color:red; */}
`
const TopReviewscont = styled(Box)`
width:70%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
${'' /* background-color:green; */}
`
const TopReviewsinside = styled(Box)`
width:85%;
display:flex;
flex-direction:row;
border-bottom:1px solid rgba(0, 0, 0, 0.12);
${'' /* background-color:yellow; */}
`
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',

}));

const Ratingpage = () => {
  const [openmodRev, setOpenRev] = React.useState(false);
  const handleOpenmodRev = () => setOpenRev(true);
  const handleClosemodRev = () => {setOpenRev(false)};

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formik = useFormik({
  initialValues: {
    userReview: ''
  },
  onSubmit: values => {
    console.log(values);
    console.log(ratingvalue);
    handleClosemodRev();
  },
  validate: values => {
    let errors = {}
    if(!values.userReview) {
      errors.userReview = 'Review cannot be empty!'
    }
    return errors;
  },
})

const [ratingvalue, ratingsetValue] = React.useState(0);

  return (
    <ContBox>
      <Box style={{ width: '100%', marginTop: '55px', borderBottom: '2px solid #f4dee1' }}>
        <Typography variant='h2' style={{ fontSize: '20px', fontWeight: '600', padding: '10px' }}>
          Rating & Reviews
        </Typography>
      </Box>
      <Rattingcont>
        {/* ratting */}
        <RatingBox>
          <Typography variant='h2' style={{ fontSize: '50px' }}>4<StarIcon style={{ fontSize: '30px' }} /></Typography>
          <Typography variant='subtitle2'>760 Rating & 162 Reviews</Typography>
        </RatingBox>
        {/* stars */}
        <RatingBox>
          <div>
            <Rating name="read-only" value={ratingvalue} readOnly />
          </div>
          <Typography variant='subtitle2'>Your ratings</Typography>

        </RatingBox>
        {/* rating button */}
        <RatingBox>
          <div>
            <RatingButton onClick={handleOpenmodRev}>Write a Review</RatingButton>
            {/* <RatingButton>Ask a question</RatingButton> */}

            <Modal
              open={openmodRev}
              onClose={handleClosemodRev}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={stylemod}>
                <div style={{display: 'flex' , justifyContent: 'space-between' , alignItems: 'center'}}>
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold' , fontSize: '1.7rem' }}>
                    Rate and Review this Product
                  </Typography>
                  <CloseIcon fontSize="medium" onClick={handleClosemodRev} style={{ cursor: 'pointer' }}/>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ display:'flex' , alignItems: 'center' , justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex' , flexDirection: 'column' , alignItems: 'center' }}>
                      <Typography style={{ display: 'flex' , alignItems: 'center'}}>
                        <p style={{fontSize: '3.5rem', fontWeight: 'semibold' , lineHeight: 0, color: 'rgb(41,41,41)' }}>{ratingvalue}</p>
                        <StarIcon style={{ fontSize: '60px' , color:'rgb(145,111,218)' }} />
                      </Typography>
                      <Box
                          sx={{
                            '& > legend': { mt: 2 },
                          }}
                        >
                      <Rating
                          name="simple-controlled"
                          value={ratingvalue}
                          onChange={(event, newValue) => {
                            ratingsetValue(newValue);
                          }}
                        />
                        </Box>
                      <p style={{ opacity: 0.6 , color:'grey' , marginTop: '7px' }}>Rate the product here</p>
                  </div>
                  <TextareaAutosize
                    name='userReview'
                    onChange={formik.handleChange}
                    value={formik.values.userReview}
                    aria-label="empty textarea"
                    placeholder="Your valuble Review here"
                    style={{ width: 700 ,  height: 185 , resize: 'none' , maxlength: 300 , fontSize: '1rem' , padding: '1rem' , border: '1px solid #916FDA' , outline: 'none'}}
                  />
                  </Typography>
                  {formik.errors.userReview ? <div style={{ color: 'red' , position: 'absolute' , fontStyle: 'italic' }}>{formik.errors.userReview}</div> : null}
                  <RatingButton type='submit' style={{ right: '-59.8rem' , padding: '0.5rem 4rem' , fontSize: '0.8rem'}}>Submit</RatingButton>
                </form>
              </Box>
            </Modal>
          </div>
        </RatingBox>
      </Rattingcont>
      <Divider />
      {/* ---------------------------------------------reviews--------------------------------------- */}
      <TopReviews>
        <TopReviewscont>
          <Typography variant='h2' style={{ width: '100%', fontSize: '16px', fontWeight: '600', padding: '10px' }}>
            Top Reviews
          </Typography>
          <TopReviewsinside>
            <div style={{ width: '50%' }}>
              <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '10px' }}>
                Tarun
              </Typography>
              <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '-20px', color: 'grey' }}>
                3 years ago
              </Typography>
            </div>
            <div style={{ width: '50%' }}>
              <Typography variant='h2' style={{ width: '100%', height: '30px', overflow: 'hidden', fontSize: '14px', fontWeight: '600', padding: '10px' }}>
                Nice Product
              </Typography>
            </div>
          </TopReviewsinside>
          <hr class="MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />
          <TopReviewsinside>
            <div style={{ width: '50%' }}>
              <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '10px' }}>
                Tarun
              </Typography>
              <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '-20px', color: 'grey' }}>
                3 years ago
              </Typography>
            </div>
            <div style={{ width: '50%' }}>
              <Typography variant='h2' style={{ width: '100%', height: '30px', overflow: 'hidden', fontSize: '14px', fontWeight: '600', padding: '10px' }}>
                Nice Product
              </Typography>
            </div>
          </TopReviewsinside>
          <hr class="MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />
          <TopReviewsinside>
            <div style={{ width: '50%' }}>
              <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '10px' }}>
                Tarun
              </Typography>
              <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '-20px', color: 'grey' }}>
                3 years ago
              </Typography>
            </div>
            <div style={{ width: '50%' }}>
              <Typography variant='h2' style={{ width: '100%', height: '30px', overflow: 'hidden', fontSize: '14px', fontWeight: '600', padding: '10px' }}>
                Nice Productfgdhg ghd kdfghd kgh dfghkdfgk kdfghdfdf
                Nice Productfgdhg ghd kdfghd kgh dfghkdfgk kdfghdfdf
                Nice Productfgdhg ghd kdfghd kgh dfghkdfgk kdfghdfdf
                Nice Productfgdhg ghd kdfghd kgh dfghkdfgk kdfghdfdf
              </Typography>
            </div>
          </TopReviewsinside>
          <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '600', padding: '10px',color:'grey' }}>
            see all reviews<ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit 
          style={{width:'100%'}}>
            <CardContent style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:0}}>
              <TopReviewsinside>
                <div style={{ width: '50%' }}>
                  <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '10px' }}>
                    Tarun
                  </Typography>
                  <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '-20px', color: 'grey' }}>
                    3 years ago
                  </Typography>
                </div>
                <div style={{ width: '50%' }}>
                  <Typography variant='h2' style={{ width: '100%', height: '30px', overflow: 'hidden', fontSize: '14px', fontWeight: '600', padding: '10px' }}>
                    Nice Product
                  </Typography>
                </div>
              </TopReviewsinside>
              <TopReviewsinside>
                <div style={{ width: '50%' }}>
                  <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '10px' }}>
                    Tarun
                  </Typography>
                  <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400', padding: '-20px', color: 'grey' }}>
                    3 years ago
                  </Typography>
                </div>
                <div style={{ width: '50%' }}>
                  <Typography variant='h2' style={{ width: '100%', height: '30px', overflow: 'hidden', fontSize: '14px', fontWeight: '600', padding: '10px' }}>
                    Nice Product
                  </Typography>
                </div>
              </TopReviewsinside>
            </CardContent>
          </Collapse>
        </TopReviewscont>
      </TopReviews>
      <Divider />
      {/* ---------------------------------------------reviews--------------------------------------- */}
    </ContBox>
  )
}

export default Ratingpage;
