import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addContactFormData } from "../Component/Redux/ContactSlice";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import "../Css/Contact.css";

const Contact = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  const onSubmit = (values, { resetForm,setFieldError }) => {
    if(!values.email.includes("@")){
      setFieldError("email", 'Invalid email format');
      toast.error('Invalid email format!');
      return;
    }
    dispatch(addContactFormData(values));
    toast.success("Form submitted successfully!");
    console.log("Form submitted successfully!", values);
    resetForm();
  };

  return (
    <div className="container">
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({isValid, dirty}) => (
            <Form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="form-control"
                  rows="4"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit" className="submit-button" disabled={!isValid || !dirty}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
