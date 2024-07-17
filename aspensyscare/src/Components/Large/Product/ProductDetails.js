import { alpha, styled } from '@mui/material/styles';
import { Box, Button, InputBase, Modal, } from '@mui/material'
import React, { useContext, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Store/Slices/cartSlice';
import axios from 'axios';
import { addToWishlist, removeFromWishlist } from '../../../Store/Slices/getwishlistSlice';
import { toast } from 'react-toastify';
import { Log } from '../../../App';


const stylemodal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24
   
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
    position:relative;
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
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: 'grey',
        },
    },
}));

const ProductDetails = (product) => {
    console.log("product",product);
    const WishlistproductId = useContext(Log);
    //console.log(WishlistproductId)
    let exsit
    if (WishlistproductId.includes(product.products.id)) {
        exsit = true;
    }
    const currentItem = {
        size: `${product.products.size_value}`,
        price: `${product.products.price}`,
        mrp: `${product.products.mrp}`,
        discount: `${product.products.discount}`,
        current: true
    }
    //console.log("hello i am currentItem", product)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openmod, setOpen] = React.useState(false);
    const handleOpendilog = () => setOpen(true);
    const handleClosedilog = () => setOpen(false);
    const [val, setVal] = useState(1);
    const handelvalue = (str) => {
        //console.log(str)
        const replaced = str.match(/\d+/);
        if (replaced !== '') {
            setVal(replaced[0]);
        }
    }
    const portal = {
        position: 'absolute',
        // top: '550px',
        left: '-40px',
        maxHeight: '500px',
        maxWidth: '899px',
        zIndex: 999,
        display: product.magnified ? 'block' : 'none',
        overflow: 'hidden',
        backgroundColor: '#fff',
        padding: '0 10px',
        // border:'0.5px solid black',
        boxShadow:' 0px 0px 2px 2px  #D3D3D3'
    } 
    

    const [currentSize, setCurrentSize] = useState(currentItem);


    if (sessionStorage.getItem("initialized") === 'true') {
        setCurrentSize(currentItem);
        sessionStorage.setItem("initialized", false);
    }

    const isLoggedIn = sessionStorage.getItem('___user');
    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);
    const category = useSelector((state) => state.category.category.category);
    const curremtcategory = category !== undefined ? category?.filter((item) => item.id === product.products.category_id) : []
    // console.log("category",product, curremtcategory)
    // destructure all data
    const { details } = products.productdetails;
    const { size } = sizedetails.sizes;
    // get the all details belongs to product Id from product entry tables
    const itemIndex = details !== undefined ? details.filter((item) => item.product_id === product.products.id) : [];
    const Productvariants = [];
    console.log("itemIndex",itemIndex);
    if (itemIndex.length !== 0 && details !== undefined && size !== undefined) {
        itemIndex.map((item, idx) => {
            const index = size.filter((items) => items.id === item.size_id)
            //console.log(index)
            const values = {
                "price": item.price,
                "size": index[0]['size_value'],
                "mrp": item.mrp,
                "discount": Math.round(((item.mrp - item.price) / item.mrp) * 100)
            }
            Productvariants.push(values)
            return null;
        })
    }


    //console.log(Productvariants)
    //console.log(currentSize)

    const handleCart = (product) => {
        //console.log(product)
        const itemIndex = details !== undefined ? details.filter((item) => item.product_id === product.id) : [];
        
        let itemsize = '';
        // const Productvariants = [];
        //console.log(itemIndex);
        // itemIndex.map((item, idx) => {
        //     const index = size.filter((items) => items.id === item.size_id)
        //     const values = {
        //         "price": item.price,
        //         "size": index[0]['size_value']
        //     }
        //     Productvariants.push(values)
        //     return null;
        // })
        //const productDetails = Object.assign({ price: product.default_price }, product);
        //dispatch(addToCart([productDetails, product.default_size, Productvariants]));
        //navigate('/cart')

        //product.cartQuantity = val;
        const ProductObj = Object.assign({ cartQuantity: val, price: currentSize.price }, product)
        //console.log(ProductObj)
        itemsize = currentSize.size;
        //product.price=currentSize.price;
        //console.log(Productvariants)
        dispatch(addToCart([ProductObj, itemsize, Productvariants]));
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
    const Wishlist = (val, exsit) => {
        if (exsit === true && sessionStorage.getItem('___user')) {
            dispatch(removeFromWishlist(val.id))
        } else if (sessionStorage.getItem('___user')) {
            const wishListData = {
                productid: val.id,
                userId: sessionStorage.getItem('___user')
            }
            dispatch(addToWishlist(wishListData))
            navigate('/wishlist')
        } else {
            toast.warning("You are not loged in")
        }
    }
    return (   
        <Detailscont>
             <div
                id="portal"
                style={portal}
            />
            <div className='w-full '>
                <div className='w-full flex flex-row gap-x-2 justify-start item-start text-[#a7a6a6] mb-2'>
                    <div className='w-full text-sm m-0 flex flex-row gap-2'>
                        <a href='/' target='_blank' className='hover:text-[#997af6] hover:underline'>Home</a>
                        <span>/</span>
                        <a href={`/category/${curremtcategory[0].category_url}/c/${curremtcategory[0].id}?categoryId=${curremtcategory[0].id}`} target='_blank' rel="noreferrer" className='hover:text-[#997af6] hover:underline'>{curremtcategory[0].category_name}</a>
                        <span>/</span>
                        <span >{product?.products?.short_name}</span>
                        <span>/</span>
                        <span>{product?.products?.name}</span>
                    </div>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '8px' }}>{product?.products?.name?.replace(/-/g, ' ').toUpperCase()}</h3>
                <p variant='subtitle2' style={{ fontSize: '12px', fontWeight: '500', color: 'gray' }}>
                    Product category : {curremtcategory[0].category_name}</p>
            </div>
            <Rattingcont>
                4<StarIcon style={{ fontSize: '12px' }} />
            </Rattingcont>
            
            <div>
                <p variant='subtitle2' style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                    {product.products.long_description}
                </p>
            </div>
            <div className='flex flex-col'>
                <p variant='h3' style={{ fontSize: '20px', fontWeight: '700', marginTop: '8px' }}>
                    <CurrencyRupeeIcon style={{ fontSize: '20px' }} />{currentSize.price}.00
                    <span className="text-[#bbbaba] mx-2 line-through text-[12px]">{Number(currentSize.mrp) > currentSize.price ? "₹" + currentSize.mrp + ".00" : ''}</span>
                    <span className="text-green-600 text-[12px]">{currentSize.discount > 0 ? currentSize.discount + "% off" : ''}</span>
                </p>
                <p variant='subtitle2' style={{ fontSize: '10px', fontWeight: '500', color: 'gray', marginTop: '-3px' }}>
                    Inclusive of all Taxes
                </p>
            </div>
            {/* <ButtomBox>
                <Button variant='contained'
                    style={{ backgroundColor: "green", width: '100px', display: "flex", justifyContent: 'space-around' }} onClick={handleOpendilog}>
                    {
                        currentSize.size < 1000 ? `${currentSize.size} ml` : `${(currentSize.size / 1000)} L`
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="ml-[15px] bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </Button>
            </ButtomBox> */}
            <div className='w-full flex flex-row flex-wrap gap-x-2 mt-2'>
                {Productvariants.length !== 0 ? Productvariants.map((items, id) => {
                    return (
                        <SizeButtom
                            key={id}
                            variant="contained"
                            style={{
                                backgroundColor: currentSize.size === items.size ? "green" : '#000',
                            }}
                            onClick={() => {
                                setCurrentSize({ 'size': items.size, 'price': items.price, 'mrp': items.mrp, 'discount': Math.round(((items.mrp - items.price) / items.mrp) * 100) });
                                setOpen(false)
                            }}
                        >
                            {
                                items.size < 1000 ? `${items.size} ml` : `${(items.size / 1000)} L`
                            }
                        </SizeButtom>
                    );
                }) : null}
            </div>
            {/* <Modal
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
                        {Productvariants.length !== 0 ? Productvariants.map((items, id) => {
                            return (
                                <SizeButtom
                                    key={id}
                                    variant="contained"
                                    style={{
                                        backgroundColor: "green",
                                        margin: "1rem",
                                    }}
                                    onClick={() => { setCurrentSize({ 'size': items.size, 'price': items.price }); setOpen(false) }}
                                >
                                    {
                                        items.size < 1000 ? `${items.size} ml` : `${(items.size / 1000)} L`
                                    }
                                </SizeButtom>
                            );
                        }) : null}
                    </p>
                </Box>
            </Modal> */}
            <ButtomBox>
                <RemoveCircleRoundedIcon style={{ fontSize: '18px', cursor: val >= 2 ? 'pointer' : 'not-allowed', color: val >= 2 ? 'black' : '#d9d9d9' }} onClick={() => handleDecreaseCart()} />
                <input
                    type="text"
                    value={val}
                    onChange={(e) => handelvalue(e.target.value)}
                    style={{ width: '60px', height: '25px', border: '2px solid black', display: 'flex', textAlign: 'center', borderRadius: '3px' }} />
                <AddCircleRoundedIcon style={{ fontSize: '18px', cursor: 'pointer' }} onClick={() => handleAddToCart()} />
            </ButtomBox>
            {/* <ButtomBox>
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
            } */}
           <ButtomBox>
                {!isLoggedIn && (
                    <AddCart variant='contained' onClick={() => navigate('/before-cart')}>
                        Add Cart
                    </AddCart>
                )}
                {isLoggedIn && (
                    <>
                        <AddCart variant='contained' onClick={() => handleCart(product.products)}>
                            Add Cart
                        </AddCart>
                        
                    </>
                    
                )}
                <QuickBuy variant='contained' onClick={() => { Wishlist(product.products, exsit) }}>
                            Add to wishlist
                        </QuickBuy>
            </ButtomBox>
          
        </Detailscont>
    )
}

export default ProductDetails