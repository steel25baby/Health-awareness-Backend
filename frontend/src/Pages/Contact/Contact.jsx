import React from 'react';
import "./Contact.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import Item1 from "../../assets/Contact-banner.jpeg";

function ContactForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Address").required("Your Email is required"),
    fullname: Yup.string().required("Your Full name is required"),
    message: Yup.string().required("A message is required")
  });

  return (
    <div className='Contact'>
      <Formik
        initialValues={{ email: "", fullname: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Contact Data', values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <h1>Contact Us</h1>
            <p>Feel free to contact us any time. We will get back to you as soon as we can.</p>
            <div className='input-group'>
              <div className='input-field'>
                <label htmlFor="email">Email Address</label>
                <Field type="email" name="email" placeholder="Email Address" className="email" />
                <ErrorMessage name='email' component="div" className='error' />
              </div>
              <div className='input-field'>
                <label htmlFor="fullname">Full Name</label>
                <Field type="text" name="fullname" placeholder="Full Name" className="fullname" />
                <ErrorMessage name='fullname' component="div" className='error' />
              </div>
              <div className='input-field'>
                <label htmlFor="message">Message</label>
                <Field type="text" name="message" placeholder="Message" className="message" />
                <ErrorMessage name='message' component="div" className='error' />
              </div>
              <div className='SendDiv'>
                <button type='submit' disabled={isSubmitting} className='Sendbtn'>
                  SEND
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const Media = ({ Name, icon }) => {
  return (
    <div className="Media">
      <div className="Aboutus-icon-wrapper">{icon}</div>
      <h3>{Name}</h3>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <section className='Contact-banner'>
        <div className='Banner-header'><h1>CONTACT US</h1></div>
        <div className='Banner-items'>
          <img src={Item1} alt="Contact Banner" />
        </div>
      </section>
      <section className="socials">
        <div className="Contacts">
          <div className="Contacts-header">Contacts</div>
          <div className="Contacts-icons">
            <Media icon={<RiInstagramFill />} Name="Instagram" />
            <Media icon={<FaFacebookSquare />} Name="Facebook" />
            <Media icon={<FaTwitterSquare />} Name="Twitter" />
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default Contact;
