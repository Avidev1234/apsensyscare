import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Badge, InputBase, Menu, MenuItem, useScrollTrigger } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled, alpha } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Loginold from '../../Login/Loginold';
import Login from '../../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getTotals } from '../../../Store/Slices/cartSlice';
import "./navbar.css";
import { clearAddress } from '../../../Store/Slices/getAddressSlice';
import CategoryLayout from '../CategoryLayout/CategoryLayout';
import * as Scroll from 'react-scroll';
import { clearWishlist } from '../../../Store/Slices/getwishlistSlice';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const AvtarIcon = styled(Box)`
    display: flex;
    flex-direction: column;
    color: black;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 0px;
    font-size: 12px;
`
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100%',
  borderRadius: '10px',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: "#f3fbff",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
}));
const MenuIconWeapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#d9d9d9',
  zIndex: 1000,
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(3em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '20px',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '35ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70ch',
    },
    borderRadius: '16px',
    '&::placeholder': {
      color: "#000"
    },
  },
  '&::placeholder': {
    color: "red"
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
function Navbar(props) {
  const { window, handelLogin, openLogin } = props;
  const ref = React.useRef({
    render: false
  });
  const [isCategory, setCategory] = React.useState(false)

  const handleClick = e => {
    console.log(ref)
    if (ref.current && !ref.current.contains(e.target)) {
      ref.render = true
      ref.current = null
      // console.log(ref)
    } else if (ref.render === true) {
      setCategory(false);
    }
  };
  React.useEffect(() => {
    console.log(ref)
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };

  });
  //console.log(props)
  const navigate = useNavigate();
  var item_value = sessionStorage.getItem("LoginSuccess");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Aspensyscare
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const container = window !== undefined ? () => window().document.body : undefined;



  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [leLang, setleLang] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLang = (event) => {
    setleLang(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseLang = () => {
    setleLang(null);
  };

  const handelLogout = () => {
    sessionStorage.clear()
    setAnchorEl(null);
    dispatch(clearAddress())
    dispatch(clearCart())
    dispatch(clearWishlist())
    navigate('/')
  }

  // getting data for cart
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const Wishlist = useSelector((state) => state.wishlist);
  //console.log(Wishlist.wishlist.length)
  const wishlistCount = Wishlist !== undefined ? Wishlist.wishlist.length : 0
  React.useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const Products = useSelector((state) => state.product);
  const { product } = Products.products;
  // function for getting the search result **dont use this function when product is more then 100

  const [opensearch, Setopensearch] = React.useState(false)
  const [searchcount, Setsearchcount] = React.useState(false)
  const searchresult = [];
  const ProductSearch = (e) => {
    e.preventDefault();
    Setsearchcount(searchcount + 1)
    Setopensearch(true)

    product.map((val, i) => {
      //console.log(val.brand_name)
      const name = val.search_keywords;
      if (name.includes(e.target.value) === true) {
        searchresult.push(val)
        localStorage.setItem('array', JSON.stringify(searchresult));
      }
    })
  }
  const SearchModel = () => {
    const searchedItems = JSON.parse(localStorage.getItem('array')) === null ? [] : JSON.parse(localStorage.getItem('array'))
    //console.log("hello i am results", (searchedItems))

    return (
      <div className="scroolbar absolute top-[20] right-0 w-[90%] h-[300px] max-h-[300px] bg-white w-full rounded-xl shadow-xl overflow-auto p-1">
        {
          searchedItems.map((val, i) => {
            return (
              <div className="w-full flex p-3 pl-4 items-center hover:bg-gray-300 rounded-lg cursor-pointer mb-4"

                onClick={() => {
                  console.log("clicked")
                  navigate(`/product/${val.category_id}/${val.id}/${val.product_url}`, { state: { product: val } })
                  localStorage.setItem('array', JSON.stringify([]));
                  Setopensearch(false)
                }
                }
              >
                <div className="mr-4">
                  <div className="h-8 w-8 rounded-sm flex items-center justify-center text-xl">
                    <img src={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`} alt={`${val.name}`} />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[14px] uppercase text-black">{val.brand_name}</div>
                  <div className="text-xs text-gray-500">
                    <span className="mr-2">{val.name}</span>
                  </div>
                </div>
              </div>)
          })
        }
      </div>
    )
  }
  const Category = useSelector((state) => state.category);
  const { category } = Category.category;
  const OpenCategory = () => {
    return (
      <>
        <div ref={ref} className='scroolbar absolute top-[40px] left-[0px] bg-white w-[150px] rounded shadow-xl overflow-auto p-1 text-[black] flex flex-col no-wrap'>
          {category !== undefined ? category.map((item, idx) => {
            return (
              <div key={idx} className='hover:bg-[#d9d9d9] p-2 rounded border-b-2 cursor-pointer' onClick={() => {
                setCategory(false);
                navigate({
                  pathname: `/category/${item.category_url}/c/${item.id}`,
                  search: `?categoryId=${item.id}`
                })
              }
              }>
                {item.category_name}
              </div>
            )
          }) : null}

        </div>
      </>
    )
  }
  const opencategory = () => {
    //console.log("hello")
    setCategory(true)

  }


  return (
    <Box sx={{ display: 'flex', height: trigger ? "80px" : "80px" }} >
      <CssBaseline />
      <AppBar component="nav" sx={{ background: '#0112FE', height: trigger ? "80px" : "80px", transition: '200ms ease-in' }} >
        <Toolbar style={{ minHeight: '80px' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={() => navigate('/')}
          >
            <img src={`${process.env.REACT_APP_URL}website-logo-200-100.png`} alt='aspensyscare' style={{ cursor: 'pointer', width: '140px', height: '65px' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between' }} className='sidewidth'>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }}>
                {item}
              </Button>
            ))} */}
            <div style={{ margin: 'auto' }} className='relative'>
              <MenuIconWeapper ref={ref} className='border-r-2 rounded-l-lg top-0 left-0 cursor-pointer	 bg-[#d9d9d9]]' onClick={opencategory}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>

              </MenuIconWeapper>
              {isCategory ? <OpenCategory /> : null}
              <Search >

                <StyledInputBase
                  className="border-2 rounded-lg"
                  placeholder="Search your items…"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={(e) => ProductSearch(e)}
                  // onFocus={() => Setopensearch(true)}
                  onBlur={() => {
                    setTimeout(() => {
                      Setopensearch(false)
                    }, 200)
                  }}
                />


              </Search>
              <SearchIconWrapper className="border-r-2 rounded-r-lg top-0 right-0	">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </SearchIconWrapper>
              {opensearch ? <SearchModel /> : null}
            </div>
            {auth && (
              <div
                style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}
              >

                {/* <AvtarIcon>
                  <IconButton size="small">
                    <LanguageIcon
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleLang}

                    />
                  </IconButton>
                  English
                </AvtarIcon> */}
                {/* <Menu
                  id="menu-appbar"
                  anchorEl={leLang}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  open={Boolean(leLang)}
                  onClose={handleCloseLang}
                >
                  <MenuItem onClick={handleCloseLang}>English</MenuItem>
                  <MenuItem onClick={handleCloseLang}>Hindi</MenuItem>
                </Menu> */}
                <AvtarIcon
                  onClick={() => navigate('/wishlist')}
                  style={{ color: '#fff' }}
                >
                  <IconButton
                    style={{ fontSize: '60px !important' }}
                    aria-label="account of current user"
                    color="black"
                  >
                    <StyledBadge badgeContent={wishlistCount} color="secondary">
                      <FavoriteBorderIcon style={{ color: '#fff', fontSize: '35px' }} />
                    </StyledBadge>
                  </IconButton>
                  {/* Wishlist */}
                </AvtarIcon>
                <AvtarIcon onClick={() => navigate('/cart')} style={{ color: '#fff' }}>
                  <IconButton
                    style={{ fontSize: '60px !important' }}
                    aria-label="account of current user"
                    color="black"
                  >
                    <StyledBadge badgeContent={cart.cartTotalQuantity} color="secondary">
                      <ShoppingCartCheckoutIcon style={{ color: '#fff', fontSize: '35px' }} />
                    </StyledBadge>
                  </IconButton>
                  {/* Cart */}
                </AvtarIcon>
                {
                  item_value !== null ?
                    <div className="MuiBox-root css-dxza1q">
                      <AvtarIcon style={{ color: '#fff' }}>
                        <IconButton
                          style={{ fontSize: '70px !important' }}
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                        >
                          <AccountCircle style={{ fontSize: '37px', color: '#fff' }} />
                        </IconButton>
                        {/* Account */}
                      </AvtarIcon>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem> */}
                        <MenuItem onClick={handelLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                    :

                    <div className="MuiBox-root css-dxza1q" style={{ flexDirection: 'row', cursor: 'pointer', color: "#fff" }} onClick={() => handelLogin(true, 0)}>
                      {/* <img src='./account.png' alt=''/> */}
                      Login
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#fff" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                      {/* <Button variant='contained' style={{ backgroundColor: "#FFC700" }} onClick={() => handelLogin(true, 0)}>Login</Button> */}
                    </div>
                }
              </div>
            )}
          </Box>
        </Toolbar>
        {/* <CategoryLayout /> */}
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>

      {openLogin ? <Login handelLogin={handelLogin} /> : ''}
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
