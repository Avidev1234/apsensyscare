import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import Login from "../Login/Login";
import { useContext } from "react";
import axios from "axios";
import { getAddress } from "../../Store/Slices/getAddressSlice";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};


const formAlign = {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    marginBottom: "20px",
    marginTop: "20px"
}

const AddAddressModal=({handelLogin})=>{
    //console.log(handelLogin)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users);
    const {details}=user.users;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>{ 
        if(sessionStorage.getItem("___user")===null){
            handelLogin(true)
        }else{
            setOpen(true)
        }
    };
    const handleClose = () => setOpen(false);
    const SignupSchema = Yup.object().shape({
        pincode: Yup.string()
            .required('Required')
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(6, 'Must be exactly 6 digits')
            .max(6, 'Must be exactly 6 digits'),
        city: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        state: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        house: Yup.string()
            .min(10, 'Too Short!')
            .max(100, 'Too Long!')
            .required('Required'),
        area: Yup.string()
            .min(10, 'Too Short!')
            .max(100, 'Too Long!')
            .required('Required'),
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        phone: Yup.string().matches(/^[6-9]\d{9}$/, { message: "Please enter valid number.", excludeEmptyString: false }).required('Required'),
        email: Yup.string().email('Invalid email')
    });

    //console.log(details)
    const saveAddress= async(values)=>{
        console.log(values)
        const address=Object.assign({user:sessionStorage.getItem('___user')},values)
        setOpen(false)
        await axios
        .post("/addAddress", address)
        .then((req, res) => {
            console.log("done");
            if(sessionStorage.getItem('___user')){
                dispatch(getAddress(sessionStorage.getItem('___user')))
              }
        })
        .catch((err) => {
            console.log(err);
        });

    }
    return (
        <>
            <Button
                onClick={handleOpen}
                style={{
                    width: "max-content",
                    cursor: "pointer",
                    display: "flex",
                    fontSize: "12px",
                    color: "blueviolet",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: ".2rem",
                }}
            >
                <AddIcon style={{ fontSize: "20px" }} fontSize="large" />
                Add New Address
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={{
                            pincode: '',
                            city: '',
                            state: '',
                            house: '',
                            area: '',
                            name: '',
                            phone: '',
                            email: '',
                            addressType:''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            //console.log(values);
                            saveAddress(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Typography variant="h5" m={2} style={{ fontWeight: "bold" }}>
                                    Address
                                </Typography>
                                <div style={formAlign}>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.pincode && touched.pincode ? <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="Pincode"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="pincode"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="Pincode"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="pincode"
                                            color="success"
                                        />}
                                        {
                                            errors.pincode && touched.pincode ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.pincode}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.city && touched.city ? <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="City"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="city"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="City"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="city"
                                            color="success"
                                        />}
                                        {
                                            errors.city && touched.city ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.city}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.state && touched.state ? <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="State"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="state"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            id="standard-multiline-flexible"
                                            label="State"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="state"
                                            color="success"
                                        />}
                                        {
                                            errors.state && touched.state ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.state}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div style={formAlign}>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.house && touched.house ? <Field
                                            as={TextField}
                                            label="House/Flat/Office"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="house"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            label="House/Flat/Office"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="house"
                                            color="success"
                                        />}
                                        {
                                            errors.house && touched.house ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.house}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.area && touched.area ? <Field
                                            as={TextField}
                                            label="Road Name/Area/Colony"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="area"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            label="Road Name/Area/Colony"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="area"
                                            color="success"
                                        />}
                                        {
                                            errors.area && touched.area ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.area}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.area && touched.area ? <Field
                                            as={TextField}
                                            label="Road Name/Area/Colony"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="area"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            label="Road Name/Area/Colony"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="area"
                                            color="success"
                                        />}
                                        {
                                            errors.area && touched.area ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.area}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <Typography variant="h5" m={2} style={{ fontWeight: "bold" }}>
                                    Contact
                                </Typography>
                                <div style={formAlign}>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.name && touched.name ? <Field
                                            as={TextField}
                                            label="Name"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="name"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            label="Name"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="name"
                                            color="success"
                                        />}
                                        {
                                            errors.name && touched.name ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.name}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.phone && touched.phone ? <Field
                                            as={TextField}
                                            label="Phone"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="phone"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            label="Phone"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="phone"
                                            color="success"
                                        />}
                                        {
                                            errors.phone && touched.phone ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.phone}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{ width: "100%", margin: "10px" }}>
                                        {errors.email && touched.email ? <Field
                                            as={TextField}
                                            label="Email"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="email"
                                            error
                                        /> : <Field
                                            as={TextField}
                                            label="Email"
                                            id="standard-multiline-flexible"
                                            multiline
                                            maxRows={4}
                                            variant="standard"
                                            sx={{ m: 1, width: '100%' }}
                                            name="email"
                                            color="success"
                                        />}
                                        {
                                            errors.email && touched.email ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>{errors.email}</FormHelperText>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div style={formAlign}>
                                    <Button type="submit" variant="contained" startIcon={<AddIcon />}>
                                        Add
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </>
    );
}
export default AddAddressModal;
