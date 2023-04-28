
import styled from '@emotion/styled';
import { Box, Button, CardContent, Collapse, Divider, Typography } from '@mui/material';
import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { style } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
const TopQuestion = () => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <ContBox>
            {/* ---------------------------------------------Question--------------------------------------- */}
            <TopReviews>
                <TopReviewscont>
                    <Typography variant='h2' style={{ width: '100%', fontSize: '16px', fontWeight: '600', padding: '10px' }}>
                        Top Questions
                    </Typography>
                    <TopReviewsinside>
                        <div >
                            <Typography variant='h2' style={{ width: '100%', fontSize: '14px', fontWeight: '600', padding: '10px' }}>
                                Q: how are you
                            </Typography>
                            <Typography variant='h2' 
                            style={{ width: '100%', fontSize: '14px', fontWeight: '600',padding: '10px', paddingTop: '-30px' }}>
                                A: Nice Product
                            </Typography>
                        </div>
                        <div style={{ width: '50%' }}>
                            <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400',marginTop:'12px', color: 'grey' }}>
                                3 years ago
                            </Typography>
                        </div>
                    </TopReviewsinside>
                    
                    <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '600', padding: '10px',color:'grey' }}>
                        see all questions<ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Typography>
                    <Collapse in={expanded} timeout="auto" unmountOnExit
                        style={{ width: '100%' }}>
                        <CardContent style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
                        <TopReviewsinside>
                        <div >
                            <Typography variant='h2' style={{ width: '100%', fontSize: '14px', fontWeight: '600', padding: '10px' }}>
                                Q: how are you
                            </Typography>
                            <Typography variant='h2' 
                            style={{ width: '100%', fontSize: '14px', fontWeight: '600',padding: '10px', paddingTop: '-30px' }}>
                                A: Nice Product
                            </Typography>
                        </div>
                        <div style={{ width: '50%' }}>
                            <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400',marginTop:'12px', color: 'grey' }}>
                                3 years ago
                            </Typography>
                        </div>
                    </TopReviewsinside>
                    <TopReviewsinside>
                        <div >
                            <Typography variant='h2' style={{ width: '100%', fontSize: '14px', fontWeight: '600', padding: '10px' }}>
                                Q: how are you
                            </Typography>
                            <Typography variant='h2' 
                            style={{ width: '100%', fontSize: '14px', fontWeight: '600',padding: '10px', paddingTop: '-30px' }}>
                                A: Nice Product
                            </Typography>
                        </div>
                        <div style={{ width: '50%' }}>
                            <Typography variant='h2' style={{ width: '100%', fontSize: '12px', fontWeight: '400',marginTop:'12px', color: 'grey' }}>
                                3 years ago
                            </Typography>
                        </div>
                    </TopReviewsinside>
                        </CardContent>
                    </Collapse>
                </TopReviewscont>
            </TopReviews>
            {/* ---------------------------------------------Question--------------------------------------- */}
        </ContBox>
    )
}

export default TopQuestion;
