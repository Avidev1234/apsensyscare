import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import "./contactus.css";
import { TextField } from "@mui/material";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FormHelperText from "@mui/material/FormHelperText";
import { Adcontact } from "../../Api/Api";

const ContactUS = () => {
  //console.log(handelLogin)
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
      .min(10, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),
  });

  //console.log(details)
  const saveAddress = async (values) => {
    const contact = Object.assign(
      { user: sessionStorage.getItem("___user") },
      values
    );
    console.log(contact);
    Adcontact(contact).then((res) => {
      console.log(typeof(res));
      if(res===true){
        toast.success("Message send successfully", {
          position: "bottom-left",
        });
      }else{
        toast.error("Somethings went wrong", {
          position: "bottom-left",
        });
      }
      
    })
      .catch((err) => {
        console.log(err);
      });

  };
  return (
    <div className="contactdiv">
      <div className="contactCont">
        <div className="address-div">
          <h1 className="font-bold text-5xl">CONTACT US</h1>
          <div className="address-div-cont">
            <div className="address-descri">
              <LocationOnIcon className="icon" />
              <div>
                <h4 className="font-bold tracking-wide text-xl">ADDRESS</h4>
                <p className="pt-3">
                  Apsensys Business Tower Service Rd, Vijaya Bank Colony
                  Kallumantapa, Horamavu, Bengaluru, Karnataka 560043
                </p>
              </div>
            </div>
            <div className="address-descri">
              <PhoneIcon className="icon" />
              <div>
                <h4 className="font-bold tracking-wide text-xl">PHONE</h4>
                <p className="pt-3">+91 7022478825</p>
              </div>
            </div>
            <div className="address-descri">
              <MailIcon className="icon" />
              <div>
                <h4 className="font-bold tracking-wide text-xl">EMAIL</h4>
                <p className="pt-3">apsensyscare@gmail.com</p>
              </div>
            </div>
            <div className="address-ion">
              <a href="https://www.linkedin.com/company/apsensyscare/">
                <img
                  src={`${process.env.REACT_APP_URL}Image/icons/linkedin.png`}
                  alt="social-icon"
                  width={30}
                  height={30}
                  className="pointer"
                />
              </a>
              <a href="https://twitter.com/ApsensysCare">
                <img
                  src={`${process.env.REACT_APP_URL}Image/icons/twiter.png`}
                  alt="social-icon"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.youtube.com/@apsensyscare">
                <img
                  src={`${process.env.REACT_APP_URL}Image/icons/youtube.png`}
                  alt="social-icon"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.facebook.com/apsensyscare/">
                <img
                  src={`${process.env.REACT_APP_URL}Image/icons/facebook.png`}
                  alt="social-icon"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.instagram.com/apsensyscaresolution/">
                <img
                  src={`${process.env.REACT_APP_URL}Image/icons/instagram.png`}
                  alt="social-icon"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="form-div ">
          <p style={{ color: "#868686", fontWeight: "600", marginTop: "20px" }}>
            Leave Us Message{" "}
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values) => {
              // same shape as initial values
              //console.log(values);
              saveAddress(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {errors.name && touched.name ? (
                  <Field
                    as={TextField}
                    id="standard-multiline-flexible"
                    label="Name"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="name"
                    fullWidth
                    margin="dense"
                    error
                  />
                ) : (
                  <Field
                    as={TextField}
                    id="standard-multiline-flexible"
                    label="Name"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="name"
                    fullWidth
                    margin="dense"
                    color="success"
                  />
                )}
                {errors.name && touched.name ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.name}
                  </FormHelperText>
                ) : null}

                {errors.email && touched.email ? (
                  <Field
                    as={TextField}
                    id="standard-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="email"
                    fullWidth
                    margin="dense"
                    error
                  />
                ) : (
                  <Field
                    as={TextField}
                    id="standard-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    variant="standard"
                    name="email"
                    fullWidth
                    margin="dense"
                    color="success"
                  />
                )}
                {errors.email && touched.email ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.email}
                  </FormHelperText>
                ) : null}
                {errors.message && touched.message ? (
                  <Field
                    as={TextField}
                    id="standard-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={8}
                    variant="standard"
                    name="message"
                    fullWidth
                    margin="dense"
                    error
                  />
                ) : (
                  <Field
                    as={TextField}
                    id="standard-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={8}
                    variant="standard"
                    name="message"
                    fullWidth
                    margin="dense"
                    color="success"
                  />
                )}
                {errors.message && touched.message ? (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.message}
                  </FormHelperText>
                ) : null}
                <button className="form-button">submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
