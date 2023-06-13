import { alpha, styled } from '@mui/material/styles';
import { Box, Button, InputBase, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart } from '../../Store/Slices/cartSlice';
import axios from 'axios';


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
let initialized = true;

const ProductDetails = (product) => {
    const currentItem = {
        size: `${product.products.default_size}`,
        price: `${product.products.default_price}`
    }
    console.log("hello i am currentItem", product)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openmod, setOpen] = React.useState(false);
    const handleOpendilog = () => setOpen(true);
    const handleClosedilog = () => setOpen(false);
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

    const [currentSize, setCurrentSize] = useState(currentItem);
    
    
    if (sessionStorage.getItem("initialized") === 'true') {
        setCurrentSize(currentItem);
        sessionStorage.setItem("initialized", false);
    }

    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);

    // destructure all data
    const { details } = products.productdetails;
    const { size } = sizedetails.sizes;
    // get the all details belongs to product Id from product entry tables
    const itemIndex = details !== undefined ? details.filter((item) => item.product_id === product.products.id) : [];
    let itemsize = '';
    const Productvariants = [];
    //console.log(itemIndex);
    if (itemIndex.length !== 0 && details !== undefined && size !== undefined) {
        itemIndex.map((item, idx) => {
            const index = size.filter((items) => items.id === item.size_id)
            const values = {
                "price": item.price,
                "size": index[0]['size_value']
            }
            Productvariants.push(values)
        })
    }


    // console.log(Productvariants)
     console.log(currentSize)
    // useEffect(() => {
    //     //setCurrentSize(currentItem)
    //     console.log("inside useefect")
    //     if (Productvariants.length !== 0) {
    //         if (sessionStorage.getItem("initialized") === true) {
    //             console.log("inside if")
    //             Productvariants.length !== 0 ? setCurrentSize({ size: Productvariants[0].size, price: Productvariants[0].price }) : 
    //             initialized = false;
    //             sessionStorage.setItem("initialized", false);
    //         }else{
    //             console.log(Productvariants)
    //         }
    //     } else {
            
    //     }
    // }, [Productvariants])
    //console.log("hello i am ", Productvariants)
    const handleCart = (product) => {
        console.log(product)
        product.cartQuantity = val;
        itemsize=currentSize.size;
        product.price=currentSize.price;
        dispatch(addToCart([product, itemsize]));
        navigate('/cart')
    }

    // add cart items number
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
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '8px' }}>{product.products.name.replace(/-/g, ' ').toUpperCase()}</h3>
                <p variant='subtitle2' style={{ fontSize: '12px', fontWeight: '500', color: 'gray' }}>
                    Product category:Skin care</p>
            </div>
            <Rattingcont>
                4<StarIcon style={{ fontSize: '12px' }} />
            </Rattingcont>
            <div>
                <p variant='subtitle2' style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                    {product.products.long_description}
                </p>
            </div>
            <div>
                <p variant='h3' style={{ fontSize: '20px', fontWeight: '700', marginTop: '8px' }}>
                    <CurrencyRupeeIcon style={{ fontSize: '20px' }} />{currentSize.price}.00
                    <p variant='subtitle2' style={{ fontSize: '10px', fontWeight: '500', color: 'gray', marginTop: '-3px' }}>
                        Inclusive of all Taxes
                    </p>
                </p>
            </div>
            <ButtomBox>
                <Button variant='contained' style={{ backgroundColor: 'green', textTransform: 'none' }} onClick={handleOpendilog}>{currentSize.size} ml</Button>
            </ButtomBox>
            <Modal
                open={openmod}
                onClose={handleClosedilog}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={stylemodal}>
                    <p
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Select a Size
                    </p>
                    <p
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                    >
                        {Productvariants.length !== 0 ? Productvariants.map((items) => {
                            return (
                                <SizeButtom
                                    variant="contained"
                                    style={{
                                        backgroundColor: "green",
                                        margin: "1rem",
                                    }}
                                    onClick={() => { setCurrentSize({ ['size']: items.size, ['price']: items.price }); setOpen(false) }}
                                >
                                    {items.size}ml
                                </SizeButtom>
                            );
                        }) : null}
                    </p>
                </Box>
            </Modal>
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
                postal !== '' && postal.length === 6 && pincode !== '' ?
                    <div>
                        <p style={{ color: 'red', fontWeight: 600 }}>{pincode !== '' && pincode === "Success" ? 'Sorry not able to delivery' : null}</p>
                    </div> : null
            }

            <ButtomBox>
                <AddCart variant='contained' onClick={() => handleCart(product.products)}>Add Cart</AddCart>
                <QuickBuy variant='contained' >Quick Buy</QuickBuy>
            </ButtomBox>
        </Detailscont>
    )
}

export default ProductDetails