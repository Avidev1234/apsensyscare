import { alpha, styled } from '@mui/material/styles';
import { Box, Button, InputBase,  Typography } from '@mui/material'
import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

const Detailscont = styled(Box)`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    gap:5px;
`
const Rattingcont = styled(Box)`
    width:30px;
    height:18px;
    background-color:green;
    color:white;;
    font-size:12px;
    border-radius:3px;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:center;
    align-items:center;
`
const ButtomBox = styled(Box)`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    gap:10px;
    align-items:center;
    margin-top:5px;
    position:relative;
    height:40px
`
const AddCart = styled(Button)(() => ({
    backgroundColor: 'green',
    '&:hover': {
        backgroundColor: 'green'
    }
}))

const QuickBuy = styled(Button)(() => ({
    backgroundColor: 'orange',
    '&:hover': {
        backgroundColor: 'orange',
    }
}))

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: 'grey',
        },
    },
}));
const ProductDetails = (product) => {
    console.log(product)
    const [val, setVal] = useState(1);
    const handelvalue = (str) => {
        // console.log(str)
        const replaced = str.match(/\d+/);
        if (replaced !== '') {
            setVal(replaced[0]);
        }
    }
    const portal={
        position: 'absolute',
        marginRight:'15px',
        height:'500px',
        width:'500px',
        zIndex:9,
        display:product.magnified?'block':'none',
        backgroundColor:'white'
    }
    return (
        <Detailscont>
            <div
                id="portal"
                style={portal}
            />
            <div>
                <Typography variant='h3' style={{ fontSize: '18px', fontWeight: '700', marginTop: '8px' }}>{product.products.name.replace(/-/g, ' ').toUpperCase()}</Typography>
                <Typography variant='subtitle2' style={{ fontSize: '12px', fontWeight: '500', color: 'gray' }}>
                    Product category:Skin care</Typography>
            </div>
            <Rattingcont>
                4<StarIcon style={{ fontSize: '12px' }} />
            </Rattingcont>
            <div>
                <Typography variant='subtitle2' style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                </Typography>
            </div>
            <div>
                <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '700', marginTop: '8px' }}>
                    <CurrencyRupeeIcon style={{ fontSize: '20px' }} />{product.products.price}.00
                    <Typography variant='subtitle2' style={{ fontSize: '10px', fontWeight: '500', color: 'gray', marginTop: '-3px' }}>
                        Inclusive of all Taxes
                    </Typography>
                </Typography>
            </div>
            <ButtomBox>
                <Button variant='contained' style={{backgroundColor:'green',textTransform: 'none'}}>50ml</Button>
            </ButtomBox>
            <ButtomBox>
                <RemoveCircleRoundedIcon style={{ fontSize: '18px', }} />
                <input
                    type="text"
                    value={val}
                    onChange={(e) => handelvalue(e.target.value)}
                    style={{ width: '60px', height: '25px', border: '2px solid black', display: 'flex', textAlign: 'center', borderRadius: '3px' }} />
                <AddCircleRoundedIcon style={{ fontSize: '18px', }} />
            </ButtomBox>
            <ButtomBox>
                <BootstrapInput size="small"
                    placeholder="Please pincode"
                    onChange={(e) => { console.log(e.target.value) }}
                    style={{ width: '135px' }}
                />
                <Button variant='contained' style={{ backgroundColor: 'green' }}>Check</Button>
            </ButtomBox>
            <ButtomBox>
                <AddCart variant='contained' >Add Cart</AddCart>
                <QuickBuy variant='contained' >Quick Buy</QuickBuy>
            </ButtomBox>
        </Detailscont>
    )
}

export default ProductDetails