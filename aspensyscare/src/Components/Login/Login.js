import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AddAddress,
  SignupUser,
  fetchUsers,
  getAddress,
  userResetPassword,
  UserupdatePassword,
} from "../../Api/Api";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
<<<<<<< HEAD
import { toast } from "react-toastify";
import "./Login.css";

const LoginCont = styled("div")`
=======
import { toast } from 'react-toastify';
// import "./Login.css";
const LoginCont = styled('div')`
>>>>>>> f21de26dec7ab686eb02c5c7cec4ec2afcae0ad1
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
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const [error, SetError] = useState(null);

  const handelSignUp = async (values) => {
    SignupUser(values)
      .then((res) => {
        openSignup(true);
      })
      .catch((err) => {
        SetError(err.response.data.message);
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
        handelSignUp(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="max-w-[97%] md:max-w-4xl mx-auto flex flex-col p-2">
          <div className="mx-auto flex justify-center flex-col">
            <div className="flex flex-row flex-wrap justify-between">
              <h2 className="font-semibold text-2xl mb-8">Create account</h2>
              {error !== null ? (
                <h6 className="font-semibold text-xl mb-5 text-[red]">
                  {error}
                </h6>
              ) : null}
            </div>

            <div className="mb-5">
              <Field
                as={TextField}
                label="Email"
                id="outlined-basic8"
                maxRows={1}
                variant="outlined"
                fullWidth
                name="email"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
                color="success"
              />
            </div>

            <div className="mb-5">
              <Field
                as={TextField}
                label="Phone"
                id="outlined-basic10"
                maxRows={1}
                variant="outlined"
                fullWidth
                name="phone"
                error={errors.phone && touched.phone}
                helperText={errors.phone && touched.phone && errors.phone}
                color="success"
              />
            </div>

            <div className="mb-5">
              <Field
                as={TextField}
                label="Password"
                id="outlined-basic2"
                maxRows={1}
                variant="outlined"
                fullWidth
                name="password"
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
                color="success"
              />
            </div>
            <p className="py-5 max-w-xl text-[16px]">
              By continuing, you agree to Apsensys Care&nbsp;
              <a
                className="text-blue-800"
                href="https://apsensyscare.com/terms-condition"
              >
                Terms of Use
              </a>{" "}
              and &nbsp;
              <a
                className="text-blue-800"
                href="https://apsensyscare.com/privacy-policy"
              >
                Privacy Policy
              </a>
            </p>
            <button
              type="submit"
              className="border-2 border-[#0112FE] px-[30px] py-2 bg-[#0112FE] text-white mx-auto font-bold text-l rounded-md hover:bg-white hover:text-[#0112FE]"
            >
              Sign Up
            </button>
            <hr className="border-b my-5" />
            <p className="text-[16px]">Apsensys Care User?</p>
            <div
              className="my-5 border-[1px] p-3 text-center text-[16px] cursor-pointer text-blue-800 hover:shadow-lg"
              onClick={() => openSignup(true)}
            >
              Login your Apsensys Care account
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const ForgotPassword = ({ openResetPassword }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const ForgotPasswordSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter a valid number.",
        excludeEmptyString: false,
      })
      .required("Required"),
  });

  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [labelColor, setLabelColor] = useState("grey");
  const handleSubmit = async (values) => {
    setLabelColor("red");
    try {
      await userResetPassword({ phone: values.phone });
      toast.success(
        "We have sent a reset password link to your registered phone"
      );
      localStorage.setItem("__phone", values.phone);
      openResetPassword(true);
    } catch (err) {
      if (values.phone === "") {
        toast.error("Enter the phone number");
      } else {
        setErrorMessage(
          err.response?.data?.message || "Phone number has not been registered"
        );
        toast.error(
          err.response?.data?.message || "Phone number has not been registered"
        );
      }
    }
    // setPopupMessage('OTP has been sent to your phone number');
    setPopupVisible(true);
  };

  return (
    <>
      <Formik
        initialValues={{ phone: "" }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="max-w-[97%] md:max-w-4xl mx-auto flex flex-col p-2">
            <div className="mx-auto flex justify-center flex-col">
              <h2 className="font-semibold text-2xl mb-8">Forgot Password</h2>
              <div className="mb-5">
                <Field
                  as={TextField}
                  label="Enter Registered phone number"
                  id="outlined-basic-phone"
                  maxRows={1}
                  variant="outlined"
                  fullWidth
                  name="phone"
                  error={errors.phone && touched.phone}
                  helperText={errors.phone && touched.phone && errors.phone}
                  InputLabelProps={{ style: { color: labelColor } }} // Dynamically set label color based on state
                />
              </div>
              <button  
                type="submit"
                className="border-2 border-[#0112FE] px-[30px] py-2 bg-[#0112FE] text-white mx-auto font-bold text-l rounded-md hover:bg-white hover:text-[#0112FE]"
              >
                Send OTP
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" box-popup bg-white p-4 rounded-md shadow-lg">
            <p className="w-[10%] flex justify-center items-center popup-msg text-red">
              {popupMessage}
            </p>
            <button
              onClick={() => setPopupVisible(false)}
              className="mt-4 border-2 border-[#0112FE] float-right px-4 py-2 bg-[#0112FE] text-white font-bold rounded-md hover:bg-white hover:text-[#0112FE]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const ResetPassword = ({ openResetPassword }) => {
    const ResetPasswordSchema = Yup.object().shape({
      otp: Yup.string().required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    });
  
    const initialPasswordState = {
      password: "",
      otp: "",
      confirmPassword: "",
    };
  
    const [password, setPassword] = useState(initialPasswordState);
    const [passworderror, setPassworderror] = useState(null); // State for password error
  
    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      return passwordRegex.test(password);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setPassword((prev) => ({ ...prev, [name]: value }));
      setPassworderror(null); // Reset password error on change
    };
  
    const handleResetPassword = async (values) => {
      if (password.password !== password.confirmPassword) {
        console.error("Passwords do not match");
        toast.error("Passwords do not match");
        setPassworderror("Passwords do not match"); // Set password error state for mismatch
      } else if (!validatePassword(password.password)) {
        console.error("Password does not meet requirements");
        toast.error("Password does not meet requirements");
        setPassworderror("Password does not meet requirements"); // Set password error state for requirements not met
      } else {
        try {
          // Simulating async password update
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.info("Password updated successfully");
          toast.success("Password updated successfully");
          setPassword(initialPasswordState);
          openResetPassword(false);
        } catch (error) {
          console.error("Error updating password:", error);
          toast.error("Error updating password");
          setPassworderror("Error updating password"); // Set password error state for specific error
        }
      }
    };
  
    return (
      <Formik
        initialValues={password}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values) => {
          handleResetPassword(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="max-w-[97%] md:max-w-4xl mx-auto flex flex-col p-2">
            <div className="mx-auto flex justify-center flex-col">
              <h2 className="font-semibold text-2xl mb-8">Reset Password</h2>
              {passworderror && (
                <h6 className="font-semibold text-xl mb-5 text-[red]">
                  {passworderror}
                </h6>
              )}
              <div className="mb-5">
                <Field
                  as={TextField}
                  label="OTP"
                  id="outlined-basic-otp"
                  maxRows={1}
                  variant="outlined"
                  fullWidth
                  name="otp"
                  value={password.otp}
                  onChange={handleChange}
                  error={errors.otp && touched.otp}
                  helperText={errors.otp && touched.otp && errors.otp}
                  color="success"
                />
              </div>
              <div className="mb-5">
                <Field
                //   type="password"
                  name="password"
                  placeholder="Enter New Password"
                  required
                  as={TextField}
                  label="New Password"
                  id="outlined-basic-new-password"
                  maxRows={1}
                  variant="outlined"
                  fullWidth
                  value={password.password}
                  onChange={handleChange}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  color="success"
                />
              </div>
              <div className="mb-5">
                <Field
                //   type="password"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                  required
                  as={TextField}
                  label="Confirm Password"
                  id="outlined-basic-confirm-password"
                  maxRows={1}
                  variant="outlined"
                  fullWidth
                  value={password.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword && touched.confirmPassword}
                  helperText={
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword
                  }
                  color="success"
                />
              </div>
              <button
                type="submit"
                onClick={handleResetPassword}
                className="border-2 border-[#0112FE] px-[30px] py-2 bg-[#0112FE] text-white mx-auto font-bold text-l rounded-md hover:bg-white hover:text-[#0112FE]"
              >
                Reset Password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  };
  

const Login = ({ handelLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showSignup, setShowSignup] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const [loginerror, setLoginError] = useState(null);

  const openSignup = (txt) => {
    setShowSignup(txt);
    setShowForgotPassword(false);
    setShowResetPassword(false);
  };

  const openForgotPassword = (txt) => {
    setShowForgotPassword(txt);
    setShowSignup(false);
    setShowResetPassword(false);
  };

  const openResetPassword = (txt) => {
    setShowResetPassword(txt);
    setShowSignup(false);
    setShowForgotPassword(false);
  };

  const handelLoginuser = async (values) => {
    try {
      dispatch(fetchUsers(values))
        .then((res) => {
          if (res.payload !== undefined) {
            handelLogin(false);
            if (localStorage.getItem("___gaust_user_address") !== undefined) {
              const address = {
                user: sessionStorage.getItem("___user"),
                ...JSON.parse(localStorage.getItem("___gaust_user_address"))[0],
              };
              AddAddress(address)
                .then((res) => {
                  dispatch(
                    getAddress({ userid: sessionStorage.getItem("___user") })
                  );
                  toast.success("Address added successfully", {
                    position: "bottom-left",
                  });
                  localStorage.removeItem("___gaust_user_address");
                })
                .catch((err) => {
                  toast.warning(err.message);
                });
            }
          } else if (
            res.payload === undefined &&
            res.meta.requestStatus === "rejected"
          ) {
            setLoginError("user not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const LoginSchema = Yup.object().shape({
    phone: Yup.string()
      .test("phoneOrEmail", "Invalid phone or email", (value) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return true;
        }
        return /^[6-9]\d{9}$/.test(value);
      })
      .required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Required"),
  });

  return (
    <LoginCont>
      <div className="max-w-7xl bg-[#F5F5F5] mx-auto relative p-8 max-h-[100%] overflow-hidden rounded-md">
        <div
          className="absolute right-0 top-0 bg-red-500 w-8 h-8 text-center text-xl text-white font-bold cursor-pointer font-['system-ui']"
          onClick={() => handelLogin(false)}
        >
          X
        </div>
        <img
          src="https://apsensyscare.com/aspensyscare.png"
          className="w-[80%] md:w-[40%] mb-2 mx-auto"
          alt=""
        />
        {showSignup ? (
          <Formik
            initialValues={{
              phone: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              handelLoginuser(values);
            }}
          >
            {({ errors, touched }) => (
              <Form
                onChange={() => setLoginError(null)}
                className="max-w-[97%] md:max-w-[90%] mx-auto flex flex-col p-2"
              >
                <div className="mx-auto flex justify-center flex-col">
                  <div className="flex flex-row flex-wrap justify-between">
                    <h2 className="font-semibold text-2xl mb-8">
                      Login account
                    </h2>
                    {loginerror !== null ? (
                      <h6 className="font-semibold text-xl mb-5 text-[red]">
                        {loginerror}
                      </h6>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <Field
                      as={TextField}
                      label="Phone Number/Email"
                      id="outlined-basic4"
                      maxRows={1}
                      variant="outlined"
                      fullWidth
                      name="phone"
                      error={errors.phone && touched.phone}
                      helperText={errors.phone && touched.phone && errors.phone}
                      color="success"
                    />
                  </div>

                  <div>
                    <Field
                      as={TextField}
                      label="Password"
                      id="outlined-basic6"
                      maxRows={1}
                      variant="outlined"
                      fullWidth
                      name="password"
                      error={errors.password && touched.password}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                      color="success"
                    />
                  </div>
                  <p className="py-8 max-w-xl text-[16px]">
                    By continuing, you agree to Apsensys Care
                    <a
                      className="text-blue-800"
                      href="https://apsensyscare.com/terms-condition"
                    >
                      Terms of Use
                    </a>{" "}
                    and
                    <a
                      className="text-blue-800"
                      href="https://apsensyscare.com/privacy-policy"
                    >
                      Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a
                      onClick={() => openForgotPassword(true)}
                      className="text-blue-500 cursor-pointer"
                    >
                      Forgot password?
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="border-2 border-[#0112FE] px-[30px] py-2 bg-[#0112FE] text-white mx-auto font-bold text-l rounded-md hover:bg-white hover:text-[#0112FE]"
                  >
                    Sign In
                  </button>
                  <hr className="border-b my-5" />
                  <p className="text-[16px]">New to Apsensys Care?</p>
                  <div
                    className="my-5 border-[1px] p-3 text-center text-[16px] cursor-pointer text-blue-800 hover:shadow-lg"
                    onClick={() => openSignup(false)}
                  >
                    Create your Apsensys Care account
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ) : showForgotPassword ? (
          <ForgotPassword openResetPassword={openResetPassword} />
        ) : showResetPassword ? (
          <ResetPassword openResetPassword={openResetPassword} />
        ) : (
          <Signup openSignup={openSignup} />
        )}
      </div>
    </LoginCont>
  );
};

export default Login;
