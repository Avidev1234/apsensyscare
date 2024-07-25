import React,{useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Button from '@mui/material/Button';
import {
  Badge,
  InputBase,
  Menu,
  MenuItem,
  useScrollTrigger,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@mui/material";
// import { AccountCircle } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
// import LanguageIcon from '@mui/icons-material/Language';
// import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import Login from "../../../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../../../../Store/Slices/cartSlice";
import "./navbar.css";
import { Helmet } from "react-helmet";
import { clearAddress } from "../../../../Store/Slices/getAddressSlice";
// import * as Scroll from 'react-scroll';
import { clearWishlist } from "../../../../Store/Slices/getwishlistSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import Cookies from "js-cookie";
import LocationDisplay from "./LocationDisplay ";
import { Directions } from "@mui/icons-material";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const AvtarIcon = styled(Box)`
  display: flex;
  flex-direction: column;
  color: black;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  font-size: 12px;
`;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  height: "100%",
  borderRadius: "10px",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#f3fbff",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
}));
const MenuIconWeapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#d9d9d9",
  zIndex: 1000,
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(3em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "20px",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
    },
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70ch",
    },
    borderRadius: "16px",
    "&::placeholder": {
      color: "#000",
    },
  },
  "&::placeholder": {
    color: "red",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function refreshPage(e) {
  // e.preventDefault();
  window.scrollTo(0, 0);
  // window.location.reload();
}
function Navbar(props) {
  const { window, handelLogin, openLogin } = props;
  const ref = React.useRef({
    render: false,
  });
  const [open, setOpen] = useState(false);
  const [isCategory, setCategory] = React.useState(false);

  const handleClick = (e) => {
    //console.log(ref)
    if (ref.current && !ref.current.contains(e.target)) {
      ref.render = true;
      ref.current = null;
      // console.log(ref)
    } else if (ref.render === true) {
      setCategory(false);
    }
  };
  React.useEffect(() => {
    //console.log(ref)
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Apsensyscare
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [auth] = React.useState(true);
  const [Auth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [setleLang] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // const handleLang = (event) => {
  //   setleLang(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  // const handleCloseLang = () => {
  //   setleLang(null);
  // };

  const handleLogout = () => {
    setOpen(false); // Close the dialog
    sessionStorage.clear();
    setAnchorEl(null);
    dispatch(clearAddress());
    dispatch(clearCart());
    dispatch(clearWishlist());
    navigate("/");
    Cookies.remove("u__r_t_____");
    localStorage.removeItem("___gaust_user_address");
  };
const openConfirmation = () => {
    setOpen(true); // Open the confirmation dialog
  };
  
  // getting data for cart
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const Wishlist = useSelector((state) => state.wishlist);
  const username = useSelector((state) => state.users);
  //console.log(Wishlist.wishlist.length)
  const wishlistCount = Wishlist !== undefined ? Wishlist.wishlist.length : 0;
  const user =
  username !== undefined &&
  username.users.details &&
  username.users.details.length > 0
    ? username.users.details[0].f_name +
      (username.users.details[0].l_name
        ? ' ' + username.users.details[0].l_name
        : '')
    : "";
  console.log(user);
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

  const [opensearch, Setopensearch] = React.useState(false);
  const [searchcount, Setsearchcount] = React.useState(false);
  const searchresult = [];
  const ProductSearch = (e) => {
    e.preventDefault();
    Setsearchcount(searchcount + 1);
    Setopensearch(true);

    product.map((val, i) => {
      //console.log(val.brand_name)
      const name = val.search_keywords;
      if (name.includes(e.target.value) === true) {
        searchresult.push(val);
        localStorage.setItem("array", JSON.stringify(searchresult));
      }
      return val;
    });
  };
  const SearchModel = () => {
    const searchedItems =
      JSON.parse(localStorage.getItem("array")) === null
        ? []
        : JSON.parse(localStorage.getItem("array"));
    //console.log("hello i am results", (searchedItems))

    return (
      <div className="scroolbar absolute top-[70px] right-0 h-[300px] max-h-[300px] bg-white w-full rounded-xl shadow-xl overflow-auto p-1">
        {searchedItems.map((val, i) => {
          return (
            <div
              className="w-full flex p-3 pl-4 items-center hover:bg-gray-300 rounded-lg cursor-pointer mb-4"
              onClick={() => {
                navigate(
                  `/product/${val.category_id}/${val.id}/${val.product_url}`,
                  { state: { product: val } }
                );
                localStorage.setItem("array", JSON.stringify([]));
                Setopensearch(false);
              }}
            >
              <div className="mr-4">
                <div className="h-8 w-8 rounded-sm flex items-center justify-center text-xl">
                  <img
                    src={`${process.env.REACT_APP_IMAGE}/all_products/${val.product_image}`}
                    alt={`${val.name}`}
                  />
                </div>
              </div>
              <div>
                <div className="font-bold text-[14px] uppercase text-black">
                  {val.brand_name}
                </div>
                <div className="text-xs text-gray-500">
                  <span className="mr-2">{val.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const Category = useSelector((state) => state.category);
  const { category } = Category.category;
  const OpenCategory = () => {
    return (
      <>
        <div
          ref={ref}
          className="scroolbar absolute top-[40px] left-[0px] bg-white w-[150px] rounded shadow-xl overflow-auto p-1 text-[black] flex flex-col no-wrap"
        >
          {category !== undefined
            ? category.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="hover:bg-[#d9d9d9] p-2 rounded border-b-2 cursor-pointer"
                    onClick={() => {
                      setCategory(false);
                      navigate({
                        pathname: `/category/${item.category_url}/c/${item.id}`,
                        search: `?categoryId=${item.id}`,
                      });
                    }}
                  >
                    {item.category_name}
                  </div>
                );
              })
            : null}
        </div>
      </>
    );
  };
  const opencategory = () => {
    //console.log("hello")
    setCategory(true);
  };
  const [opensearchbar, setOpensearchBar] = React.useState(false);

  return (
    <Box sx={{ display: "flex", height: trigger ? "80px" : "80px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "#0112FE",
          height: trigger ? "80px" : "80px",
          transition: "200ms ease-in",
        }}
      >
        <Toolbar  className="toolbar-custom" style={{ minHeight: "80px",display:"flex", gap:"33px" }} >
          {/* mobile view start   */}
          <Box
            sx={{ display: { sm: "none" }, justifyContent: "space-between" }}
            className="w-full flex flex-row gap-2 items-center"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            {opensearchbar ? (
              <Search>
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full text-[#696969] outline-none p-[10px] rounded-md"
                  onChange={(e) => ProductSearch(e)}
                  // onFocus={() => Setopensearch(true)}
                  onBlur={() => {
                    setTimeout(() => {
                      Setopensearch(false);
                    }, 200);
                  }}
                />
              </Search>
            ) : (
              <img
                src={`${process.env.REACT_APP_URL}website-logo-200-100.png`}
                alt="apsensyscare"
                style={{ cursor: "pointer", width: "140px", height: "65px" }}
                className="cursor-pointer"
                onClick={() => navigate("/")}
              />
            )}
            {opensearch ? <SearchModel /> : null}

            <Box
              className="!m-0"
              onClick={() => setOpensearchBar((prev) => !prev)}
            >
              {!opensearchbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              ) : (
                <CancelIcon />
              )}
            </Box>
          </Box>
          {/* mobile view end   */}
          {/* desktop view start   */}
          <img
            src={`${process.env.REACT_APP_URL}website-logo-200-100.png`}
            alt="apsensyscare"
            // onClick={() => { navigate('/'); }}

            onClick={(e) => {
              navigate("/");
              refreshPage(e);
            }}
            className="w-[140px] h-[65px] hidden sm:block cursor-pointer"
          />

         <LocationDisplay />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              // gap:"21px",
              gap:{md:"28px", lg: "79px"},
              justifyContent: "space-between",
            }}
            className="sidewidth"
          >
            <div style={{ margin: "auto" }} className="relative">
              <MenuIconWeapper
                ref={ref}
                className="border-r-2 rounded-l-lg top-0 left-0 cursor-pointer	 bg-[#d9d9d9]]"
                onClick={opencategory}
              > 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </MenuIconWeapper>
              {isCategory ? <OpenCategory /> : null}
              <Search>
                <StyledInputBase
                  className="border-2 rounded-lg"
                  placeholder="Search your items…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => ProductSearch(e)}
                  // onFocus={() => Setopensearch(true)}
                  onBlur={() => {
                    setTimeout(() => {
                      Setopensearch(false);
                    }, 200);
                  }}
                />
              </Search>
              <SearchIconWrapper className="border-r-2 rounded-r-lg top-0 right-0	">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="blue"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </SearchIconWrapper>
              {opensearch ? <SearchModel /> : null}
            </div>
            {auth && (
            <div
            className="icon-container"
            style={{ 
              display: "flex", 
              flexDirection: "row",
             
            }}
          >
            <AvtarIcon
              onClick={() => navigate("/wishlist")}
              style={{ color: "#fff" }}
            >
              <IconButton
                style={{ fontSize: "60px !important" }}
                aria-label="account of current user"
                color="black"
              >
                <StyledBadge badgeContent={wishlistCount} color="secondary">
                  <FavoriteBorderIcon
                    style={{ color: "#fff", fontSize: "35px" }}
                  />
                </StyledBadge>
              </IconButton>
              {/* Wishlist */}
            </AvtarIcon>
            <AvtarIcon
              onClick={() => navigate("/cart")}
              style={{ color: "#fff" }}
            >
              <IconButton
                style={{ fontSize: "60px !important" }}
                aria-label="account of current user"
                color="black"
              >
                <StyledBadge
                  badgeContent={cart.cartTotalQuantity}
                  color="secondary"
                >
                  <ShoppingCartCheckoutIcon
                    style={{ color: "#fff", fontSize: "35px" }}
                  />
                </StyledBadge>
              </IconButton>
              {/* Cart */}
            </AvtarIcon>
          
            {/* This one history */}
            {!sessionStorage.getItem("___user") ? (
              <div>
                <Helmet>
                  <title>{}</title>
                  <meta name="description" content={""} />
                </Helmet>
              </div>
            ) : (
              <AvtarIcon
                onClick={() => navigate("/history")}
                style={{ color: "#fff" }}
              >
                <IconButton
                  style={{ fontSize: "60px !important" }}
                  aria-label="account of current user"
                  color="black"
                >
                  {/* <StyledBadge
                    badgeContent={cart.cartTotalQuantity}
                    color="secondary"
                  >
                    </StyledBadge> */}
                    <HistoryIcon
                      style={{ color: "#fff", fontSize: "35px" }}
                    />
                </IconButton>
                {/* Cart */}
              </AvtarIcon>
            )}
          
            {item_value !== null ? (
              <div className="MuiBox-root css-dxza1q">
                <AvtarIcon style={{ color: "#fff" }}>
                  <IconButton
                    style={{ fontSize: "70px !important" }}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                  >
                    {/* <AccountCircle style={{ fontSize: '37px', color: '#fff' }} /> */}
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-white rounded-full w-[120px] flex flex-col inline text-[16px] shadow-inner">
                        <span>Hello,</span>
                        <div className="w-full flex ml-[27px]">{user}
                       <ArrowDropDownIcon/>
                        </div>
                      
                      </div>
                    </div>
                  </IconButton>
                  {/* Account */}
                </AvtarIcon>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <MenuItem  className="hover-underline" onClick={() => {navigate("/profile"); handleClose();}}>Manage My Account</MenuItem>
                  <hr/>
                  <MenuItem   className="hover-underline"  onClick={() => {navigate("/manageaddress"); handleClose();}}>Addresses</MenuItem>
                  <MenuItem   className="hover-underline"  onClick={() => {navigate("/wishlist"); handleClose();}}>Wishlist</MenuItem>
                  <MenuItem   className="hover-underline"  onClick={() => {navigate("/history"); handleClose();}}>Your orders</MenuItem>
                  <MenuItem   className="hover-underline"  onClick={() => {navigate("/category"); handleClose();}}>Explore products</MenuItem>
                  <MenuItem   className="hover-underline"  onClick={() => {navigate("/cart"); handleClose();}}>Shopping List</MenuItem>
                  <MenuItem   className="hover-underline"  onClick={() => {navigate("/privacy-policy"); handleClose();}}>Shipping and privacy policies</MenuItem>
                  <MenuItem   className="hover-underline"  onClick={() => {navigate("/contact-us"); handleClose();}}>Customer Services</MenuItem>
                  {/* <MenuItem   className="hover-underline"  onClick={handelLogout}>Logout</MenuItem> */}
                  <MenuItem className="hover-underline" onClick={openConfirmation}>Logout</MenuItem>
                  <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="logout-dialog-title"
                      aria-describedby="logout-dialog-description"
                    >
                      <DialogTitle id="logout-dialog-title">Logout Confirmation</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="logout-dialog-description">
                          Are you sure you want to logout?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button className="" variant="outlined" onClick={handleClose} >
                          Cancel
                        </Button>
                        <Button variant="contained" onClick={handleLogout} color="success">
                          Logout
                        </Button>
                      </DialogActions>
                    </Dialog>
                </Menu>
              </div>
            ) : (
              <div
                className="MuiBox-root css-dxza1q"
                style={{
                  flexDirection: "row",
                  cursor: "pointer",
                  color: "#fff",
                  display:"flex",
                  flexdirections:"row",
                  marginTop:"15px",
                  fontSize: "13px",
                }}
                onClick={() => handelLogin(true, 0)}
              >
                {/* <img src='./account.png' alt=''/> */}
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#fff"
                  className="bi bi-person mt-[-6px] "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                {/* <Button variant='contained' style={{ backgroundColor: "#FFC700" }} onClick={() => handelLogin(true, 0)}>Login</Button> */}
              </div>
            )}
          </div>
          
            )}
          </Box>
        </Toolbar>
        {/* desktop view end   */}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>

      {openLogin ? <Login handelLogin={handelLogin} /> : ""}
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
