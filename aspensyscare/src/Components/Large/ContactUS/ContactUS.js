import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import "./contactus.css";
import { TextField } from "@mui/material";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FormHelperText from "@mui/material/FormHelperText";
import { Adcontact } from "../../../Api/Api"; 
import emailjs from '@emailjs/browser';
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
    // console.log(contact);
    Adcontact(contact).then((res) => {
      // console.log(typeof (res));
      emailjs.send('service_ku0q4co', 'template_sgadbch', contact, 'OW7pYkljP7tzyg0Pz')
        .then(() => {
          toast.success("Message send successfully", {
            position: "bottom-left",
          });
        })
    })
      .catch((err) => {
        toast.warning("somethings went wrong", {
          position: "bottom-left",
        });
      });

  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  })
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
                  Apsensys Care Solution Pvt Ltd.,<br />  No: 105, Apsensys Business Tower, Service Road, Hormavu, Bengaluru, Karnataka 560043.
                </p>
              </div>
            </div>
            <div className="address-descri">
              <PhoneIcon className="icon" />
              <div>
                <h4 className="font-bold tracking-wide text-xl">PHONE</h4>
                <p className="pt-3">+91 7996997979</p>
              </div>
            </div>
            <div className="address-descri">
              <MailIcon className="icon" />
              <div>
                <h4 className="font-bold tracking-wide text-xl">EMAIL</h4>
                <p className="pt-3">sales@apsensyscare.com</p>
              </div>
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
