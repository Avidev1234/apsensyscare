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
import { Badge, InputBase, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled, alpha } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Login from '../../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../../Store/Slices/cartSlice';
import "./navbar.css";

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
  height:'100%',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
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
  backgroundColor:'#174686',
  borderRadius: '5px 0 0 5px',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height:'31px',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80ch',
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
  const { window } = props;
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

  const [openLogin, setOpenLogin] = React.useState(false)
  const [login, setLogin] = React.useState(false);

  const handelLogin = (text, id) => {
    setOpenLogin(text);
    setLogin(true);

  }


  const navigate = useNavigate();


  // getting data for cart
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  React.useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: '#fff' }}>
        <Toolbar >
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
            <img src="./aspensyscare.png" height={'40px'} width={'200px'} alt='aspensyscare' style={{ cursor: 'pointer' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between' }} className='sidewidth'>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }}>
                {item}
              </Button>
            ))} */}
            <AvtarIcon style={{margin:'auto'}}>
              <Search >
                <SearchIconWrapper>
                  <SearchIcon style={{color:'white'}}/>
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search your items…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </AvtarIcon>
            {auth && (
              <div
                style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}
              >

                <AvtarIcon>
                  <IconButton size="small">
                    <LanguageIcon
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleLang}

                    />
                  </IconButton>
                  English
                </AvtarIcon>
                <Menu
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
                </Menu>
                <AvtarIcon
                  onClick={() => navigate('/wishlist')}

                >
                  <IconButton
                    size="small"
                    aria-label="account of current user"
                    color="black"
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  Wishlist
                </AvtarIcon>
                <AvtarIcon onClick={() => navigate('/cart')}>
                  <IconButton
                    size="small"
                    aria-label="account of current user"
                    color="black"
                  >
                    <StyledBadge badgeContent={cart.cartTotalQuantity} color="secondary">
                      <ShoppingCartCheckoutIcon />
                    </StyledBadge>
                  </IconButton>
                  Cart
                </AvtarIcon>
                {
                  login ?
                    <div className="MuiBox-root css-dxza1q">
                      <AvtarIcon>
                        <IconButton
                          size="small"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="#000"
                        >
                          <AccountCircle color='black' />
                        </IconButton>
                        Account
                      </AvtarIcon>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                      </Menu>
                    </div>
                    :
                    <div className="MuiBox-root css-dxza1q">
                      <Button variant='contained' color="success" onClick={() => handelLogin(true, 0)}>Login</Button>
                      
                    </div>
                }
              </div>
            )}
          </Box>
        </Toolbar>
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
