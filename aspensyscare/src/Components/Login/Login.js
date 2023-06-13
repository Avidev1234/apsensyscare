import styled from '@emotion/styled';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SignupUser, fetchUsers } from '../../Api/Api';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

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
const BlurImg = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
    const handelSignUp = async (values) => {
        SignupUser(values).then((res) => {
            openSignup(true)
            console.log("done");
        }).catch((err) => {
            console.log(err);
        });
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const scrollToTop = () =>{
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
                <Form class="scroolbar max-w-[97% md:max-w-4xl mx-auto flex  h-[500px] md:[700px]  overflow-y-scroll  flex-col p-2">
                    <div class=" mx-auto flex  justify-center flex-col ">
                        <h2 class="font-semibold text-3xl mb-5">Create account</h2>

                        <div className='mb-5'>
                            {errors.email && touched.email ? (
                                <Field
                                    as={TextField}
                                    label="Email"
                                    id="outlined-basic"
                                    multiline
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
                                    id="outlined-basic"
                                    multiline
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
                                    id="outlined-basic"
                                    multiline
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
                                    id="outlined-basic"
                                    multiline
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
                                    id="outlined-basic"
                                    multiline
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
                                    id="outlined-basic"
                                    multiline
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
                        <p class="py-8 max-w-xl text-xl">By continuing, you agree to Apsensys Care&nbsp;
                            <a class="text-blue-800" href="https://apsensyscare.com/terms-condition">Terms of Use</a> and &nbsp;
                            <a class="text-blue-800" href="https://apsensyscare.com/privacy-policy">Privacy Policy</a></p>
                        <button type='submit' onClick={scrollToTop} class="border-2 border-[#0112FE] px-[50px] py-5 bg-[#0112FE] text-white mx-auto font-bold text-xl hover:bg-white hover:text-[#0112FE]">Sign Up</button>
                        <hr class="border-b my-10" />
                        <p class="text-xl">Apsensys Care User?</p>
                        <div class="my-10 border-[1px] p-5 text-center text-xl cursor-pointer" onClick={() => openSignup(true)}>Login your Apsensys Care account</div>
                    </div>
                </Form>
            )}

        </Formik>
    )
}
const Login = ({ handelLogin }) => {
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
    const user = useSelector((state) => state.user);

    const handelLoginuser = async (values) => {
        try {
            await dispatch(fetchUsers(values));
            handelLogin(false);
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
            <div class="max-w-7xl bg-[#F5F5F5] mx-auto relative p-8 max-h-[100%] overflow-hidden">
                <div class="absolute right-4 top-2 bg-red-500 w-8 h-8 rounded-full text-center text-xl text-white font-bold cursor-pointer" onClick={() => handelLogin(false)}>X</div>
                <img src="https://apsensyscare.com/aspensyscare.png" class="w-[80%] md:w-[40%] mb-10 mx-auto" alt="" />
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
                                <Form className='scroolbar max-w-[97%] md:max-w-[90%] mx-auto flex h-[500px] md:[700px] overflow-y-scroll  flex-col p-2'>
                                    <div class=" mx-auto flex  justify-center flex-col  ">
                                        <h2 class="font-semibold text-3xl mb-5">Sign in</h2>
                                        <div className='mb-5'>
                                            {errors.phone && touched.phone ? (
                                                <Field
                                                    as={TextField}
                                                    label="Phone Number"
                                                    id="outlined-basic"
                                                    multiline
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
                                                    id="outlined-basic"
                                                    multiline
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
                                                    id="outlined-basic"
                                                    multiline
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
                                                    id="outlined-basic"
                                                    multiline
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

                                        <p class="py-8 max-w-xl text-xl">By continuing, you agree to Apsensys Care
                                            <a class="text-blue-800" href="https://apsensyscare.com/terms-condition">Terms of Use</a> and
                                            <a class="text-blue-800" href="https://apsensyscare.com/privacy-policy">Privacy Policy</a></p>
                                        <button type='submit' class="border-2 border-[#0112FE] px-[50px] py-5 bg-[#0112FE] text-white mx-auto font-bold text-xl hover:bg-white hover:text-[#0112FE]">Sign In</button>

                                        <hr class="border-b my-10" />
                                        <p class="text-xl">New to Apsensys Care?</p>
                                        <div class="my-10 border-[1px] p-5 text-center text-xl cursor-pointer" onClick={() => openSignup(false)}>Create your Apsensys Care account</div>
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