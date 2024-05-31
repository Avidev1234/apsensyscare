import styled from '@emotion/styled';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddAddress, SignupUser, fetchUsers, getAddress } from '../../Api/Api';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import { toast } from 'react-toastify';

const LoginCont = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10003;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  
`;

const signupInitialvalue = {
    phone: "",
    email: "",
    password: "",
};
const loginInitialvalue = {
    phone: "",
    password: "",
};
const Signup = ({ openSignup }) => {
    const SignupSchema = Yup.object().shape({
        phone: Yup.string()
            .matches(/^[6-9]\d{9}$/, {
                message: "Please enter valid number.",
                excludeEmptyString: false,
            })
            .required("Required"),
        password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        email: Yup.string().email("Invalid email").required("Required")
    });
    // --------------------------work for signup user-----------------------------------
    const [error, SetError] = useState(null)
    const handelSignUp = async (values) => {
        SignupUser(values).then((res) => {
            openSignup(true)
            // console.log(res.data.message);
        }).catch((err) => {
            // console.log(err.response.data.message);
            SetError(err.response.data.message)
        });
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <Formik
            initialValues={{
                phone: "",
                email: "",
                password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                // same shape as initial values
                //console.log(values);
                handelSignUp(values);
            }}
        >

            {({ errors, touched }) => (
                <Form className=" max-w-[97%] md:max-w-4xl mx-auto flex flex-col p-2">
                    <div className=" mx-auto flex  justify-center flex-col ">
                        <div className="flex flex-row flex-wrap justify-between">
                            <h2 className="font-semibold text-2xl mb-8">Create account</h2>
                            {error !== null ? <h6 className="font-semibold text-xl mb-5 text-[red]">{error}</h6> : null}
                        </div>

                        <div className='mb-5'>
                            {errors.email && touched.email ? (
                                <Field
                                    as={TextField}
                                    label="Email"
                                    id="outlined-basic7"
                                    maxRows={1}
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    error
                                />
                            ) : (
                                <Field
                                    as={TextField}
                                    label="Email"
                                    id="outlined-basic8"
                                    maxRows={1}
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    color="success"
                                />
                            )}
                            {errors.email && touched.email ? (
                                <FormHelperText sx={{ color: "red", m: 1 }}>
                                    {errors.email}
                                </FormHelperText>
                            ) : null}
                        </div>


                        <div className='mb-5'>
                            {errors.phone && touched.phone ? (
                                <Field
                                    as={TextField}
                                    label="Phone"
                                    id="outlined-basic9"
                                    maxRows={1}
                                    variant="outlined"
                                    fullWidth
                                    name="phone"
                                    error
                                />
                            ) : (
                                <Field
                                    as={TextField}
                                    label="Phone"
                                    id="outlined-basic10"
                                    maxRows={1}
                                    variant="outlined"
                                    fullWidth
                                    name="phone"
                                    color="success"
                                />
                            )}
                            {errors.phone && touched.phone ? (
                                <FormHelperText sx={{ color: "red", m: 1 }}>
                                    {errors.phone}
                                </FormHelperText>
                            ) : null}
                        </div>

                        <div className='mb-5'>
                            {errors.password && touched.password ? (
                                <Field
                                    as={TextField}
                                    label="Password"
                                    id="outlined-basic1"
                                    maxRows={1}
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    error
                                />
                            ) : (
                                <Field
                                    as={TextField}
                                    label="Password"
                                    id="outlined-basic2"
                                    maxRows={1}
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    color="success"
                                />
                            )}
                            {errors.password && touched.password ? (
                                <FormHelperText sx={{ color: "red", m: 1 }}>
                                    {errors.password}
                                </FormHelperText>
                            ) : null}
                        </div>
                        <p className="py-5 max-w-xl text-[16px]">By continuing, you agree to Apsensys Care&nbsp;
                            <a className="text-blue-800" href="https://apsensyscare.com/terms-condition">Terms of Use</a> and &nbsp;
                            <a className="text-blue-800" href="https://apsensyscare.com/privacy-policy">Privacy Policy</a></p>
                        <button type='submit' onClick={scrollToTop} className="border-2 border-[#0112FE] px-[30px] py-2 bg-[#0112FE] text-white mx-auto font-bold text-l rounded-md hover:bg-white hover:text-[#0112FE]">Sign Up</button>
                        <hr className="border-b my-5" />
                        <p className="text-[16px]">Apsensys Care User?</p>
                        <div className="my-5 border-[1px] p-3 text-center text-[16px] cursor-pointer text-blue-800 hover:shadow-lg" onClick={() => openSignup(true)}>Login your Apsensys Care account</div>
                    </div>
                </Form>
            )}

        </Formik>
    )
}
const Login = ({ handelLogin }) => {
    const navigate = useNavigate();
    // --------------------------work for password input visiable or hidden and open login /sign up-----------------------------------
    const [showPassword, setShowPassword] = React.useState(false);
    const [showSignup, setShowSignup] = React.useState(true);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const openSignup = (txt) => {
        setShowSignup(txt);
        handleClickShowPassword();
    };
    // --------------------------getting all user inputs for signup_user -----------------------------------
    const [signup, setSignUp] = useState(signupInitialvalue);
    const handleInputs = (values) => {
        setSignUp({ ...signup, [values.target.name]: values.target.value });
    };


    // --------------------------getting all user inputs for login_user -----------------------------------
    const [login, setLogin] = useState(loginInitialvalue);
    const handleloginInputs = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };
    // ---------------------------work for login user------------------------------------
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.user);
    const [loginerror, setLoginError] = useState(null)
    const handelLoginuser = async (values) => {
        try {
            dispatch(fetchUsers(values)).then((res) => {
                // console.log(res.meta.requestStatus)
                if (res.payload !== undefined) {
                    handelLogin(false);
                    if (localStorage.getItem("___gaust_user_address") !== undefined) {
                        const address = {
                            user: sessionStorage.getItem("___user"),
                            ...JSON.parse(localStorage.getItem("___gaust_user_address"))[0]
                        }
                        AddAddress(address).then((res) => {
                            //console.log("done");
                            dispatch(getAddress({ userid: sessionStorage.getItem("___user") }));
                            toast.success("Address added successfully", {
                                position: "bottom-left",
                            });
                            localStorage.removeItem('___gaust_user_address')
                        }).catch((err) => {
                            toast.warning(err.message);
                        });
                    }

                } else if (res.payload === undefined && res.meta.requestStatus === "rejected") {
                    setLoginError("user not found")
                }
            }).catch((error) => {
                console.log(error)
            })

        } catch (error) {
            console.log(error.message);
        }
    };



    const LoginSchema = Yup.object().shape({
        phone: Yup.string()
            .min(1, "Not a Phone Number!")
            .max(10, "Too Long!")
            .required("Required"),
        password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
            .required("Required")
    });

    return (
        <LoginCont>
            <div className="max-w-7xl bg-[#F5F5F5] mx-auto relative p-8 max-h-[100%] overflow-hidden rounded-md">
                <div className="absolute right-0 top-0 bg-red-500 w-8 h-8  text-center text-xl text-white font-bold cursor-pointer font-['system-ui']" onClick={() => handelLogin(false)}>X</div>
                <img src="https://apsensyscare.com/aspensyscare.png" className="w-[80%] md:w-[40%] mb-2 mx-auto" alt="" />
                {
                    showSignup ?
                        (
                            <Formik
                                initialValues={{
                                    phone: "",
                                    password: "",
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={(values) => {
                                    // same shape as initial values
                                    //console.log(values);
                                    handelLoginuser(values)
                                }}

                            >{({ errors, touched }) => (
                                <Form
                                    onChange={() => setLoginError(null)}
                                    className=' max-w-[97%] md:max-w-[90%] mx-auto flex flex-col p-2'>
                                    <div className=" mx-auto flex  justify-center flex-col  ">
                                        <div className="flex flex-row flex-wrap justify-between">
                                            <h2 className="font-semibold text-2xl mb-8">Login account</h2>
                                            {loginerror !== null ? <h6 className="font-semibold text-xl mb-5 text-[red]">{loginerror}</h6> : null}
                                        </div>
                                        <div className='mb-3'>
                                            {errors.phone && touched.phone ? (
                                                <Field
                                                    as={TextField}
                                                    label="Phone Number"
                                                    id="outlined-basic3"
                                                    maxRows={1}
                                                    variant="outlined"
                                                    fullWidth
                                                    name="phone"
                                                    error
                                                />
                                            ) : (
                                                <Field
                                                    as={TextField}
                                                    label="Phone Number"
                                                    id="outlined-basic4"
                                                    maxRows={1}
                                                    variant="outlined"
                                                    fullWidth
                                                    name="phone"
                                                    color="success"
                                                />
                                            )}
                                            {errors.phone && touched.phone ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>
                                                    {errors.phone}
                                                </FormHelperText>
                                            ) : null}
                                        </div>

                                        <div>
                                            {errors.password && touched.password ? (
                                                <Field
                                                    as={TextField}
                                                    label="Password"
                                                    id="outlined-basic5"
                                                    maxRows={1}
                                                    variant="outlined"
                                                    fullWidth
                                                    name="password"
                                                    error
                                                />
                                            ) : (
                                                <Field
                                                    as={TextField}
                                                    label="Password"
                                                    id="outlined-6"
                                                    maxRows={1}
                                                    variant="outlined"
                                                    fullWidth
                                                    name="password"
                                                    color="success"
                                                />
                                            )}
                                            {errors.password && touched.password ? (
                                                <FormHelperText sx={{ color: "red", m: 1 }}>
                                                    {errors.password}
                                                </FormHelperText>
                                            ) : null}
                                        </div>
                                        <p className="py-8 max-w-xl text-[16px]">By continuing, you agree to Apsensys Care
                                            <a className="text-blue-800" href="https://apsensyscare.com/terms-condition">Terms of Use</a> and
                                            <a className="text-blue-800" href="https://apsensyscare.com/privacy-policy">Privacy Policy</a>
                                        </p>
                                         <p>
                                            <a onClick={() => { handelLogin(false); 
                                            
                                            navigate('/forgot-password'); 
                                        }}
                                            className="text-blue-500 cursor-pointer">
                                            Forgot password?
                                          </a>

                                        </p> 
                                        <button type='submit' className="border-2 border-[#0112FE] px-[30px] py-2 bg-[#0112FE] text-white mx-auto font-bold text-l rounded-md hover:bg-white hover:text-[#0112FE]">Sign In</button>
                                        <hr className="border-b my-5" />
                                        <p className="text-[16px]">New to Apsensys Care?</p>
                                        <div className="my-5 border-[1px] p-3 text-center text-[16px] cursor-pointer text-blue-800 hover:shadow-lg" onClick={() => openSignup(false)}>Create your Apsensys Care account</div>
                                    </div>
                                </Form>
                            )}
                            </Formik>
                        )
                        : (
                            <Signup openSignup={openSignup} />
                        )
                }
            </div>
        </LoginCont >
    )
}

export default Login