import { alpha, styled } from '@mui/material/styles';
import { Box, Button, InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { useSelector } from "react-redux";


const stylemodal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SizeButtom = styled(Button)`
  line-height: 1.5;
  letter-spacing: 0.02857em; .
  text-transform: uppercase;
  background-color: green;
  padding: 6px 6px;
  min-width: 50px;
  font-size: 12px;
`
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart } from '../../Store/Slices/cartSlice';
import axios from 'axios';

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
    //console.log(product)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [val, setVal] = useState(1);
    const handelvalue = (str) => {
        // console.log(str)
        const replaced = str.match(/\d+/);
        if (replaced !== '') {
            setVal(replaced[0]);
        }
    }
    const portal = {
        position: 'absolute',
        marginRight: '15px',
        height: '500px',
        width: '500px',
        zIndex: 9,
        display: product.magnified ? 'block' : 'none',
        backgroundColor: 'white'
    }


    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);

    // destructure all data
    const { details } = products.productdetails;
    const { size } = sizedetails.sizes;

    const itemIndex = details !== undefined ? details.findIndex((item) => item.product_id === product.products.id) : 'null';
    let itemsize = '';

    if (itemIndex !== -1 && details !== undefined) {
        const sizeid = details[itemIndex]['size_id'];
        const sizeindex = size !== undefined ? size.findIndex((item) => item.id === sizeid) : 'null';
        itemsize = size !== undefined ? size[sizeindex]['size_value'] : null;
    }

    const handleCart = (product) => {
        //console.log(product)
        product.cartQuantity = val;
        //console.log(itemsize)
        dispatch(addToCart([product, itemsize]));
        navigate('/cart')
    }
    const handleAddToCart = () => {
        setVal(preval => preval + 1);
    };
    const handleDecreaseCart = () => {
        setVal(val >= 2 ? preval => preval - 1 : preval => preval);
    };
    //   -----------------------------get postal data-------------------
    const [postal, setPostal] = useState('')
    const getPstalValue = (str) => {
        //console.log(str)
        const replaced = str.replace(/[^0-9]/g, "");
       // console.log(replaced)
        if (replaced.length <= 6) {
            setPostal(replaced);
            setPincode('')
        }
    }
    const [pincode, setPincode] = useState('')
    const getCustomersData = (pin) => {
        axios
            .get(`https://api.postalpincode.in/pincode/${pin}`)
            .then(data => {
                setPincode(data.data[0].Status)
            })
            .catch(error => console.log(error));
    };
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
                <Button variant='contained' style={{ backgroundColor: 'green', textTransform: 'none' }}>{itemsize}ml</Button>
            </ButtomBox>
            <ButtomBox>
                <RemoveCircleRoundedIcon style={{ fontSize: '18px', cursor: val >= 2 ? 'pointer' : 'not-allowed', color: val >= 2 ? 'black' : '#d9d9d9' }} onClick={() => handleDecreaseCart()} />
                <input
                    type="text"
                    value={val}
                    onChange={(e) => handelvalue(e.target.value)}
                    style={{ width: '60px', height: '25px', border: '2px solid black', display: 'flex', textAlign: 'center', borderRadius: '3px' }} />
                <AddCircleRoundedIcon style={{ fontSize: '18px', cursor: 'pointer' }} onClick={() => handleAddToCart()} />
            </ButtomBox>
            <ButtomBox>
                <BootstrapInput size="small"
                    placeholder="Please pincode"
                    value={postal}
                    onChange={(e) => getPstalValue(e.target.value)}
                    style={{ width: '135px' }}
                />
                <Button variant='contained' style={{ backgroundColor: 'green' }} onClick={() => getCustomersData(postal)}>Check</Button>
            </ButtomBox>
            {
                postal!== ''&&postal.length===6&&pincode !== ''?
                <div>
                    <p style={{ color: 'red', fontWeight: 600 }}>{pincode !== '' && pincode === "Success" ? 'Sorry not able to delivery' : null}</p>
                </div>:null
            }

            <ButtomBox>
                <AddCart variant='contained' onClick={() => handleCart(product.products)}>Add Cart</AddCart>
                <QuickBuy variant='contained' >Quick Buy</QuickBuy>
            </ButtomBox>
        </Detailscont>
    )
}

export default ProductDetails